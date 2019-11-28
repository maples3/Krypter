import { encryptText, decryptText } from './masc';

test("Encryption using example from notes", () => {
    let ctAlphabet = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
    let result = encryptText("simple substitution cipher", Array.from(ctAlphabet));
    expect(result).toBe("SVOHTL SAKSPVPAPVYW MVHQLU".toLowerCase());
});

test("Decryption using example from notes", () => {
    let ctAlphabet = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
    let result = decryptText("SVOHTL SAKSPVPAPVYW MVHQLU".toLowerCase(), Array.from(ctAlphabet));
    expect(result).toBe("simple substitution cipher");
});
