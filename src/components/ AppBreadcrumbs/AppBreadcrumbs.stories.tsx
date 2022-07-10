import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";
import mockBreadcrumbs from "../../utils/__testUtils__/mocks/mockBreadcrumbs";
import AppBreadcrumbs from "./AppBreadcrumbs";

export default {
    title: "Components/AppBreadcrumbs",
    component: AppBreadcrumbs,
    parameters: { layout: "fullscreen", },
    args: {
        breadcrumbs: mockBreadcrumbs
    },
    decorators: [
        (Story) =>
            <StorybookProvider>
                <Story />
            </StorybookProvider>
    ]
} as ComponentMeta<typeof AppBreadcrumbs>;

export const Template: ComponentStory<typeof AppBreadcrumbs> = (args) => <AppBreadcrumbs {...args} />; 