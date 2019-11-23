import React from "react";
import { alphabet } from "../../crypto/common";
import KeyLetter from "./KeyLetter/KeyLetter";
import { IAppState } from "../../types/state";
import { connect } from "react-redux";
import './MascSection.css'

interface MascSectionProps {
    letterValues: string[];
}

class MascSection extends React.Component<MascSectionProps> {
    render() {

        let keyLetters : JSX.Element[] = [];
        for (let i=0; i<alphabet.length; i++) {
            keyLetters.push(<KeyLetter key={i} index={i} value={this.props.letterValues[i]} />)
        }

        return <div className="MascSection">
                <div className="MascSectionRowHeader">
                    <p>Plaintext</p>
                    <p>Ciphertext</p>
                </div>
                { keyLetters }
        </div>;
    }
}

function mapStateToProps(state: IAppState): MascSectionProps {
    return { letterValues: state.mascSection.letters };
}

export default connect(mapStateToProps)(MascSection);
