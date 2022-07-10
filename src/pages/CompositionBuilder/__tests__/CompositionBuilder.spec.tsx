import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import CompositionBuilder from "../CompositionBuilder";

describe("Composition Builder Page Tests", () => {
    it("Should find the heading", () => {
        render(<CompositionBuilder />);

        const heading = screen.getByRole("heading", { level: 1, name: /team composition builder/i });
        expect(heading).toBeInTheDocument();
    });
});
