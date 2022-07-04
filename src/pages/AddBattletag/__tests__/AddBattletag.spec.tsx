import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import AddBattletag from "../AddBattletag";

describe("Add Battletag Page Tests", () => {
    it("Should find the heading", () => {
        render(<AddBattletag/>);
        const heading = screen.getByRole("heading", { name: "Add Battletag" });

        expect(heading).toBeInTheDocument();
    });
});
