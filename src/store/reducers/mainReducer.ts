import { AppActions, UPDATE_KEYWORDSECTION, UPDATE_INPUT, UPDATE_CIPHERSECTION, UPDATE_MASCLETTER } from "../../types/actions";
import { IAppState, defaultState } from "../../types/state";
import { keywordSectionReducer, keywordDecrypt, keywordEncrypt } from "./keywordSectionReducer";
import { Ciphers } from "../../types/ciphers";
import { formattingReducer } from "./formattingReducer";
import { mascSectionReducer } from "./mascSectionReducer";

function mainReducer (state: IAppState = defaultState, action: AppActions): IAppState {

    switch (action.type) {
        case UPDATE_CIPHERSECTION:
            state = { ...state,
                cipher: action.cipher,
                decrypt: action.decrypt,
                preserveFormatting: action.preserveFormatting,
                output: "",
            }
            break;

        case UPDATE_KEYWORDSECTION:
            state = { ...state,
                keywordSection: keywordSectionReducer(state.keywordSection, action)
            }
            break;

        case UPDATE_MASCLETTER:
            state = { ...state,
                mascSection: mascSectionReducer(state.mascSection, action)
            }
            break;
        
        case UPDATE_INPUT:
            state = { ...state, input: action.inputText }
    }

    
    // At the end of every update, recalculate the output based on the cipher and en/de-crypt selections
    let newOutput = "";
    switch (state.cipher) {
        case Ciphers.KEYWORD:
            newOutput = state.decrypt ? keywordDecrypt(state.keywordSection, state.input) : keywordEncrypt(state.keywordSection, state.input);
            break;
    }
    
    newOutput = formattingReducer(newOutput, state.preserveFormatting);

    state = { ...state,
        output: newOutput
    };

    return state;
}

export default mainReducer;
