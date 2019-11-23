import { IKeywordSection } from "../types/state";
import { UpdateKeywordSectionAction } from "../types/actions";

export function keywordSectionReducer(ks: IKeywordSection, action: UpdateKeywordSectionAction): IKeywordSection {
    // Check if the inputs are valid
    ks = { ...ks,
        validKeyword: isValidKeyword(action.keyword),
        validKeyletter: isValidKeyletter(action.keyLetter)
    }

    // If they are, allow them into the state
    if (ks.validKeyword) {
        ks.keyword = action.keyword;
    }
    if (ks.validKeyletter) {
        ks.keyletter = action.keyLetter;
    }

    return ks;
}

function isValidKeyword(input: string) {
    if (input.length === 0) {
        return false;
    }
    for (var i = 0; i < input.length; i++) {
        let num = input.toLowerCase().charCodeAt(i) - 97;
        if (num < 0 || num > 25) {
            return false;
        }
    }
    return true;
}

function isValidKeyletter(input: string) {
    return (input.length === 1) && isValidKeyword(input);
}
