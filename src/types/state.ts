import { Ciphers } from "./ciphers";

export interface IAppState {
    input: string;
    output: string;
    cipher: Ciphers;
    decrypt: boolean;
    preserveFormatting: boolean;
    keywordSection: IKeywordSection;
    mascSection: IMascSection;
    caesarSection: ICaesarSection;
}

export interface IKeywordSection {
    keyword: string;
    validKeyword: boolean;
    keyletter: string;
    validKeyletter: boolean;
}

export interface ICaesarSection {
    keyLetter: string;
}

export interface IMascSection {
    letters: string[]; // exactly 26 elements, the CT letters in order as they correlate to the standard alphabet
}

export const defaultState: IAppState = {
    input: "Enter your text here...",
    output: "",
    
    cipher: Ciphers.KEYWORD,
    decrypt: false,
    preserveFormatting: true,

    keywordSection: {
        keyword: "",
        keyletter: "",
        validKeyword: false,
        validKeyletter: false
    },

    mascSection: {
        // Bad things happen if the array isn't already populated with empty strings
        // If you set value={undefined} on an input element, it's not considered controlled.
        // I want my KeyLetter <input>s to be controlled, so the array needs to be filled with
        // something other than `undefined`.  An empty string works beautifully.
        // https://reactjs.org/docs/forms.html#controlled-input-null-value
        letters: Array<string>(26).fill("")
    },

    caesarSection: {
        keyLetter: "A"
    }
};
