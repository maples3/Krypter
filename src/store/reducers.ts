import { AppActions, UPDATE_KEYWORDSECTION, UPDATE_INPUT, UPDATE_KEYLETTER } from "../types/actions";
import { IAppState, IKeySection } from "../types/state";
import { generateLetterMappings, encryptText } from "../crypto";

const defaultState: IAppState = {
    input: "i like trains",
    output: "",
    keySection: {
        keyword: "",
        keyletter: "",
        keyLetters: new Map<string, string>([
            ['a', ''], // index 0
            ['b', ''],
            ['c', ''],
            ['d', ''],
            ['e', ''],
            ['f', ''],
            ['g', ''],
            ['h', ''],
            ['i', ''],
            ['j', ''],
            ['k', ''],
            ['l', ''],
            ['m', ''],
            ['n', ''],
            ['o', ''],
            ['p', ''],
            ['q', ''],
            ['r', ''],
            ['s', ''],
            ['t', ''],
            ['u', ''],
            ['v', ''],
            ['w', ''],
            ['x', ''],
            ['y', ''],
            ['z', ''] // index 25
        ])
    }
};

function myReducer (state: IAppState = defaultState, action: AppActions): IAppState {
    let newState = {...state};

    switch (action.type) {

        case UPDATE_KEYWORDSECTION:
            // check if we have both fields
            // Validation - make sure they didn't type anything dumb (not a letter)
            // TODO: Add valid flags to the store and make the UI red when either of the fields are not valid
            if (isValidKeyword(action.keyword) && isValidKeyletter(action.keyLetter)) {
                let newKeyMappings = generateLetterMappings(action.keyword, action.keyLetter)
                let keySection: IKeySection = {...state.keySection, keyLetters: newKeyMappings};
                newState = { ...newState, keySection };
            }
            break;

        case UPDATE_KEYLETTER:
            console.log("Keyletter updated!");
            break;

        case UPDATE_INPUT:
            break;
    }

    // At the end of every update, recalculate the output
    newState = { ...newState, output: recalculateOutput(newState)};

    console.log(newState.output);

    return newState;
}

function recalculateOutput(state: IAppState) {
    let ctAlphabet = "";
    state.keySection.keyLetters.forEach((ptLetter, ctLetter) => {
        console.log(ptLetter + "/" + ctLetter);
        ctAlphabet += ctLetter;
    });
    console.log(ctAlphabet);
    return encryptText(ctAlphabet, state.input);
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
