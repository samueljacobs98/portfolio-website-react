import { render } from "@testing-library/react";
import Hero from "./Hero";

test("should match snapshot", () => {
  const { container } = render(<Hero />);
  expect(container).toMatchSnapshot();
});
