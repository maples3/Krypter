import { ICaesarSection } from "../../types/state";
import { UpdateCaesarAction } from "../../types/actions";
import { alphabet } from "../../crypto/common";
import { encryptText, decryptText } from "../../crypto/caesar";

export function caesarSectionReducer(cs: ICaesarSection, action: UpdateCaesarAction): ICaesarSection {
    if (action.keyLetter.length === 0) {
        cs.keyLetter = "";
    } else if (action.keyLetter.length === 1) {
        // Keep things simple: convert case to lowercase, then back to uppercase at the end
        if (alphabet.indexOf(action.keyLetter.toLowerCase()) !== -1)
        {
            cs.keyLetter = action.keyLetter.toUpperCase();
        }
    }
    return cs;
}

export function caesarEncrypt(cs: ICaesarSection, input: string): string {
    return (cs.keyLetter === "") ? "" : encryptText(input, cs.keyLetter);
}

export function caesarDecrypt(cs: ICaesarSection, input: string): string {
    return (cs.keyLetter === "") ? "" : decryptText(input, cs.keyLetter);
}
