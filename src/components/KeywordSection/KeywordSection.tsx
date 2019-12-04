import React from 'react';
import { connect } from 'react-redux';
import KeyInput from './KeyInput/KeyInput';
import { IKeywordSection, IAppState } from '../../types/state';
import { generateCiphertextAlphabet } from '../../crypto/keyword';
import AlphabetDisplay from '../AlphabetDisplay/AlphabetDisplay';

type KeySectionProps = IKeywordSection;

class KeywordSection extends React.Component<KeySectionProps> {
    render() {
        return <div>
            <KeyInput keyword={this.props.keyword} keyletter={this.props.keyletter} />
            {   // Shortcut syntax to render alphabetSection only if the below 2 booleans are true
                this.props.validKeyword && this.props.validKeyletter && <AlphabetDisplay ctAlphabet={this.getCtAlphabet()} />
            }
        </div>;
    }

    getCtAlphabet(): string {
        return generateCiphertextAlphabet(this.props.keyword, this.props.keyletter);
    }
}

function mapStateToProps (state: IAppState): KeySectionProps {
    return state.keywordSection;
}

export default connect(mapStateToProps)(KeywordSection);
