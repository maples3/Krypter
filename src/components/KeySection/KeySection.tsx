import React from 'react';
import { connect } from 'react-redux';
import KeyLetter from '../KeyLetter/KeyLetter';
import './KeySection.css'
import KeyInput from '../KeyInput/KeyInput';
import { IKeySection, IAppState } from '../../types/state';

type KeySectionProps = IKeySection;

interface KeySectionState {
}

class KeySection extends React.Component<KeySectionProps, KeySectionState> {
    render() {
        // console.log(this.props);

        let alphabet: JSX.Element[] = [];
        this.props.keyLetters.forEach( (inputValue: string, ptLetter: string, map: Map<string, string>) => {
            alphabet.push(<KeyLetter key={ptLetter} ptLetter={ptLetter} ctLetter={inputValue} />)
        })

        return <div className="KeySection">
            <KeyInput></KeyInput>
            <div className="rowHeader"><p>Plaintext</p><p>Ciphertext</p></div>
            {alphabet}
            </div>
    }
}

function mapStateToProps (state: IAppState): KeySectionProps {
    return state.keySection;
}

// export default KeySection;
export default connect(mapStateToProps)(KeySection)
