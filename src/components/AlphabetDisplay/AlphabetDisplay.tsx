import React from "react";
import { alphabet } from "../../crypto/common";
import './AlphabetDisplay.scss';

// ctAlphabet is expected to be exactly 26 characters long and uppercase
interface AlphabetDisplayProps {
    ctAlphabet: string;
}

class AlphabetDisplay extends React.Component<AlphabetDisplayProps> {
    render() {
        return <div className="AlphabetDisplay">
            <div className="AlphabetDisplayHeader">
                <p>Plaintext</p>
                <p>Ciphertext</p>
            </div>
            {this.generateAlphabets()}
        </div>;
    }

    generateAlphabets() : JSX.Element[] {
        let letters: JSX.Element[] = [];

        for (let i=0; i<alphabet.length; i++) {
            letters.push(
                <div className="AlphabetDisplayLetter">
                    <p>{alphabet[i]}</p>
                    <p>{this.props.ctAlphabet[i]}</p>
                </div>
            );
        }

        return letters;
    }
}

export default AlphabetDisplay;
