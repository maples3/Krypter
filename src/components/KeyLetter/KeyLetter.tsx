import React from 'react';
import './KeyLetter.css'

interface KeyLetterProps {
    ptLetter: string;
};

class KeyLetter extends React.Component<KeyLetterProps> {
    render() {
        return <div className='KeyLetter'>
            <p>{this.props.ptLetter}</p>
            <input></input>
        </div>;
    }
}

export default KeyLetter;
