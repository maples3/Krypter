import React from 'react';
import { connect } from 'react-redux';
import './KeywordSection.scss'
import KeyInput from './KeyInput/KeyInput';
import { IKeywordSection, IAppState } from '../../types/state';
import { generateLetterMappings } from '../../crypto/keyword';

type KeySectionProps = IKeywordSection;

interface KeySectionState {
}

class KeywordSection extends React.Component<KeySectionProps, KeySectionState> {
    render() {
        let alphabet: JSX.Element[] = [];

        let keyLetters = generateLetterMappings(this.props.keyword, this.props.keyletter);
        keyLetters.forEach( (inputValue: string, ptLetter: string, map: Map<string, string>) => {
            alphabet.push(<div className="displayKeyLetter">
                <p>{ptLetter}</p>
                <p>{inputValue}</p>
            </div>)
        })

        return <div className="KeywordSection">
            <div className="KeywordInputCenter"><KeyInput></KeyInput></div>
            
            {   // Shortcut syntax to render alphabetSection only if the below 2 booleans are true
                this.props.validKeyword && this.props.validKeyletter &&
                <div className="alphabetSection">
                    <div className="letterRowHeader"><p>Plaintext</p><p>Ciphertext</p></div>
                    {alphabet}
                </div>
            }
        </div>
    }
}

function mapStateToProps (state: IAppState): KeySectionProps {
    return state.keywordSection;
}

export default connect(mapStateToProps)(KeywordSection);
