import { render } from "@testing-library/react";
import Card from "./Card";

test("should match snapshot for active card", () => {
  const data = { title: "", shortDesc: "", skills: ["", ""], id: 1 };
  const { container } = render(
    <Card data={data} handleClick={null} index={null} projectToShow={1} />
  );
  expect(container).toMatchSnapshot();
});

test("should match snapshot for inactive card", () => {
  const data = { title: "", shortDesc: "", skills: ["", ""], id: 1 };
  const { container } = render(
    <Card data={data} handleClick={null} index={null} projectToShow={2} />
  );
  expect(container).toMatchSnapshot();
});
