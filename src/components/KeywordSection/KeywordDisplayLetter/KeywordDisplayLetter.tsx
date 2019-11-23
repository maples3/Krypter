import React from 'react';
import './KeywordDisplayLetter.css'

interface KeyLetterProps {
    ptLetter: string;
    ctLetter: string;
};

class KeyLetter extends React.Component<KeyLetterProps> {
    render() {
        return <div className='KeywordDisplayLetter'>
            <p>{this.props.ptLetter}</p>
            <p>{this.props.ctLetter}</p>
        </div>;
    }
}

export default KeyLetter;
