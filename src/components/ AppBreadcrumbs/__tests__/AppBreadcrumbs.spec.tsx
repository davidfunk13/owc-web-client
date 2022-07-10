import { screen } from "@testing-library/react";
import IBreadcrumb from "../../../types/IBreadcrumb";
import { render } from "../../../utils/__testUtils__/customRender";
import mockBreadcrumbs from "../../../utils/__testUtils__/mocks/mockBreadcrumbs";
import AppBreadcrumbs from "../AppBreadcrumbs";

describe("AppBreadcrumb Tests", () => {
    it("Should render correctly given a mock set of breadcrumbs.", () => {
        render(<AppBreadcrumbs breadcrumbs={mockBreadcrumbs} />);

        mockBreadcrumbs.map(crumb => {
            const { name, linkPath } = crumb;
            
            const breadcrumb = screen.getByLabelText(`${name}-breadcrumb-text`);

            expect(breadcrumb).toBeInTheDocument();

            return expect(breadcrumb).toHaveAttribute("href", linkPath);
        });
    });

    it("Should be able to tell if a breadcrumb is bold or not", () => {
        const boldBreadcrumb: IBreadcrumb[] = [
            {
                name: "Test Bold Node",
                linkPath: "/test-path",
                bold: true
            }
        ];

        render(<AppBreadcrumbs breadcrumbs={boldBreadcrumb} />);

        const boldNode = screen.getByText(/test bold node/i);

        expect(boldNode).toHaveStyle("font-weight: 400");

    });

});
