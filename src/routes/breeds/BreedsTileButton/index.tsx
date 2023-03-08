import { FC } from "react";

import { BreedsTileButtonProps } from "./types";

import Button from "@components/Button";

const BreedsTileButton: FC<BreedsTileButtonProps> = ({
    children,
    ...props
}) => (
    <Button
        {...props}
        buttonStyle="text-button"
        className="breeds__tile-button"
    >
        {children}
    </Button>
);

export default BreedsTileButton;
