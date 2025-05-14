import { describe, it, expect, vi } from "vitest";
import TheKeys from "../../src/components/TheKeys";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/renderWithProviders";
import userEvent from "@testing-library/user-event";

describe("TheKeys Component", () => {
  it("should render correctly", () => {
    const keys = ["DÓ", "RÉ", "MI", "FA", "SOL", "LA", "SÍ"];

    renderWithProviders(<TheKeys />);

    keys.forEach((key) => {
      expect(screen.getByText(key)).toBeInTheDocument();
    });
  });

  it("should call checkAnswer when gameOn is true", async () => {
    const checkAnswer = vi.fn();
    const user = userEvent.setup();

    renderWithProviders(<TheKeys gameOn={true} />, "", { checkAnswer });

    const key = screen.getByText("DÓ");

    await user.click(key);

    expect(checkAnswer).toHaveBeenCalledWith("DÓ");
  });

  it("should call playKey when gameOn is false", async () => {
    const playKey = vi.fn();
    const user = userEvent.setup();

    renderWithProviders(<TheKeys gameOn={false} />, "", { playKey });

    const key = screen.getByText("DÓ");

    await user.click(key);

    expect(playKey).toHaveBeenCalledWith("DÓ");
  });
});
