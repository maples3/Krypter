import { alphabet } from "./common";

const PAD_CHARACTER = "*"; // for when a letter hasn't been typed yet

export function encryptText(plaintext: string, ctLetters: string[]): string {
    return convertAlphabets(alphabetUppercaseArray(), ctLetters, plaintext);
}

export function decryptText(ciphertext: string, ctLetters: string[]): string {
    return convertAlphabets(ctLetters, alphabetUppercaseArray(), ciphertext);
}

function alphabetUppercaseArray(): string[] {
    return Array.from(alphabet.toUpperCase());
}

// This function assumes that both alphabets are given as UPPERCASE
// Either srcAlphabet or destAlphabet could have missing elements, depending on if we're encrypting or decrypting
// So we need to account for empty slots in either!
function convertAlphabets(srcAlphabet: string[], destAlphabet: string[], input: string): string {
    let out = "";
    
    for (let i = 0; i < input.length; i++) {
        // if the input is uppercase
        if (srcAlphabet.indexOf(input[i]) !== -1) {
            let charIndex = srcAlphabet.indexOf(input[i]);
            // Check that the destination char exists, otherwise pad
            if (destAlphabet[charIndex] === "") {
                out += PAD_CHARACTER;
            } else {
                out += destAlphabet[charIndex];
            }
        }
        // if the input is lowercase
        else if (srcAlphabet.indexOf(input[i].toUpperCase()) !== -1) {
            // Same as above, but lowercase
            let charIndex = srcAlphabet.indexOf(input[i].toUpperCase());
            if (destAlphabet[charIndex] === "") {
                out += PAD_CHARACTER;
            } else {
                out += destAlphabet[charIndex].toLowerCase();
            }
        }
        // if the character is alpha but not in srcAlphabet (upper or lower case)
        else if (alphabet.indexOf(input[i]) !== -1 || alphabet.toUpperCase().indexOf(input[i]) !== -1 ) {
            out += PAD_CHARACTER;
        }
        // if it's not a letter at all, then just copy from the input
        else {
            out += input[i];
        }
    }

    return out;
}
