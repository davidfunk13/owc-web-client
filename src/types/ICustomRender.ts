import { RenderOptions } from "@testing-library/react";
import { RootState } from "../app/store";

type ICustomRender = Partial<RootState> &RenderOptions

export default ICustomRender;