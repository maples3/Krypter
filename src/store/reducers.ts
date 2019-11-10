import { AppActions, UPDATE_KEYWORDSECTION } from "../types/actions";
import { IAppState } from "../types/state";

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
                console.log(stripDuplicateLetters(action.keyword) + "  " + action.keyLetter);
            } else {
                return state;
            }
            break;
    }

    return state;
}

function stripDuplicateLetters(input: string) {
    let output: string = "";
    for (var i=0; i<input.length; i++) {
        if (output.indexOf(input[i]) === -1) {
            output += input[i];
        }
    }
    return output;
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
