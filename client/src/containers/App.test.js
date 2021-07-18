import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Check for input", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Search Cities");
  expect(inputElement).toBeInTheDocument();
});
