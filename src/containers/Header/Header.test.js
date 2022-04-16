import { render } from "@testing-library/react";
import Header from "./Header";

test("should match snapshot", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
