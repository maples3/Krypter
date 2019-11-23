import React from "react";
import { Ciphers } from "../../types/ciphers";
import './CipherSelector.css'
import { IAppState } from "../../types/state";
import { connect } from "react-redux";
import { myDispatcher, updateCipherSelector } from "../../store/actionGenerators";

interface CipherSelectorProps {
    cipher: Ciphers,
    preserveFormatting: boolean,
    decrypt: boolean
}

interface CipherSelectorState {
}

const cipherList = new Map<string, Ciphers>([
    ["Keyword", Ciphers.KEYWORD],
    ["MASC", Ciphers.MASC],
]);

class CipherSelector extends React.Component<CipherSelectorProps, CipherSelectorState> {
    render() {
        let options: JSX.Element[] = [];
        cipherList.forEach(
            (enumValue: Ciphers, displayName: string) => {
                options.push(<option value={displayName}>{displayName}</option>);
            }
        );

        return <div className="CipherSelector">
            <div className="Cipher">
                <select value={this.props.cipher} onChange={evt => this.handleCipherChange(evt)}>
                    { options }
                </select>
            </div>
            <div className="Direction">
                <label><input type="radio" name="direction" value="encrypt" checked={this.props.decrypt === false} onChange={() => this.handleDirectionChange(false)} />Encrypt</label><br />
                <label><input type="radio" name="direction" value="decrypt" checked={this.props.decrypt === true}  onChange={() => this.handleDirectionChange(true)}  />Decrypt</label>
            </div>
            <div className="PreserveFormatting">
                <label><input type="checkbox" name="preserveFormatting" checked={this.props.preserveFormatting} onChange={() => this.handlePreserveFormattingChange()} />Preserve Formatting</label>
            </div>
        </div>;
    }

    handleCipherChange(evt: React.ChangeEvent<HTMLSelectElement>) {
        let cipher = cipherList.get(evt.target.value);
        if (cipher !== undefined) {
            myDispatcher(updateCipherSelector(cipher, this.props.decrypt, this.props.preserveFormatting));
        }
    }
    
    handleDirectionChange(decrypt: boolean) {
        myDispatcher(updateCipherSelector(this.props.cipher, decrypt, this.props.preserveFormatting));
    }
    
    handlePreserveFormattingChange() {
        // This one is just a simple toggle
        myDispatcher(updateCipherSelector(this.props.cipher, this.props.decrypt, ! this.props.preserveFormatting));
    }
}

function mapStateToProps(state: IAppState): CipherSelectorProps {
    return {
        cipher: state.cipher,
        preserveFormatting: state.preserveFormatting,
        decrypt: state.decrypt
    }
}

export default connect(mapStateToProps)(CipherSelector);
