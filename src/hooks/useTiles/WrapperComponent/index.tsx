import { FC } from "react";

import { WrapperComponentProps } from "./types";

const WrapperComponent: FC<WrapperComponentProps> = ({
    component: Component,
    ...props
}) => <Component {...props} />;

export default WrapperComponent;
