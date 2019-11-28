import { generateCiphertextAlphabet, encryptText, decryptText } from "./caesar";

test("Ciphertext alphabet generated as expected", () => {
    let generatedAlphabet = generateCiphertextAlphabet(8);
    expect(generatedAlphabet).toBe("IJKLMNOPQRSTUVWXYZABCDEFGH");
});

test("Caesar encryption from notes", () => {
    let plaintext = "thebo okgad sbyby ernes tvinc entwr ightd oesno tcont ainth elett ere";
    let ciphertext = encryptText(plaintext, 5);
    expect(ciphertext).toBe("YMJGT TPLFI XGDGD JWSJX YANSH JSYBW NLMYI TJXST YHTSY FNSYM JQJYY JWJ".toLowerCase());
});

test("Caesar decryption from notes", () => {
    expect(
        decryptText("YMJGT TPLFI XGDGD JWSJX YANSH JSYBW NLMYI TJXST YHTSY FNSYM JQJYY JWJ", 5)
    ).toBe(
        "thebo okgad sbyby ernes tvinc entwr ightd oesno tcont ainth elett ere".toUpperCase()
    );
});
