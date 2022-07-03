import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserMenu from "./UserMenu";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";


const storyArgs = {
    user: {
        picture: "https://lh3.googleusercontent.com/a/AATXAJzlfiAz-keUTRKULWT73mQZQwC-jBgBhPKS4l6a=s96-c",
        given_name: "Assface MacPeenus"
    }    
};

export default {
    title: "Components/UserMenu",
    component: UserMenu,
    args: storyArgs,
    parameters: { layout: "fullscreen", },
    decorators: [(Story) =>
        <StorybookProvider>
            <Story />
        </StorybookProvider>
    ]
} as ComponentMeta<typeof UserMenu>;

export const Template: ComponentStory<typeof UserMenu> = (args) => <UserMenu {...args} />;