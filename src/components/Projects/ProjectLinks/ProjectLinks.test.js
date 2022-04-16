import { render } from "@testing-library/react";
import ProjectLinks from "./ProjectLinks";

test("should match snapshot", () => {
  const links = { github: "", deployed: "" };
  const { container } = render(<ProjectLinks links={links} />);
  expect(container).toMatchSnapshot();
});
