import { IAppState } from "../../types/state";
import { Ciphers } from "../../types/ciphers";
import { keywordDecrypt, keywordEncrypt } from "./keywordReducer";
import { mascDecrypt, mascEncrypt } from "./mascReducer";
import { caesarDecrypt, caesarEncrypt } from "./caesarReducer";
import { formattingReducer } from "./formattingReducer";

export function generateOutput(state: IAppState): string {

    let formattedInput = formattingReducer(state.input, state.preserveFormatting);

    switch (state.cipher) {
        case Ciphers.KEYWORD:
            return state.decrypt ? keywordDecrypt(state.keywordSection, formattedInput) : keywordEncrypt(state.keywordSection, formattedInput);
        
        case Ciphers.MASC:
            return state.decrypt ? mascDecrypt(state.mascSection, formattedInput) : mascEncrypt(state.mascSection, formattedInput);

        case Ciphers.CAESAR:
            return state.decrypt ? caesarDecrypt(state.caesarSection, formattedInput) : caesarEncrypt(state.caesarSection, formattedInput);
    }
}
