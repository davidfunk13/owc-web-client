import { screen } from "@testing-library/react";
import AppDrawer from "../MobileDrawer";
import { render } from "../../../utils/__testUtils__/customRender";

describe("MobileDrawer Tests", () => {
    it("Should find the heading", () => {
        render(<AppDrawer />);

        const navigationText = screen.getByText(/overwatch companion/i);

        expect(navigationText).toBeInTheDocument();
    });
});
