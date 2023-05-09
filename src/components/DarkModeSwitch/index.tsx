import { FC } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { turnDarkModeOff, turnDarkModeOn } from "@store/slices/darkModeSlice";
import { cn } from "@utils/classNames";

import { ReactComponent as ClosedEye } from "@assets/icons/closed-eye.svg";
import { ReactComponent as OpenedEye } from "@assets/icons/opened-eye.svg";

import "./styles.scss";

const DarkModeSwitch: FC = () => {
    const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
    const dispatch = useAppDispatch();

    const onClick = () => {
        if (isDarkMode) {
            dispatch(turnDarkModeOff());
        } else {
            dispatch(turnDarkModeOn());
        }
    };

    console.log("isDarkMode", isDarkMode);

    return (
        <div className="dark-mode-switch">
            <div className="dark-mode-switch__indicator">
                {isDarkMode ? <ClosedEye /> : <OpenedEye />}
            </div>

            <button
                type="button"
                className="dark-mode-switch__button"
                onClick={onClick}
                title="dark mode switch"
            >
                <div
                    className={cn(
                        "dark-mode-switch__button-indicator",
                        isDarkMode ? "active" : ""
                    )}
                />
            </button>
        </div>
    );
};

export default DarkModeSwitch;
