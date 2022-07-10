import React, { useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";
import { useAppDispatch } from "../../app/hooks";
import NavBar from "./NavBar";
import { setIsAuthenticated, setUser } from "../../features/auth/authSlice";
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

export const LoggedIn: ComponentStory<typeof NavBar> = (args) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setIsAuthenticated(true));
        dispatch(setUser({ given_name: "Asshole MacPeenus", }));
        
        return () => {
            dispatch(setIsAuthenticated(false));
        };
    }, [dispatch]);

    return <NavBar {...args} />;
};

export const LoggedOut: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />; 