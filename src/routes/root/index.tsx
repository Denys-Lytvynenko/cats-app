import { FC, useEffect, useLayoutEffect } from "react";
import { Link, Outlet, useMatch } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { switchDarkMode } from "@store/slices/darkModeSlice";
import { setIsMobile, setScreenSize } from "@store/slices/mobileSlice";
import { cn } from "@utils/classNames";
import { routes } from "../routes";

import DarkModeSwitch from "@components/DarkModeSwitch";
import NavigationCards from "@components/NavigationCards";
import Typography from "@components/Typography";

import { ReactComponent as Logo } from "@assets/icons/logo.svg";

import "./styles.scss";

const Root: FC = () => {
    const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);
    const isMobile = useAppSelector(state => state.mobile.isMobile);
    const dispatch = useAppDispatch();

    const isHome = useMatch(routes.home);

    // Detect screen size
    const onResize = () => {
        dispatch(setScreenSize(document.body.clientWidth));

        if (document.body.clientWidth < 1200) {
            dispatch(setIsMobile(true));
        } else {
            dispatch(setIsMobile(false));
        }
    };

    useLayoutEffect(() => {
        onResize();
    }, []);

    useEffect(() => {
        addEventListener("resize", onResize);

        return () => removeEventListener("resize", onResize);
    }, []);

    // Auto detect dark mode
    useEffect(() => {
        const darkThemeMQ = window.matchMedia("(prefers-color-scheme: dark)");
        const mqListener = (e: MediaQueryListEvent) => {
            dispatch(switchDarkMode(e.matches));
        };

        darkThemeMQ.addEventListener("change", mqListener);

        return () => darkThemeMQ.removeEventListener("change", mqListener);
    }, []);

    return (
        <div className={cn("app", isDarkMode ? "dark-mode" : "")}>
            <div className="app__wrapper">
                {((isMobile && isHome) || !isMobile) && (
                    <div className="app__side-wrapper">
                        <div className="app__navigation">
                            <header className="header">
                                <Link
                                    to={routes.home}
                                    className="header__logo"
                                    title="logo"
                                >
                                    <Logo />
                                    <Typography tag="h5">PetsPaw</Typography>
                                </Link>

                                <DarkModeSwitch />
                            </header>

                            <Typography tag="h1" className="app__title">
                                Hi intern!
                            </Typography>

                            <Typography tag="p" className="app__welcome-text">
                                Welcome to MI 2022 Front-end test
                            </Typography>

                            <Typography tag="h5" className="app__subtitle">
                                Lets start using The Cat API
                            </Typography>

                            <NavigationCards />
                        </div>
                    </div>
                )}

                {(!isMobile || (isMobile && !isHome)) && (
                    <main className="content">
                        <Outlet />
                    </main>
                )}
            </div>
        </div>
    );
};

export default Root;
