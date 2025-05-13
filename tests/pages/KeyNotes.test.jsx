import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import KeyNotes from "../../src/pages/KeyNotes";
import { renderWithProviders } from "../utils/renderWithProviders";
import { Route, Routes } from "react-router-dom";

describe("KeyNotes Page", () => {
  it("should render correctly", () => {
    renderWithProviders(
      <Routes>
        <Route path="/key_notes" element={<KeyNotes />} />
      </Routes>,
      "/key_notes"
    );

    expect(
      screen.getByText("Clique nas notas para escutar seu som:")
    ).toBeInTheDocument();
    expect(screen.getByTestId("keys")).toBeInTheDocument();
  });
});
