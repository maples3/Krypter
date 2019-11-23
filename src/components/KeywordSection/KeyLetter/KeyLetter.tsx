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
            <p>{this.props.ctLetter}</p>
        </div>;
    }
}

export default KeyLetter;
