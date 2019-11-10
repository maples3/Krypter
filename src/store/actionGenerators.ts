import { AppActions, UPDATE_KEYLETTER, UPDATE_KEYWORDSECTION } from "../types/actions";
import { store } from "./configureStore";

export const updateKeyLetter = (ctLetter: string, newPtLetter: string): AppActions => ({
    type: UPDATE_KEYLETTER,
    ctLetter: ctLetter,
    newPtLetter: newPtLetter
    // I know there's a fancy syntax to shorten the above, but I wrote out the long
    // form to help it make sense to me when I'm getting confused :)
});

export function updateKeywordSection(keyword: string, keyLetter: string): AppActions {
    // console.log("updateKeywordSection: " + keyword + " - " + keyLetter);
    return {
        type: UPDATE_KEYWORDSECTION,
        keyword: keyword,
        keyLetter: keyLetter
    }
}

// Is this hacky?  It seems so simple, but nothing online even came close to suggesting it...
export function myDispatcher(action: AppActions) {
    store.dispatch(action);
}
