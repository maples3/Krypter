import { IAppState } from "../../types/state";
import React from "react";
import { Ciphers } from "../../types/ciphers";
import KeywordSection from "../KeywordSection/KeywordSection";
import { connect } from "react-redux";
import CipherSelector from "../CipherSelector/CipherSelector";

type CiphersSectionProps = IAppState;

interface CiphersSectionState {
}

class CiphersSectionSection extends React.Component<CiphersSectionProps, CiphersSectionState> {
    render() {
        return <div>
            <CipherSelector />
            {this.props.cipher === Ciphers.KEYWORD && <KeywordSection />}
        </div>
    }
}

function mapStateToProps (state: IAppState): CiphersSectionProps {
    return state;
}

// export default KeySection;
export default connect(mapStateToProps)(CiphersSectionSection);
