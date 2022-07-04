import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import Maps from "../Maps";

describe("Maps Page Tests", () => {
    it("Should find the heading", () => {
        render(<Maps />);

        const heading = screen.getByRole("heading", { name: "Maps" });

        expect(heading).toBeInTheDocument();
    });
});
