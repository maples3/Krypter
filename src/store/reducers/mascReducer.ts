import { IMascSection } from "../../types/state";
import { UpdateMascLetterAction } from "../../types/actions";

export function mascSectionReducer(ms: IMascSection, action: UpdateMascLetterAction): IMascSection {
    let newLetter = action.newValue.toUpperCase();
    
    if (newLetter.length < 2 && ! ms.letters.includes(newLetter)) {
        ms.letters = Array.from(ms.letters);
        ms.letters[action.changedIndex] = newLetter;
    }
    
    return ms;
}


