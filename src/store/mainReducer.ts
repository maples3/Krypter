import { AppActions, UPDATE_KEYWORDSECTION, UPDATE_INPUT, UPDATE_CIPHERSECTION } from "../types/actions";
import { IAppState, defaultState } from "../types/state";
import { encryptText, decryptText } from "../crypto/keyword";
import { keywordSectionReducer } from "./keywordSectionReducer";

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
        
        case UPDATE_INPUT:
            state = { ...state, input: action.inputText }
    }

    // console.log("-----------------------")
    // At the end of every update, recalculate the output
    let output = recalculateOutput(state);
    
    // TODO: formatting preservation

    state = { ...state,
        output
    };

    return state;
}

function recalculateOutput(state: IAppState): string {
    if (state.keywordSection.validKeyletter && state.keywordSection.validKeyword)
    {
        let output: string;
        if (state.decrypt === false) {
            output = encryptText(state.input, state.keywordSection.keyword, state.keywordSection.keyletter);
        } else {
            output = decryptText(state.input, state.keywordSection.keyword, state.keywordSection.keyletter);
        }
        return output;
    } else {
        return "";
    }
}

export default mainReducer;
