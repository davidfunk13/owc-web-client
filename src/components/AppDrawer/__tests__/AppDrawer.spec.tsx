import React from "react";
import { screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import AppDrawer from "../AppDrawer";
import { render } from "../../../utils/customRender";

describe("AppDrawer", () => {
    it("Should find the heading", () => {
        render(<AppDrawer />);

        const navigationText = screen.getByText(/mui/i);

        expect(navigationText).toBeInTheDocument();
    });
});
