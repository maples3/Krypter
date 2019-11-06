import React from 'react';
import KeyLetter from '../KeyLetter/KeyLetter';
import './KeySection.css'
import KeyInput from '../KeyInput/KeyInput';

class KeySection extends React.Component {
    render() {
        var letters: Array<string> = new Array<string>();
        var i: number;

        for (i = 0; i < 26; i++) {
            letters.push((i+10).toString(36).toUpperCase());
        }
        console.log(letters);

        return <div className="KeySection">
            <KeyInput></KeyInput>
            <div className="rowHeader"><p>Ciphertext</p><p>Plaintext</p></div>
            {letters.map((value, index) => {
            return <KeyLetter ctLetter={value}></KeyLetter>
        })}</div>
    }
}

export default KeySection;
