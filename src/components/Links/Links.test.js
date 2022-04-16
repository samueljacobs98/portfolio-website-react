import { render } from "@testing-library/react";
import Links from "./Links";

test("should match snapshot", () => {
  const { container } = render(<Links />);
  expect(container).toMatchSnapshot();
});
