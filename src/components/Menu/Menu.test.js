import { render } from "@testing-library/react";
import Menu from "./Menu";

test("should match snapshot", () => {
  const { container } = render(<Menu />);
  expect(container).toMatchSnapshot();
});
