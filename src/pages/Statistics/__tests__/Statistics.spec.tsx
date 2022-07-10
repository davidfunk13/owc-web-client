import { screen } from "@testing-library/react";
import { render } from "../../../utils/__testUtils__/customRender";
import Statistics from "../Statistics";

describe("Statistics Page Tests", () => {
    it("Should find the heading", () => {
        render(<Statistics />);

        const heading = screen.getByRole("heading", { level: 1, name: /statistics/i });

        expect(heading).toBeInTheDocument();
    });
});
