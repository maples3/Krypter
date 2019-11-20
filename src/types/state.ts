import { AppModes } from "./modes";

export interface IAppState {
    input: string;
    output: string;
    keySection: IKeywordSection;
    mode: AppModes;
}

export interface IKeywordSection {
    keyword: string;
    validKeyword: boolean;
    keyletter: string;
    validKeyletter: boolean;
    keyLetters: Map<string, string>;
}
