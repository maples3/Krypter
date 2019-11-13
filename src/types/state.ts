
export interface IAppState {
    input: string;
    output: string;
    keySection: IKeySection;
}

export interface IKeySection {
    keyword: string;
    validKeyword: boolean;
    keyletter: string;
    validKeyletter: boolean;
    keyLetters: Map<string, string>;
}

export interface IKeyLetter {
    ctLetter: string; // The "static", non-changing letter of each KeyLetter component
    ptLetter: string;
}
