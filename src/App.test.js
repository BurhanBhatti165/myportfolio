import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

// Polyfill matchMedia for tests
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

describe("App", () => {
  test("renders main application", () => {
    render(<App />);
    // Expect greeting section text (from portfolio.js) to appear
    expect(
      screen.getByText(/Hi all, I'm Burhan/i)
    ).toBeInTheDocument();
  });
});
