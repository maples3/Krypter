/*
NOTE: All exported functions expect the input to be sanitized.
(meaning, 'keyletter' is a single UPPERCASE letter)
*/

import { alphabet, encryptTextFromCtAlphabet } from './common';

export function encryptText(plaintext: string, keyLetter: string) {
    return encryptTextFromCtAlphabet(plaintext, generateCiphertextAlphabet(keyLetter), alphabet);
}

export function decryptText(inputCiphertext: string, keyLetter: string) {
    let ctAlphabet = generateCiphertextAlphabet(keyLetter);
    return encryptTextFromCtAlphabet(inputCiphertext, alphabet.toUpperCase(), ctAlphabet.toLowerCase());
}

function generateCiphertextAlphabet(keyLetter: string): string {
    let upperAlphabet = alphabet.toUpperCase();
    let keyLetterIndex = upperAlphabet.indexOf(keyLetter);
    let ctAlphabetArray = Array.from(alphabet).map((currVal: string, index: number) => {return alphabet[(index + keyLetterIndex) % 26]});
    return ctAlphabetArray.join('');
}
