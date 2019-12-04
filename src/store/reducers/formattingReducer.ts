const BLOCK_LENGTH = 5;

export function formattingReducer(str: string, preserveFormatting: boolean): string {
    if (! preserveFormatting) {
        let newOutput = stripNonAlpha(str);
        newOutput = newOutput.toUpperCase();
        newOutput = splitIntoBlocks(newOutput, BLOCK_LENGTH);
        return newOutput;
    } else {
        return str;
    }
}

function stripNonAlpha(str: string): string {
    let out = "";

    for(let i=0; i<str.length; i++) {
        if (isAlpha(str[i])) {
            out += str[i];
        }
    }

    return out;
}

function splitIntoBlocks(str: string, blockLength: number): string {
    let out = "";
    for (let i=0; i<str.length; i++) {
        out += str[i];

        if (i>0 && (i+1) % blockLength === 0) {
            out += " ";
        }
    }
    return out;
}

// Thanks StackOverflow
// https://stackoverflow.com/questions/40120915/javascript-function-that-returns-true-if-a-letter
function isAlpha(ch: string): boolean {
    return /^[A-Z]$/i.test(ch);
}
