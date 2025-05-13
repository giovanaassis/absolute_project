import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Tutorial from "../../src/pages/Tutorial";
import { MemoryRouter } from "react-router-dom";

describe("Tutorial Component", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Tutorial />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /sobre/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /como jogar/i })
    ).toBeInTheDocument();
  });

  it("should render the correct links", () => {
    render(
      <MemoryRouter>
        <Tutorial />
      </MemoryRouter>
    );

    const linkedin_link = screen.getByLabelText("Linkedin");
    const github_link = screen.getByLabelText("Github");

    expect(linkedin_link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/giovanadeassis"
    );
    expect(linkedin_link).toHaveAttribute("target", "_blank");

    expect(github_link).toHaveAttribute(
      "href",
      "https://github.com/giovanaassis"
    );
    expect(github_link).toHaveAttribute("target", "_blank");
  });
});
