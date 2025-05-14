import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { KeyNotesContext } from "../../src/context/KeyNotesContext";
import { SoundWaveContext } from "../../src/context/SoundWaveContext";
import { defaultKeyNotesContextMock } from "../mocks/KeyNotesContextMock";
import { defaultSoundWaveContextMock } from "../mocks/SoundWaveContextMock";


export const renderWithProviders = (ui, route = "/", keyNotesOverrides = {}, soundWaveOverrides = {}) => {
  const keyNotesValue = {
    ...defaultKeyNotesContextMock,
    ...keyNotesOverrides
  }

  const soundWaveValue = {
    ...defaultSoundWaveContextMock,
    ...soundWaveOverrides
  }

  return render(
    <MemoryRouter initialEntries={[route]}>
      <KeyNotesContext.Provider value={keyNotesValue}>
        <SoundWaveContext.Provider value={soundWaveValue}>{ui}</SoundWaveContext.Provider>
      </KeyNotesContext.Provider>
    </MemoryRouter>
  );
};
