import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import PageNotFound from "../PageNotFound";

describe("404 Page Not Found Page Tests", () => {
    it("Should find the heading", () => {
        render(<PageNotFound />);
        const heading = screen.getByRole("heading", { level: 1, name: /404 page not found/i });
        expect(heading).toBeInTheDocument();
    });
});
