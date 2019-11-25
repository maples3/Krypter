import { IAppState } from "../../types/state";
import { Ciphers } from "../../types/ciphers";
import { keywordDecrypt, keywordEncrypt } from "./keywordReducer";
import { mascDecrypt, mascEncrypt } from "./mascReducer";
import { caesarDecrypt, caesarEncrypt } from "./caesarReducer";

export function generateOutput(state: IAppState): string {
    switch (state.cipher) {
        case Ciphers.KEYWORD:
            return state.decrypt ? keywordDecrypt(state.keywordSection, state.input) : keywordEncrypt(state.keywordSection, state.input);
        
        case Ciphers.MASC:
            return state.decrypt ? mascDecrypt(state.mascSection, state.input) : mascEncrypt(state.mascSection, state.input);

        case Ciphers.CAESAR:
            return state.decrypt ? caesarDecrypt(state.caesarSection, state.input) : caesarEncrypt(state.caesarSection, state.input);
    }
}
