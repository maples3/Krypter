import { IAppState } from "../../types/state";
import React from "react";
import { Ciphers } from "../../types/ciphers";
import KeywordSection from "../KeywordSection/KeywordSection";
import { connect } from "react-redux";
import CipherSelector from "../CipherSelector/CipherSelector";
import MascSection from "../MascSection/MascSection";
import CaesarSection from "../CaesarSection/CaesarSection";

interface CiphersSectionProps {
    cipher: Ciphers;
};

class CiphersSection extends React.Component<CiphersSectionProps> {
    render() {
        return <div>
            <CipherSelector />
            { this.props.cipher === Ciphers.KEYWORD && <KeywordSection /> }
            { this.props.cipher === Ciphers.MASC && <MascSection /> }
            { this.props.cipher === Ciphers.CAESAR && <CaesarSection /> }
        </div>
    }
}

function mapStateToProps (state: IAppState): CiphersSectionProps {
    return {
        cipher: state.cipher
    };
}

// export default KeySection;
export default connect(mapStateToProps)(CiphersSection);
