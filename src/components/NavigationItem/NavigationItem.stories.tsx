import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";
import NavigationItem from "./NavigationItem";


const storyArgs = {
    user: {
        picture: "https://lh3.googleusercontent.com/a/AATXAJzlfiAz-keUTRKULWT73mQZQwC-jBgBhPKS4l6a=s96-c",
        given_name: "Assface MacPeenus"
    }
};

export default {
    title: "Components/NavigationItem",
    component: NavigationItem,
    args: storyArgs,
    parameters: { layout: "fullscreen", },
    decorators: [(Story) =>
        <StorybookProvider>
            <Story />
        </StorybookProvider>
    ]
} as ComponentMeta<typeof NavigationItem>;

export const Template: ComponentStory<typeof NavigationItem> = (args) => <NavigationItem {...args} />;