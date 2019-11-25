/*
NOTE: All exported functions expect the input to be sanitized.
(meaning, 'keyletter' is a single UPPERCASE letter)
*/

import { alphabet, encryptTextFromCtAlphabet } from './common';

export function encryptText(plaintext: string, shift: number) {
    return encryptTextFromCtAlphabet(plaintext, generateCiphertextAlphabet(shift), alphabet);
}

export function decryptText(inputCiphertext: string, shift: number) {
    let ctAlphabet = generateCiphertextAlphabet(shift);
    return encryptTextFromCtAlphabet(inputCiphertext, alphabet.toUpperCase(), ctAlphabet.toLowerCase());
}

export function generateCiphertextAlphabet(shift: number): string {
    let ctAlphabetArray = Array.from(alphabet).map(
        (currVal: string, index: number) => { return alphabet[((26 - shift) + index + 26) % 26]; }
    );
    return ctAlphabetArray.join('').toUpperCase();
}
