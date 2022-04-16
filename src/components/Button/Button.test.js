import { render } from "@testing-library/react";
import Button from "./Button";

test("should match snapshot", () => {
  const { container } = render(<Button onClick={null} text={""} />);
  expect(container).toMatchSnapshot();
});
