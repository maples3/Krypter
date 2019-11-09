import { AppState } from "./configureStore";
import { AppActions } from "../types/actions";
import IKeyLetter, { IAppState } from "../types/state";

const defaultState: IAppState = {
    input: "",
    keySection: {
        keyword: "",
        keyletter: "",
        keyLetters: new Array<IKeyLetter>()
    }
}

const myReducer = (state: IAppState = defaultState, action: AppActions): IAppState => {
    switch (action.type) {
        default:
            return state;
    }
}

export default myReducer;
