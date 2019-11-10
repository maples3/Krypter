import React from 'react';
import './KeyLetter.css'

interface KeyLetterProps {
    ptLetter: string;
    ctLetter: string;
};

class KeyLetter extends React.Component<KeyLetterProps> {
    render() {
        return <div className='KeyLetter'>
            <p>{this.props.ptLetter}</p>
            <input defaultValue={this.props.ctLetter}></input>
        </div>;
    }
}

export default KeyLetter;
