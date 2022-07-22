import { useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../../providers/StorybookProvider/StorybookProvider";
import { useAppDispatch } from "../../../app/hooks";
import UserMenu from "../../UserMenu/UserMenu";
import MobileMenu from "./MobileMenu";
import { openDrawer } from "../../../features/drawer/drawerSlice";

export default {
    title: "Components/MobileMenu",
    component: MobileMenu,
    parameters: { layout: "fullscreen", },
    subcomponents: { UserMenu },
    decorators: [
        (Story) =>
            <StorybookProvider>
                <Story />
            </StorybookProvider>
    ]
} as ComponentMeta<typeof MobileMenu>;

export const Template: ComponentStory<typeof MobileMenu> = (args) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(openDrawer(true));
        return () => {
            dispatch(openDrawer(false));
        };
    }, [dispatch]);

    return (<MobileMenu {...args} />);
}; 