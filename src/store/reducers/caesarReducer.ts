import { ICaesarSection } from "../../types/state";
import { UpdateCaesarAction } from "../../types/actions";
import { encryptText, decryptText } from "../../crypto/caesar";

export function caesarSectionReducer(cs: ICaesarSection, action: UpdateCaesarAction): ICaesarSection {
    cs.shift = (action.shift + 26) % 26; // Don't allow negative numbers
    return cs;
}

export function caesarEncrypt(cs: ICaesarSection, input: string): string {
    return encryptText(input, cs.shift);
}

export function caesarDecrypt(cs: ICaesarSection, input: string): string {
    return decryptText(input, cs.shift);
}
