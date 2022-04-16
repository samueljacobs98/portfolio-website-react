import { render } from "@testing-library/react";
import Project from "./Project";

test("should match snapshot", () => {
  const data = {
    skills: ["", "", ""],
    title: "",
    desc: ["", ""],
    img: "",
    links: { github: "", deployed: "" },
  };
  const { container } = render(<Project data={data} />);
  expect(container).toMatchSnapshot();
});
