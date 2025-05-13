import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../../src/pages/Home";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Tutorial from "../../src/pages/Tutorial";
import userEvent from "@testing-library/user-event";
import KeyNotes from "../../src/pages/KeyNotes";
import Game from "../../src/pages/Game";
import { renderWithProviders } from "../utils/renderWithProviders";

describe("Home Component", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const img = screen.getByRole("img");

    expect(screen.getByText(/absolute/i)).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
  });

  it("should render Tutorial page when link is clicked", async () => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    );

    const link = screen.getByRole("link", { name: /tutorial/i });
    const user = userEvent.setup();

    expect(link).toBeInTheDocument();

    await user.click(link);

    expect(await screen.findByText(/sobre/i)).toBeInTheDocument();
  });

  it("should render KeyNotes page when link is clicked", async () => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/key_notes" element={<KeyNotes />} />
      </Routes>
    );

    const link = screen.getByRole("link", { name: /as notas/i });
    const user = userEvent.setup();

    expect(link).toBeInTheDocument();

    await user.click(link);

    expect(
      await screen.findByText("Clique nas notas para escutar seu som:")
    ).toBeInTheDocument();
  });

  it("should render Game page when link is clicked", async () => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    );

    const link = screen.getByRole("link", { name: /jogar/i });
    const user = userEvent.setup();

    expect(link).toBeInTheDocument();

    await user.click(link);

    expect(await screen.findByText(/tocar/i)).toBeInTheDocument();
  });
});
