import { render, screen } from "@testing-library/react";

import About from "./About";

test("renders About as a text", () => {
  render(<About />);

  const AboutElement = screen.getByText("About");
  expect(AboutElement).toBeInTheDocument();
});
