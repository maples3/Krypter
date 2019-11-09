
export const UPDATE_KEYLETTER = "UPDATE_KEYLETTER";
export const UPDATE_KEYWORDSECTION = "UPDATE_KEYWORDSECTION"
export const UPDATE_INPUT = "UPDATE_INPUT";
// export const UPDATE_MODE = "UPDATE_MODE"; // Todo: support both encryption/decryption

export interface UpdateKeyLetter {
    type: typeof UPDATE_KEYLETTER;
    ctLetter: string;
    newPtLetter: string;
}

export interface UpdateKeywordSection {
    type: typeof UPDATE_KEYWORDSECTION;
    keyword: string;
    keyLetter: string;
}

export interface UpdateInput {
    type: typeof UPDATE_INPUT;
    inputText: string;
}

// Aggregate type for all actions
export type AppActions = UpdateKeyLetter | UpdateKeywordSection| UpdateInput;
