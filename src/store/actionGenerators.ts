import { AppActions, UPDATE_KEYWORDSECTION, UPDATE_INPUT, UPDATE_CIPHERSECTION, UPDATE_MASCLETTER, UpdateMascLetterAction, UpdateCipherSectionAction, UpdateInputAction, UpdateKeywordSectionAction, UpdateCaesarAction, UPDATE_CAESARSECTION } from "../types/actions";
import { store } from "./configureStore";
import { Ciphers } from "../types/ciphers";

export function updateKeywordSection(keyword: string, keyLetter: string): UpdateKeywordSectionAction {
    return {
        type: UPDATE_KEYWORDSECTION,
        keyword: keyword,
        keyLetter: keyLetter
    };
}

export function updateInput(input: string): UpdateInputAction {
    return {
        type: UPDATE_INPUT,
        inputText: input
    };
}

export function updateCipherSelector(cipher: Ciphers, decrypt: boolean, preserveFormatting: boolean): UpdateCipherSectionAction {
    return {
        type: UPDATE_CIPHERSECTION,
        cipher,
        decrypt,
        preserveFormatting
    };
}

export function updateMascLetter(changedIndex: number, newValue: string): UpdateMascLetterAction {
    return {
        type: UPDATE_MASCLETTER,
        changedIndex,
        newValue
    };
}

export function updateCaesarLetter(newLetter: string): UpdateCaesarAction {
    return {
        type: UPDATE_CAESARSECTION,
        keyLetter: newLetter
    }
}

// Is this hacky?  It seems so simple, but nothing online even came close to suggesting it...
export function myDispatcher(action: AppActions) {
    store.dispatch(action);
}
