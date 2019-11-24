import { AppActions, UPDATE_KEYWORDSECTION, UPDATE_INPUT, UPDATE_CIPHERSECTION, UPDATE_MASCLETTER } from "../../types/actions";
import { IAppState, defaultState } from "../../types/state";
import { keywordSectionReducer} from "./keywordReducer";
import { formattingReducer } from "./formattingReducer";
import { mascSectionReducer } from "./mascReducer";
import { generateOutput } from "./cryptoReducer";

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
    let newOutput = generateOutput(state);
    newOutput = formattingReducer(newOutput, state.preserveFormatting);
    state = { ...state,
        output: newOutput
    }

    return state;
}

export default mainReducer;
