import React from "react";
import './InputBox.css'
import { myDispatcher, updateInput } from "../../store/actionGenerators";

interface InputBoxProps {
}

interface InputBoxState {
    input: string
}

class InputBox extends React.Component<InputBoxProps, InputBoxState> {
    constructor(props: InputBoxProps) {
        super(props);
        this.state = { input: "" };
    }

    render() {
        return <div className='InputBox'>
            <textarea onChange={evt => this.updateInputValue(evt)} value={this.state.input}></textarea>
        </div>;
    }

    updateInputValue(evt: React.ChangeEvent<HTMLTextAreaElement>) {
        let newInput = evt.target.value;
        this.setState({ input: newInput });
        myDispatcher(updateInput(newInput));
    }
}

export default InputBox;
