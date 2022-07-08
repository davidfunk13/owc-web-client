import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";
import UserMenu from "../UserMenu/UserMenu";
import AppBreadcrumbs from "./AppBreadcrumbs";

export default {
    title: "Components/AppBreadcrumbs",
    component: AppBreadcrumbs,
    parameters: { layout: "fullscreen", },
    subcomponents: { UserMenu },
    args:{
        variant: ""
    },
    decorators: [
        (Story) =>
            <StorybookProvider>
                <Story />
            </StorybookProvider>
    ]
} as ComponentMeta<typeof AppBreadcrumbs>;

export const Template: ComponentStory<typeof AppBreadcrumbs> = (args) => <AppBreadcrumbs {...args} />; 