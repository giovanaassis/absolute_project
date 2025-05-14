import { screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Game from "../../src/pages/Game";
import { renderWithProviders } from "../utils/renderWithProviders";
import { Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Game Page", () => {
  it("should render correctly", () => {
    renderWithProviders(
      <Routes>
        <Route path="/game" element={<Game />} />
      </Routes>,
      "/game"
    );

    expect(screen.getByText(/tocar/i)).toBeInTheDocument();
    expect(screen.getByTestId("soundWave")).toBeInTheDocument();
    expect(screen.getByTestId("keys")).toBeInTheDocument();
  });

  it("should call playRandomNote and activeWave when button is clicked", async () => {
    const user = userEvent.setup();
    const playRandomNote = vi.fn();
    const activeWave = vi.fn();

    renderWithProviders(
      <Routes>
        <Route path="/game" element={<Game />} />
      </Routes>,
      "/game",
      { playRandomNote},
      { activeWave }
    );

    const playButton = screen.getByText(/tocar/i);

    await user.click(playButton);

    expect(playRandomNote).toHaveBeenCalled();
    expect(activeWave).toHaveBeenCalled();
  });

  it("should render a win message", async () => {
    renderWithProviders(
      <Routes>
        <Route path="/game" element={<Game />} />
      </Routes>,
      "/game",
      {
        gameState: "Win",
        count: 2,
      }
    );

    const user = userEvent.setup();
    const key = screen.getByText("DÓ");

    await user.click(key);

    expect(await screen.findByText(/acertou/i)).toBeInTheDocument();
    expect(
      await screen.findByLabelText("arrowCounterIcon")
    ).toBeInTheDocument();
  });

  it("should render a lose message", async () => {
    renderWithProviders(
      <Routes>
        <Route path="/game" element={<Game />} />
      </Routes>,
      "/game",
      {
        gameState: "Lose",
        count: 2,
      }
    );

    const user = userEvent.setup();
    const key = screen.getByText("DÓ");

    await user.click(key);

    expect(await screen.findByText(/errou/i)).toBeInTheDocument();
    expect(
      await screen.findByLabelText("arrowCounterIcon")
    ).toBeInTheDocument();
  });
});
