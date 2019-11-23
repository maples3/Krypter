import React from 'react';
import { connect } from 'react-redux';
import KeyLetter from './KeyLetter/KeyLetter';
import './KeywordSection.css'
import KeyInput from './KeyInput/KeyInput';
import { IKeywordSection, IAppState } from '../../types/state';

type KeySectionProps = IKeywordSection;

interface KeySectionState {
}

class KeywordSection extends React.Component<KeySectionProps, KeySectionState> {
    render() {
        // console.log(this.props);

        let alphabet: JSX.Element[] = [];
        this.props.keyLetters.forEach( (inputValue: string, ptLetter: string, map: Map<string, string>) => {
            alphabet.push(<KeyLetter key={ptLetter} ptLetter={ptLetter} ctLetter={inputValue} />)
        })

        return <div className="KeywordSection">
            <div className="KeywordInputCenter"><KeyInput></KeyInput></div>
            
            {   // Shortcut syntax to render alphabetSection only if the below 2 booleans are true
                this.props.validKeyword && this.props.validKeyletter &&
                <div className="alphabetSection">
                    <div className="rowHeader"><p>Plaintext</p><p>Ciphertext</p></div>
                    {alphabet}
                </div>
            }
        </div>
    }
}

function mapStateToProps (state: IAppState): KeySectionProps {
    return state.keySection;
}

// export default KeySection;
export default connect(mapStateToProps)(KeywordSection);
