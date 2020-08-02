import React from "react";
import Header from "../../components/Header";
import ReactShallowRenderer from "react-test-renderer/shallow";
import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

test("should render Header correctly using react test renderer", () => {
  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test("should render Header correctly using react test renderer", () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  //expect(wrapper.find("h1").length).toBe(1);
});
