import { IKeywordSection } from "../../types/state";
import { UpdateKeywordSectionAction } from "../../types/actions";
import { encryptText, decryptText } from "../../crypto/keyword";

export function keywordSectionReducer(ks: IKeywordSection, action: UpdateKeywordSectionAction): IKeywordSection {
    // If they are valid OR empty, allow them into the state
    if (isValidKeyword(action.keyword) || action.keyword.length === 0) {
        ks = { ...ks,
            keyword: action.keyword
        };
    }
    if (isValidKeyletter(action.keyLetter) || action.keyLetter.length === 0) {
        ks = { ...ks,
            keyletter: action.keyLetter
        };
    }
    
    // Validate!
    ks = { ...ks,
        validKeyword: isValidKeyword(ks.keyword),
        validKeyletter: isValidKeyletter(ks.keyletter)
    }
    
    return ks;
}

export function keywordEncrypt(ks: IKeywordSection, input: string): string {
    return keySectionValid(ks) ? encryptText(input, ks.keyword, ks.keyletter) : "";
}

export function keywordDecrypt(ks: IKeywordSection, input: string): string {
    return keySectionValid(ks) ? decryptText(input, ks.keyword, ks.keyletter) : "";
}

function keySectionValid(ks: IKeywordSection): boolean {
    return isValidKeyword(ks.keyword) && isValidKeyletter(ks.keyletter);
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
