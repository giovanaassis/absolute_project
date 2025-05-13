import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { KeyNotesContext } from "../../src/context/KeyNotesContext";
import { SoundWaveProvider } from "../../src/context/SoundWaveContext";
import { defaultKeyNotesContextMock } from "../mocks/KeyNotesContextMock";


export const renderWithProviders = (ui, route = "/", keyNotesOverrides = {}) => {
  const keyNotesValue = {
    ...defaultKeyNotesContextMock,
    ...keyNotesOverrides
  }

  return render(
    <MemoryRouter initialEntries={[route]}>
      <KeyNotesContext.Provider value={keyNotesValue}>
        <SoundWaveProvider>{ui}</SoundWaveProvider>
      </KeyNotesContext.Provider>
    </MemoryRouter>
  );
};
