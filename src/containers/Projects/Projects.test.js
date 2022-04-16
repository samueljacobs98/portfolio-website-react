import { render } from "@testing-library/react";
import Projects from "./Projects";

test("should match snapshot", () => {
  const { container } = render(<Projects />);
  expect(container).toMatchSnapshot();
});
