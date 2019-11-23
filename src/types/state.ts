import { Ciphers } from "./ciphers";

export interface IAppState {
    input: string;
    output: string;
    keywordSection: IKeywordSection;
    cipher: Ciphers;
    decrypt: boolean;
    preserveFormatting: boolean;
}

export interface IKeywordSection {
    keyword: string;
    validKeyword: boolean;
    keyletter: string;
    validKeyletter: boolean;
}

export const defaultState: IAppState = {
    input: "Enter your text here...",
    output: "",
    
    cipher: Ciphers.KEYWORD,
    decrypt: false,
    preserveFormatting: false,

    keywordSection: {
        keyword: "",
        keyletter: "",
        validKeyword: false,
        validKeyletter: false,
    }
};
