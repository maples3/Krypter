import React from "react";
import { myDispatcher, updateMascLetter } from "../../../store/actionGenerators";
import './KeyLetter.css'
import { alphabet } from "../../../crypto/common";

interface KeyLetterProps {
    index: number;
    value: string;
};

class KeyLetter extends React.Component<KeyLetterProps> {
    constructor(props: KeyLetterProps) {
        super(props);
        this.state = { value: this.props.value };
    }

    render() {
        return <div className="KeyLetter">
            <label>{alphabet[this.props.index]}</label>
            <br />
            <input type="text" value={this.props.value} onChange={evt => this.handleChange(evt)} />
        </div>;
    }

    handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
        let newValue = evt.target.value.toUpperCase();
        myDispatcher(updateMascLetter(this.props.index, newValue));
    }
}

export default KeyLetter;
