import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // it is alias of test

  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //   Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //  Assertion

    expect(button).toBeInTheDocument();
  });

  test("Should load Submit inside Contact Component", () => {
    render(<Contact />);

    const Submit = screen.getByText("Submit");

    // Assertion
    expect(Submit).toBeInTheDocument();
  });

  test("Should load name inside Contact Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name"); // getBy means only one result

    //  Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load inputboxes inside Contact Component", () => {
    render(<Contact />);

    const inputboxes = screen.getAllByRole("textbox");

    // console.log(inputboxes.length);
    // Assertion
    expect(inputboxes.length).toBe(2);
  });
});
