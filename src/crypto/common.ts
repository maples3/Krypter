export const alphabet = "abcdefghijklmnopqrstuvwxyz";

// This function assumes that {ctAlphabet} is UPPERCASE, and {alphabet} is lowercase
// You can use this function to decrypt by putting the plaintext alphabet in {ctAlphabet} and vice versa
// (just make sure you convert them to the proper case first!)
export function encryptTextFromCtAlphabet(plaintext: string, ctAlphabet: string, alphabet: string) {
    // Remember: {ctAlphabet} is UPPERCASE, {alphabet} is lowercase
    let ciphertext = "";
    
    for (let i=0; i < plaintext.length; i++) {
        // If the plaintext is lowercase
        if ( alphabet.indexOf(plaintext[i]) !== -1 ) {
            // console.log('lowercase')
            let charIndex = alphabet.indexOf(plaintext[i]); // grab the index in the alphabet
            let newChar = ctAlphabet[charIndex]; // grab the corresponding ciphertext letter
            ciphertext += newChar.toLowerCase(); // Append lowercase letter to ciphertext
        }
        // If the plaintext is uppercase
        else if ( alphabet.indexOf(plaintext[i].toLowerCase()) !== -1 ) {
            // Same steps as above, but swapping the case
            let charIndex = alphabet.indexOf(plaintext[i].toLowerCase());
            let newChar = ctAlphabet[charIndex];
            ciphertext += newChar;
        }
        // If it's not a letter, then just copy it to the ciphertext
        else {
            ciphertext += plaintext[i];
        }
    }

    return ciphertext;
}
