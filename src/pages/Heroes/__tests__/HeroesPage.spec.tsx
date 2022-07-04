import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import Heroes from "../Heroes";

describe("Heroes Page Tests", () => {
    it("Should find the heading", () => {
        render(<Heroes />);

        const heading = screen.getByRole("heading", { name: "Heroes" });

        expect(heading).toBeInTheDocument();
    });
});
