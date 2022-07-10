import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import Home from "../Home";

describe("Heroes Page Tests", () => {
    it("Should find the heading", () => {
        render(<Home />);

        const heading = screen.getByRole("heading", { level: 1, name: /home/i });

        expect(heading).toBeInTheDocument();
    });
});
