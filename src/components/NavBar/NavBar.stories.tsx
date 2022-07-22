import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";
import NavBar from "./NavBar";
import UserMenu from "../UserMenu/UserMenu";

export default {
    title: "Components/NavBar",
    component: NavBar,
    parameters: { layout: "fullscreen", },
    subcomponents: { UserMenu },
    decorators: [
        (Story) =>
            <StorybookProvider>
                <Story />
            </StorybookProvider>
    ]
} as ComponentMeta<typeof NavBar>;

export const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const LoggedOut = Template.bind({});