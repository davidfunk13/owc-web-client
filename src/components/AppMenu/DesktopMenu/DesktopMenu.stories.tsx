import { useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../../providers/StorybookProvider/StorybookProvider";
import { useAppDispatch } from "../../../app/hooks";
import UserMenu from "../../UserMenu/UserMenu";
import DesktopMenu from "./DesktopMenu";
import { openDrawer } from "../../../features/drawer/drawerSlice";

export default {
    title: "Components/DesktopMenu",
    component: DesktopMenu,
    parameters: { layout: "fullscreen", },
    subcomponents: { UserMenu },
    decorators: [
        (Story) =>
            <StorybookProvider>
                <Story />
            </StorybookProvider>
    ]
} as ComponentMeta<typeof DesktopMenu>;

export const Template: ComponentStory<typeof DesktopMenu> = (args) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(openDrawer(true));
        return () => {
            dispatch(openDrawer(false));
        };
    }, [dispatch]);

    return (<DesktopMenu {...args} />);
}; 