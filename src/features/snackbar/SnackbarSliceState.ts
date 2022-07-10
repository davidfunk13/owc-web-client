interface SnackbarSliceState {
    open: boolean,
    message?: string,
    variant: "success" | "error"
}

export default SnackbarSliceState;