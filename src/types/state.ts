import { Ciphers } from "./ciphers";

export interface IAppState {
    input: string;
    output: string;
    keySection: IKeywordSection;
    cipher: Ciphers;
}

export interface IKeywordSection {
    keyword: string;
    validKeyword: boolean;
    keyletter: string;
    validKeyletter: boolean;
    keyLetters: Map<string, string>;
}
