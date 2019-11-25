import React from "react";
import { IAppState } from "../../types/state";
import { connect } from "react-redux";
import { myDispatcher, updateCaesarLetter } from "../../store/actionGenerators";
import './CaesarSection.scss'

interface CaesarSectionProps {
    keyLetter: string;
};

class CaesarSection extends React.Component<CaesarSectionProps> {
    render() {
        return <div className="CaesarSection">
            <label>Key Letter</label>
            <input type="text" value={this.props.keyLetter} onChange={evt => this.handleKeyLetterChange(evt)} />
        </div>
    }

    handleKeyLetterChange(evt: React.ChangeEvent<HTMLInputElement>) {
        let newKeyLetter = evt.target.value;
        myDispatcher(updateCaesarLetter(newKeyLetter));
    }
}

function mapStateToProps(state: IAppState): CaesarSectionProps {
    return {
        keyLetter: state.caesarSection.keyLetter
    }
}

export default connect(mapStateToProps)(CaesarSection);
