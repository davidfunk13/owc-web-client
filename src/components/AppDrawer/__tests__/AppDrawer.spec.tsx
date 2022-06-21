import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import AppDrawer from "../AppDrawer";

describe("AppDrawer", () => {
    render(
        <Provider store={store}>
            <AppDrawer />
        </Provider>
    );

    const navigationText = screen.getByText(/navigation/i);

    expect(navigationText).toBeInTheDocument();
});
