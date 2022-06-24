import { screen } from "@testing-library/react";
import AppDrawer from "../MobileDrawer";
import { render } from "../../../utils/customRender";

describe("AppDrawer", () => {
    it("Should find the heading", () => {
        render(<AppDrawer />);

        const navigationText = screen.getByText(/mui/i);

        expect(navigationText).toBeInTheDocument();
    });
});
