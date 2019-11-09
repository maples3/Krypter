import { AppActions, UPDATE_KEYLETTER, UPDATE_KEYWORDSECTION } from "../types/actions";

export const updateKeyLetter = (ctLetter: string, newPtLetter: string): AppActions => ({
    type: UPDATE_KEYLETTER,
    ctLetter: ctLetter,
    newPtLetter: newPtLetter
    // I know there's a fancy syntax to shorten the above, but I wrote out the long
    // form to help it make sense to me when I'm getting confused :)
});

export const UpdateKeywordSection = (keyword: string, keyLetter: string): AppActions => ({
    type: UPDATE_KEYWORDSECTION,
    keyword: keyword,
    keyLetter: keyLetter
});
