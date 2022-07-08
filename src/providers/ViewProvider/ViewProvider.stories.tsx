import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";
import ViewProvider from "./ViewProvider";

export default {
    title: "Components/ViewProvider",
    component: ViewProvider,
    parameters: { layout: "fullscreen", },
    subcomponents: {},
    args: {},
    decorators: [
        (Story) =>
            <StorybookProvider>
                <Story />
            </StorybookProvider>
    ]
} as ComponentMeta<typeof ViewProvider>;

export const Template: ComponentStory<typeof ViewProvider> = (args) => <ViewProvider {...args} />;