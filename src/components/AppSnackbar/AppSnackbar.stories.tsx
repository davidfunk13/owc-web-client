import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect } from "react";
import { setSnackbarMessage } from "../../app/features/snackbar/snackbarSlice";
import { useAppDispatch } from "../../app/hooks";
import StorybookProvider from "../../providers/StorybookProvider/StorybookProvider";
import UserMenu from "../UserMenu/UserMenu";
import AppSnackbar from "./AppSnackbar";

export default {
    title: "Components/AppSnackbar",
    component: AppSnackbar,
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
} as ComponentMeta<typeof AppSnackbar>;

export const Template: ComponentStory<typeof AppSnackbar> = (args) => {
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(setSnackbarMessage("Here's a test message for storybook."));
        return()=> {
            dispatch(setSnackbarMessage(null));
        };
    },[]);

    return (
        <AppSnackbar {...args} />
    );
}; 