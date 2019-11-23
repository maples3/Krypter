import { AppActions, UPDATE_KEYWORDSECTION, UpdateKeywordSection, UPDATE_INPUT } from "../types/actions";
import { IAppState, IKeywordSection } from "../types/state";
import { encryptText } from "../crypto/keyword";
import { Ciphers } from "../types/ciphers";

const defaultState: IAppState = {
    input: "Enter your text here...",
    output: "",
    cipher: Ciphers.KEYWORD,
    keySection: {
        keyword: "",
        keyletter: "",
        validKeyword: false,
        validKeyletter: false
    }
};

function myReducer (state: IAppState = defaultState, action: AppActions): IAppState {
    let newState = { ...state };

    switch (action.type) {

        case UPDATE_KEYWORDSECTION:
            // TODO: Make the UI red when either of the fields are not valid
            newState = { ...newState, keySection: validateKeySection(newState.keySection, action) }

            if (newState.keySection.validKeyletter && newState.keySection.validKeyword) {
                let keySection: IKeywordSection = { ...newState.keySection,
                    keyword: action.keyword,
                    keyletter: action.keyLetter
                };
                newState = { ...newState, keySection };
            }
            break;
        
        case UPDATE_INPUT:
            newState = { ...newState, input: action.inputText }
    }

    // console.log("-----------------------")
    // At the end of every update, recalculate the output
    newState = { ...newState,
        output: recalculateOutput(newState)
    };

    return newState;
}

function validateKeySection(ks: IKeywordSection, action: UpdateKeywordSection): IKeywordSection {
    let newKS = { ...ks,
        validKeyword: isValidKeyword(action.keyword),
        validKeyletter: isValidKeyletter(action.keyLetter)
    };

    if (newKS.validKeyword) {
        newKS.keyword = action.keyword;
    }
    if (newKS.validKeyletter) {
        newKS.keyletter = action.keyLetter;
    }

    return newKS;
}

function recalculateOutput(state: IAppState): string {
    if (state.keySection.validKeyletter && state.keySection.validKeyword)
    {
        let output = encryptText(state.input, state.keySection.keyword, state.keySection.keyletter);
        return output;
    } else {
        return "";
    }
}

function isValidKeyword(input: string) {
    if (input.length === 0) {
        return false;
    }
    for (var i = 0; i < input.length; i++) {
        let num = input.toLowerCase().charCodeAt(i) - 97;
        if (num < 0 || num > 25) {
            return false;
        }
    }
    return true;
}

function isValidKeyletter(input: string) {
    return (input.length === 1) && isValidKeyword(input);
}

export default myReducer;
