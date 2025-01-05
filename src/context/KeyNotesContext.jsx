/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import soundKeys from "../data/soundKeys";

export const KeyNotesContext = createContext();

export const KeyNotesProvider = ({ children }) => {

    const [ currentKey, setCurrentKey ] = useState();
    const [ randomKey, setRandomKey ] = useState();
    const [ gameState, setGameState ] = useState('Normal');
    // the game states = normal, playing, win, lose
    const [ count, setCount ] = useState(0) // contagem de vezes que o usuário pode repetir a nota

    
    const handleCount = () => {
        setCount(prev => prev + 1);
    }

    const playRandomNote = () => {
        if (gameState === 'Normal'){
            // gerando uma nota aleatória
            const key = soundKeys[Math.floor(Math.random() * soundKeys.length)];
            setRandomKey(key.keyName);
            // armazenando a nota
            setCurrentKey(key.audio)

            handleCount();
            setGameState('Playing')
            return;
        }

        if (gameState === 'Playing' && count < 3) {
            new Audio(currentKey).play();
            handleCount();
        }
    }

    const playKey = (key) => {
        const keys = soundKeys.filter(keys => keys.keyName === key );
        setCurrentKey(keys.map( key => key.audio ))
    }

    const checkAnswer = (answer) => {
        if(randomKey) {
            if(randomKey === answer) {
                setGameState('Win')
            } else {
                setGameState('Lose')
            }
        } else { // se o usuário não tiver apertado o botão
            alert('Aperte o botão TOCAR primeiro.')
        }
    }

    const resetGame = () => {
        setGameState('Normal');
        setCount(0);
        playRandomNote();
    }

    useEffect(() => {
        new Audio(currentKey).play();
    }, [currentKey])


    return (
        <KeyNotesContext.Provider value={ { 
            playRandomNote, 
            playKey, 
            checkAnswer, 
            gameState, 
            resetGame,
            count 
            } }>
            { children }
        </KeyNotesContext.Provider>
    )
}