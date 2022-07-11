import { screen } from "@testing-library/react";
import navItems from "../../../utils/navItems";
import { render } from "../../../utils/__testUtils__/customRender";
import DesktopDrawer from "../DesktopDrawer";

describe("DesktopDrawer", () => {
    it("Should render the correct navigation items", () => {
        render(<DesktopDrawer />);
        for (var i = 0; i < navItems.length; i++) {
            screen.getByText(navItems[i].name);
        }
    });
});
