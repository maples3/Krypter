import { Ciphers } from "./ciphers";

export const UPDATE_KEYWORDSECTION = "UPDATE_KEYWORDSECTION"
export const UPDATE_INPUT = "UPDATE_INPUT";
export const UPDATE_CIPHERSECTION = "UPDATE_CIPHERSECTION";

export interface UpdateKeywordSectionAction {
    type: typeof UPDATE_KEYWORDSECTION;
    keyword: string;
    keyLetter: string;
}

export interface UpdateInputAction {
    type: typeof UPDATE_INPUT;
    inputText: string;
}

export interface UpdateCipherSectionAction {
    type: typeof UPDATE_CIPHERSECTION;
    cipher: Ciphers;
    decrypt: boolean;
    preserveFormatting: boolean;
}

// Aggregate type for all actions
export type AppActions = UpdateKeywordSectionAction | UpdateInputAction | UpdateCipherSectionAction;
