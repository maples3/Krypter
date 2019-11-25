import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../types/state";
import { myDispatcher, updateCaesarLetter } from "../../store/actionGenerators";
import { generateCiphertextAlphabet } from "../../crypto/caesar";
import './CaesarSection.scss'
import AlphabetDisplay from "../AlphabetDisplay/AlphabetDisplay";

interface CaesarSectionProps {
    keyLetter: string;
};

class CaesarSection extends React.Component<CaesarSectionProps> {
    render() {
        return <div>
            <div className="CaesarSection">
                <label>Key Letter</label>
                <input type="text" value={this.props.keyLetter} onChange={evt => this.handleKeyLetterChange(evt)} />
            </div>
            { this.props.keyLetter !== "" && <AlphabetDisplay ctAlphabet={this.getCtAlphabet()} /> }
        </div>
    }

    handleKeyLetterChange(evt: React.ChangeEvent<HTMLInputElement>) {
        let newKeyLetter = evt.target.value;
        myDispatcher(updateCaesarLetter(newKeyLetter));
    }

    getCtAlphabet(): string {
        return generateCiphertextAlphabet(this.props.keyLetter);
    }
}

function mapStateToProps(state: IAppState): CaesarSectionProps {
    return {
        keyLetter: state.caesarSection.keyLetter
    }
}

export default connect(mapStateToProps)(CaesarSection);
