import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { KeyNotesProvider } from "../../src/context/KeyNotesContext";
import { SoundWaveProvider } from "../../src/context/SoundWaveContext";

export const renderWithProviders = (ui, route = "/") => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <KeyNotesProvider>
        <SoundWaveProvider>{ui}</SoundWaveProvider>
      </KeyNotesProvider>
    </MemoryRouter>
  );
};
