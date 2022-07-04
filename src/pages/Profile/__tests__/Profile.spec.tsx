import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import Profile from "../Profile";

describe("Profile Page Tests", () => {
    it("Should find the heading", () => {
        render(<Profile />);

        const heading = screen.getByRole("heading", { name: "Profile" });

        expect(heading).toBeInTheDocument();
    });
});
