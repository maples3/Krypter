import React from "react";
import { myDispatcher, updateKeywordSection } from "../../../store/actionGenerators";
import './KeyInput.scss';

interface KeyInputProps {
}

interface KeyInputState {
    keyword: string;
    keyletter: string;
}

class KeyInput extends React.Component<KeyInputProps, KeyInputState> {
    constructor(props: KeyInputProps) {
        super(props);
        this.state = { keyword: "", keyletter: "" };
    }

    render() {
        return <div className="KeyInput">
            <label>Keyword</label>
            <input type="text" value={this.state.keyword} onChange={evt => this.updateKeywordValue(evt)} />

            <label>Key letter</label>
            <input type="text" value={this.state.keyletter} onChange={evt => this.updateKeyLetterValue(evt)} />
        </div>;
    }

    updateKeywordValue(evt: React.ChangeEvent<HTMLInputElement>) {
        var newKeyword = evt.target.value;
        this.setState({ keyword: newKeyword });
        myDispatcher(updateKeywordSection(newKeyword, this.state.keyletter));
    }

    updateKeyLetterValue(evt: React.ChangeEvent<HTMLInputElement>) {
        var newKeyletter = evt.target.value;
        this.setState({ keyletter: newKeyletter });
        myDispatcher(updateKeywordSection(this.state.keyword, newKeyletter));
    }
}

export default KeyInput;
