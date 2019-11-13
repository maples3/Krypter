import React from 'react'
import './OutputBox.css'
import { IAppState } from '../../types/state';
import { connect } from 'react-redux';

interface OutputBoxProps {
    output: string;
}

interface OutputBoxState {
}

class OutputBox extends React.Component<OutputBoxProps, OutputBoxState> {
    render() {
        return <div className='OutputBox'>
            <textarea value={this.props.output} readOnly></textarea>
        </div>;
    }
}

function mapStateToProps(state: IAppState): OutputBoxProps {
    return { output: state.output };
}

export default connect(mapStateToProps)(OutputBox);
