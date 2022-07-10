import { useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";
import { useAppDispatch } from "../../app/hooks";
import UserMenu from "../UserMenu/UserMenu";
import DesktopDrawer from "./DesktopDrawer";
import { openDrawer } from "../../features/drawer/drawerSlice";

export default {
    title: "Components/DesktopDrawer",
    component: DesktopDrawer,
    parameters: { layout: "fullscreen", },
    subcomponents: { UserMenu },
    decorators: [
        (Story) =>
            <StorybookProvider>
                <Story />
            </StorybookProvider>
    ]
} as ComponentMeta<typeof DesktopDrawer>;

export const Template: ComponentStory<typeof DesktopDrawer> = (args) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(openDrawer(true));
        return () => {
            dispatch(openDrawer(false));
        };
    }, []);

    return (<DesktopDrawer {...args} />);
}; 