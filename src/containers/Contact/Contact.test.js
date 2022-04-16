import { render } from "@testing-library/react";
import Contact from "./Contact";

test("should match snapshot", () => {
  const { container } = render(<Contact />);
  expect(container).toMatchSnapshot();
});
