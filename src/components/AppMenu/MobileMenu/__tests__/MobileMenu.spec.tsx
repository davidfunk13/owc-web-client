import { screen } from "@testing-library/react";
import AppDrawer from "../MobileMenu";
import { render } from "../../../../utils/__testUtils__/customRender";

describe("MobileMenu Tests", () => {
    it("Should find the heading", () => {
        render(<AppDrawer />);

        const navigationText = screen.getByText(/overwatch companion/i);

        expect(navigationText).toBeInTheDocument();
    });
});
