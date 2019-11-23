import { AppActions, UPDATE_KEYWORDSECTION, UPDATE_INPUT, UPDATE_CIPHERSECTION } from "../types/actions";
import { store } from "./configureStore";
import { Ciphers } from "../types/ciphers";

export function updateKeywordSection(keyword: string, keyLetter: string): AppActions {
    return {
        type: UPDATE_KEYWORDSECTION,
        keyword: keyword,
        keyLetter: keyLetter
    }
}

export function updateInput(input: string): AppActions {
    return {
        type: UPDATE_INPUT,
        inputText: input
    }
}

export function updateCipherSelector(cipher: Ciphers, decrypt: boolean, preserveFormatting: boolean): AppActions {
    return {
        type: UPDATE_CIPHERSECTION,
        cipher,
        decrypt,
        preserveFormatting
    }
}

// Is this hacky?  It seems so simple, but nothing online even came close to suggesting it...
export function myDispatcher(action: AppActions) {
    store.dispatch(action);
}
