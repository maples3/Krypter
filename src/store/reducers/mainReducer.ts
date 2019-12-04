import { AppActions, UPDATE_KEYWORDSECTION, UPDATE_INPUT, UPDATE_CIPHERSECTION, UPDATE_MASCLETTER, UPDATE_CAESARSECTION } from "../../types/actions";
import { IAppState, defaultState } from "../../types/state";
import { keywordSectionReducer} from "./keywordReducer";
import { mascSectionReducer } from "./mascReducer";
import { generateOutput } from "./cryptoReducer";
import { caesarSectionReducer } from "./caesarReducer";

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

        case UPDATE_CAESARSECTION:
            state = { ...state,
                caesarSection: caesarSectionReducer(state.caesarSection, action)
            }
            break;
        
        case UPDATE_INPUT:
            state = { ...state, input: action.inputText }
    }

    
    // At the end of every update, recalculate the output based on the cipher and en/de-crypt selections
    state = { ...state,
        output: generateOutput(state)
    }

    return state;
}

export default mainReducer;
