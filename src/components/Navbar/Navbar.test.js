import { render } from "@testing-library/react";
import Navbar from "./Navbar";

test("should match snapshot", () => {
  const { container } = render(<Navbar />);
  expect(container).toMatchSnapshot();
});
