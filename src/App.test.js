import { render } from "@testing-library/react";
import App from "./App";

test("should match snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
