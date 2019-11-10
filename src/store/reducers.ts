import { AppActions } from "../types/actions";
import { IAppState } from "../types/state";

const defaultState: IAppState = {
    input: "",
    keySection: {
        keyword: "",
        keyletter: "",
        keyLetters: new Map<string, string>([
            ['a', ''],
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
            ['z', '']
        ])
    }
}

const myReducer = (state: IAppState = defaultState, action: AppActions): IAppState => {

    switch (action.type) {
        default:
            return state;
    }
}

export default myReducer;
