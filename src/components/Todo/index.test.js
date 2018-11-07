import React from "react";
import { fireEvent, cleanup, render } from "react-testing-library";
import Todo from "./index";

afterEach(cleanup);

describe("tests using react-testing-lib", () => {
  test("testing todo component", () => {
    const { container, getByTestId, getByPlaceholderText, getByText } = render(
      <Todo name="Testing" />
    );
    const inputBox = getByTestId("inputBox");
    inputBox.value = "testing";
    fireEvent.click(getByText("Add Item"));
  });
});
