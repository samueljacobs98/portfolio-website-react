import { render } from "@testing-library/react";
import BackToTop from "./BackToTop";

test("should match snapshot", () => {
  const { container } = render(<BackToTop />);
  expect(container).toMatchSnapshot();
});
