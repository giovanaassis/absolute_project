/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { KeyNotesContext } from "./KeyNotesContext";

export const SoundWaveContext = createContext();

export const SoundWaveProvider = ({ children }) => {

    const { count } = useContext(KeyNotesContext);
    const [ waveState, setWaveState ] = useState(false);

    const activeWave = () => {
        if(count < 3) {
            setWaveState(true);
            setTimeout(() => setWaveState(false), 900)
        }
    }

    return (
        <SoundWaveContext.Provider value={{ waveState, activeWave }}>
            { children }
        </SoundWaveContext.Provider>
    )
}