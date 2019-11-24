import React from "react";
import './InputBox.scss'
import { myDispatcher, updateInput } from "../../store/actionGenerators";
import { IAppState } from "../../types/state";
import { connect } from "react-redux";

interface InputBoxProps {
    input: string
}

interface InputBoxState {
    input: string
}

class InputBox extends React.Component<InputBoxProps, InputBoxState> {
    constructor(props: InputBoxProps) {
        super(props);
        this.state = { input: this.props.input };
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

function mapStateToProps(state: IAppState): InputBoxProps {
    return { input: state.input };
}

export default connect(mapStateToProps)(InputBox);
