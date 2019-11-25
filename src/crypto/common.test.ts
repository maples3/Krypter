import { alphabet, encryptTextFromCtAlphabet } from "./common";

test('Alphabet is correct', () => {
    expect(alphabet).toBe('abcdefghijklmnopqrstuvwxyz');
});

test('Very basic substitution', () => {
    let input = "cab";
    let ptAlphabet = "abcdefg";
    let ctAlphabet = "hijklmn";
    let output = encryptTextFromCtAlphabet(input, ctAlphabet, ptAlphabet);
    expect(output).toBe("jhi");
});
