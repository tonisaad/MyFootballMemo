import React from "react";
import { mount } from "enzyme";
import "../../enzymeConfig";
import LoginScreen from "../screens/LoginScreen";

describe("Test login form", function () {
  let wrapper;

  it("Email Test", function () {
    wrapper = mount(<LoginScreen />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { id: "email", value: "cr7@gmail.com" },
    });
    expect(wrapper.state("email")).toEqual("cr7@gmail.com");
  });

  it("Password test", function () {
    wrapper = mount(<LoginScreen />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { id: "password", value: "123456789" },
    });
    expect(wrapper.state("password")).toEqual("123456789");
  });

  it("Check the fields hav right data", () => {
    wrapper = mount(<LoginScreen />);
    wrapper
      .find('input[type="text"]')
      .simulate("change", { target: { id: "email", value: "cr7@gmail.com" } });
    wrapper
      .find('input[type="password"]')
      .simulate("change", { target: { id: "password", value: "123456789" } });
    wrapper.find("Login").simulate("click");
  });
});
