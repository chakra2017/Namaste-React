import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbutton = screen.getByRole("button", { name: "Login" });
  expect(loginbutton).toBeInTheDocument();
});

test("Should change login button to logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbutton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginbutton);

  const logoutbutton = screen.getByRole("button", { name: "Logout" });

  expect(logoutbutton).toBeInTheDocument();
});
