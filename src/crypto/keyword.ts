/*****************************************
 *** NOTE ***
 * All functions in this file assume that the keyword and keyletter has been properly sanitized.
 * "Properly sanitized" means that the keyword contains only letters, and that the keyletter is
 * exactly one character long.
 * 
 * Also, all plaintext alphabets will be returned lowercase, and ciphertext alphabets will be uppercase.
 *****************************************/
import { alphabet, encryptTextFromCtAlphabet } from './common';

export function encryptText(plaintext: string, keyword: string, keyletter: string) {
    return encryptTextFromCtAlphabet(plaintext, generateCiphertextAlphabet(keyword, keyletter), alphabet);
}

export function decryptText(inputCiphertext: string, keyword: string, keyletter: string) {
    let ctAlphabet = generateCiphertextAlphabet(keyword, keyletter);
    return encryptTextFromCtAlphabet(inputCiphertext, alphabet.toUpperCase(), ctAlphabet.toLowerCase());
}

function stripDuplicateLetters(input: string) {
    let output: string = "";
    for (let i=0; i<input.length; i++) {
        if (output.indexOf(input[i]) === -1) {
            output += input[i].toLowerCase();
        }
    }
    return output;
}

function generateCiphertextAlphabet(keyword: string, keyletter: string) {
    let unshiftedCtAlphabet = stripDuplicateLetters(keyword + alphabet).toUpperCase();
    let ctAlphabet = "";
    let startIndex = keyletter.toLowerCase().charCodeAt(0) - 97;

    for (let i=0; i<26; i++) {
        ctAlphabet += unshiftedCtAlphabet[ (i + (26 - startIndex)) % 26 ];
    }

    return ctAlphabet;
}

export function generateLetterMappings(keyword: string, keyletter: string) {
    let letterMap = new Map<string, string>();
    let ctAlphabet = generateCiphertextAlphabet(keyword, keyletter);

    for (let i=0; i<26; i++) {
        letterMap.set(
            alphabet[i],
            ctAlphabet[i]
        )
    }

    return letterMap;
}
