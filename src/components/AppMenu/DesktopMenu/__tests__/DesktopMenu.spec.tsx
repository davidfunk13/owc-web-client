import { screen } from "@testing-library/react";
import navItems from "../../../../utils/navItems";
import { render } from "../../../../utils/__testUtils__/customRender";
import DesktopMenu from "../DesktopMenu";

describe("DesktopMenu", () => {
    it("Should render the correct navigation items", () => {
        render(<DesktopMenu />);
        for (var i = 0; i < navItems.length; i++) {
            screen.getByText(navItems[i].name);
        }
    });
});
