import { FC } from "react";

import { cn } from "@utils/classNames";
import { TileOverlayProps } from "./types";

import "./styles.scss";

const TileOverlay: FC<TileOverlayProps> = ({ className, children }) => (
    <div className={cn("tile-overlay", className)}>
        <div className="tile-overlay__background">{children}</div>
    </div>
);

export default TileOverlay;
