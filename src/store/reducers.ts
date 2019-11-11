import { AppActions, UPDATE_KEYWORDSECTION } from "../types/actions";
import { IAppState, IKeySection } from "../types/state";
import { generateLetterMappings } from "../crypto";

const defaultState: IAppState = {
    input: "",
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
}

function myReducer (state: IAppState = defaultState, action: AppActions): IAppState {
    // console.log(action);

    switch (action.type) {

        case UPDATE_KEYWORDSECTION:
            // check if we have both fields
            // Validation - make sure they didn't type anything dumb (not a letter)
            // TODO: Add valid flags to the store and make the UI red when either of the fields are not valid
            if (isValidKeyword(action.keyword) && isValidKeyletter(action.keyLetter)) {
                let keySection: IKeySection = {...state.keySection, keyLetters: generateLetterMappings(action.keyword, action.keyLetter)};
                return { ...state, keySection }
            } else {
                return state;
            }
    }
    return state;
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
