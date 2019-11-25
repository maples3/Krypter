import { Ciphers } from "./ciphers";

export const UPDATE_INPUT = "UPDATE_INPUT";
export const UPDATE_CIPHERSECTION = "UPDATE_CIPHERSECTION";
export const UPDATE_KEYWORDSECTION = "UPDATE_KEYWORDSECTION";
export const UPDATE_MASCLETTER = "UPDATE_MASCLETTER";
export const UPDATE_CAESARSECTION = "UPDATE_CAESARSECTION";

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

export interface UpdateMascLetterAction {
    type: typeof UPDATE_MASCLETTER;
    changedIndex: number;
    newValue: string;
}

export interface UpdateCaesarAction {
    type: typeof UPDATE_CAESARSECTION;
    shift: number;
}

// Aggregate type for all actions
export type AppActions = UpdateKeywordSectionAction | UpdateInputAction | UpdateCipherSectionAction | UpdateMascLetterAction | UpdateCaesarAction;
