import React, { useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";
import { useAppDispatch } from "../../app/hooks";
import { setIsAuthenticated, setUser } from "../../app/features/auth/authSlice";
import UserMenu from "../UserMenu/UserMenu";
import MobileDrawer from "./MobileDrawer";
import { selectDrawerOpen, openDrawer } from "../../app/features/drawer/drawerSlice";

export default {
    title: "Components/MobileDrawer",
    component: MobileDrawer,
    parameters: { layout: "fullscreen", },
    subcomponents: { UserMenu },
    decorators: [
        (Story) =>
            <StorybookProvider>
                <Story />
            </StorybookProvider>
    ]
} as ComponentMeta<typeof MobileDrawer>;

export const Template: ComponentStory<typeof MobileDrawer> = (args) => {
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(openDrawer(true));
        return () => {
            dispatch(openDrawer(false));
        };
    },[]);
    return(<MobileDrawer {...args} />);
}; 