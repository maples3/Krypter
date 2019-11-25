import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../types/state";
import { myDispatcher, updateCaesarLetter } from "../../store/actionGenerators";
import { generateCiphertextAlphabet } from "../../crypto/caesar";
import './CaesarSection.scss'
import AlphabetDisplay from "../AlphabetDisplay/AlphabetDisplay";

interface CaesarSectionProps {
    shift: number;
};

class CaesarSection extends React.Component<CaesarSectionProps> {
    render() {
        return <div>
            <div className="CaesarSection">
                <label>Shift</label>
                <input type="number" value={this.props.shift} onChange={evt => this.handleKeyLetterChange(evt)} />
            </div>
            <AlphabetDisplay ctAlphabet={this.getCtAlphabet()} />
        </div>
    }

    handleKeyLetterChange(evt: React.ChangeEvent<HTMLInputElement>) {
        let shift = evt.target.value;
        myDispatcher(updateCaesarLetter(parseInt(shift)));
    }

    getCtAlphabet(): string {
        return generateCiphertextAlphabet(this.props.shift);
    }
}

function mapStateToProps(state: IAppState): CaesarSectionProps {
    return {
        shift: state.caesarSection.shift
    }
}

export default connect(mapStateToProps)(CaesarSection);
