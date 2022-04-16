import { render } from "@testing-library/react";
import About from "./About";

test("should match snapshot", () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});
