
export interface IAppState {
    input: string;
    keySection: IKeySection;
}

export interface IKeySection {
    keyword: string;
    keyletter: string;
    // keyLetters: IKeyLetter[];
    keyLetters: Map<string, string>;
}

export interface IKeyLetter {
    ctLetter: string; // The "static", non-changing letter of each KeyLetter component
    ptLetter: string;
}
