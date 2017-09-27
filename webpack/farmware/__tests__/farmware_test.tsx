jest.mock("react-redux", () => ({
  connect: jest.fn()
}));

import * as React from "react";
import { mount } from "enzyme";
import { FarmwarePage } from "../index";
import { FarmwareProps } from "../../devices/interfaces";

describe("<FarmwarePage />", () => {
  it("renders widgets", () => {
    const props: FarmwareProps = {
      farmwares: {},
      syncStatus: "unknown",
      env: {},
      dispatch: jest.fn(),
      currentImage: undefined,
      images: []
    };
    const wrapper = mount(<FarmwarePage {...props} />);
    expect(wrapper.text()).toContain("Take Photo");
    expect(wrapper.text()).toContain("Farmware");
    expect(wrapper.text()).toContain("Camera Calibration");
    expect(wrapper.text()).toContain("Weed Detector");
  });
});