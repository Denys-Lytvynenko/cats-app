import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { switchDarkMode } from "@store/slices/darkModeSlice";
import { cn } from "@utils/classNames";

import { ReactComponent as ClosedEye } from "@assets/icons/closed-eye.svg";
import { ReactComponent as OpenedEye } from "@assets/icons/opened-eye.svg";

import "./styles.scss";

const DarkModeSwitch: FC = () => {
    const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
    const dispatch = useAppDispatch();

    const onClick = () => {
        if (isDarkMode) {
            dispatch(switchDarkMode(false));
        } else {
            dispatch(switchDarkMode(true));
        }
    };

    useEffect(() => {
        const darkThemeMQ = window.matchMedia("(prefers-color-scheme: dark)");
        const mqListener = (e: MediaQueryListEvent) =>
            dispatch(switchDarkMode(e.matches));

        darkThemeMQ.addEventListener("change", mqListener);

        return () => darkThemeMQ.removeEventListener("change", mqListener);
    }, []);

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
