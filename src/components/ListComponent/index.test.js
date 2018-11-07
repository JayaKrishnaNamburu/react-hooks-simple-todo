import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import { shallow } from "enzyme";
import ListComponent from "../ListComponent";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("testing using react-testing-library", () => {
  test("testing the list component", () => {
    const data = {
      status: true,
      id: 1234,
      descriptioon: "This is a list item"
    };
    const done = jest.fn();
    const { container } = render(<ListComponent data={data} done={done} />);
    fireEvent.click(container.firstChild);
    expect(done).toHaveBeenCalledTimes(1);
  });
});

describe("tests using enzyme and shallow", () => {
  test("testing the list component", () => {
    const data = {
      status: true,
      id: 1234,
      descriptioon: "This is a list item"
    };
    const done = jest.fn();
    const wrapper = shallow(<ListComponent data={data} done={done} />);
    wrapper.find("div").simulate("click");
    expect(done).toHaveBeenCalledTimes(1);
  });
});
