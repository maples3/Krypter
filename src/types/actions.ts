
export const UPDATE_KEYWORDSECTION = "UPDATE_KEYWORDSECTION"
export const UPDATE_INPUT = "UPDATE_INPUT";
// export const UPDATE_MODE = "UPDATE_MODE"; // Todo: support both encryption/decryption

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
export type AppActions = UpdateKeywordSection | UpdateInput;
