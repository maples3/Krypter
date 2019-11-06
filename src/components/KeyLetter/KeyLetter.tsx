import React from 'react';
import './KeyLetter.css'

interface KeyLetterProps {
    ctLetter: string;
};

class KeyLetter extends React.Component<KeyLetterProps> {
    // constructor(props: KeyLetterProps) {
    //     super(props);
    // }
    render() {
        // return <h1>{this.props.ctLetter}</h1>;
        return <div className='KeyLetter'>
            <p>{this.props.ctLetter}</p>
            <input></input>
        </div>;
    }
}

export default KeyLetter;
