import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import GoBackButton from "../../src/components/GoBackButton";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from "../../src/pages/Home";

describe("GoBackButton Component", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <GoBackButton />
      </MemoryRouter>
    );

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByLabelText("arrowLeftIcon")).toBeInTheDocument();
  });

  it("should go to given page when button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/tutorial"]}>
        <Routes>
          <Route path="/tutorial" element={<GoBackButton page={"/"}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );

    const link = screen.getByLabelText("arrowLeftIcon");

    await user.click(link);

    expect(screen.getByText(/absolute/i));
  });
});
