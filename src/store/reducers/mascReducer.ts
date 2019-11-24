import { IMascSection } from "../../types/state";
import { UpdateMascLetterAction } from "../../types/actions";
import { encryptText, decryptText } from "../../crypto/masc";

export function mascSectionReducer(ms: IMascSection, action: UpdateMascLetterAction): IMascSection {
    let newLetter = action.newValue.toUpperCase();
    
    // The new letter must be 0 or 1 characters long.
    // It also must either be empty or not already exist in the array.
    if (newLetter.length < 2 && ( newLetter === "" || !ms.letters.includes(newLetter) )) {
        ms.letters[action.changedIndex] = newLetter;
    }
    
    // The array object itself needs to change, otherwise React doesn't react to the change.
    ms.letters = Array.from(ms.letters);

    return ms;
}

export function mascEncrypt(ms: IMascSection, input: string): string {
    return encryptText(input, ms.letters);
}

export function mascDecrypt(ms: IMascSection, input: string): string {
    return decryptText(input, ms.letters);
}
