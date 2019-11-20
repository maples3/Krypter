import { AppActions, UPDATE_KEYWORDSECTION, UpdateKeywordSection, UPDATE_INPUT } from "../types/actions";
import { IAppState, IKeywordSection } from "../types/state";
import { generateLetterMappings, encryptText } from "../crypto";
import { AppModes } from "../types/modes";

const defaultState: IAppState = {
    input: "i like trains",
    output: "",
    mode: AppModes.KEYWORD,
    keySection: {
        keyword: "",
        keyletter: "",
        validKeyword: false,
        validKeyletter: false,  
        keyLetters: new Map<string, string>()
    }
};

function myReducer (state: IAppState = defaultState, action: AppActions): IAppState {
    let newState = { ...state };

    switch (action.type) {

        case UPDATE_KEYWORDSECTION:
            // TODO: Make the UI red when either of the fields are not valid
            newState = { ...newState, keySection: validateKeySection(newState.keySection, action) }

            if (newState.keySection.validKeyletter && newState.keySection.validKeyword) {
                let newKeyMappings = generateLetterMappings(action.keyword, action.keyLetter)
                let keySection: IKeywordSection = { ...newState.keySection,
                    keyLetters: newKeyMappings,
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
    newState = recalculateOutput(newState);

    return newState;
}

function validateKeySection(ks: IKeywordSection, action: UpdateKeywordSection): IKeywordSection {
    // console.log(
    //     "validateKeySection:\n" +
    //     "isValidKeyword(" + action.keyword + "): " + isValidKeyword(action.keyword) + "\n" +
    //     "isValidKeyletter(" + action.keyLetter + "): " + isValidKeyletter(action.keyLetter)
    // );
    return { ...ks,
        validKeyword: isValidKeyword(action.keyword),
        validKeyletter: isValidKeyletter(action.keyLetter)
    }
}

function recalculateOutput(state: IAppState): IAppState {
    if (state.keySection.validKeyletter && state.keySection.validKeyword)
    {
        let output = encryptText(state.input, state.keySection.keyword, state.keySection.keyletter);
        // console.log(output);
        return { ...state,
            output // shortcut syntax, yay!
        }
    } else {
        // console.log("KeySection not valid");
        return state;
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
