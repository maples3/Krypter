import { generateCiphertextAlphabet } from "./keyword";

test("Generated ciphertext alphabet from notes: 'Northern Kentucky University'", () => {
    expect(generateCiphertextAlphabet("NorthernKentuckyUniversity", "j")) // Reducers do NOT allow spaces in keyword
    .toBe("GJLMPQWXZNORTHEKUCYIVSABDF");
});

test("Generated ciphertext alphabet from notes: 'bad'", () => {
    expect(generateCiphertextAlphabet("bad", "a"))
    .toBe("BADCEFGHIJKLMNOPQRSTUVWXYZ");
});

test("Generated ciphertext alphabet from notes: 'computer science'", () => {
    expect(generateCiphertextAlphabet("computerscience", "g"))
    .toBe("QVWXYZCOMPUTERSINABDFGHJKL");
});

test("Generated ciphertext alphabet from slides: 'mathematics and statistics", () => {
    expect(generateCiphertextAlphabet("mathematicsandstatistics", 'h'))
    .toBe("RUVWXYZMATHEICSNDBFGJKLOPQ");
});

