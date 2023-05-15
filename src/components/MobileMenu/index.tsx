import { FC, useEffect, useState } from "react";

import { useAppDispatch } from "@store/hooks";
import { setMenuOpen } from "@store/slices/mobileSlice";
import { cn } from "@utils/classNames";

import Button from "../Button";
import NavigationCards from "../NavigationCards";

import { ReactComponent as BurgerIcon } from "@assets/icons/burger.svg";
import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";

import "./styles.scss";

const MobileMenu: FC = () => {
    const [menuOpened, setMenuOpened] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const onClick = () => {
        setMenuOpened(prev => !prev);
        dispatch(setMenuOpen(!menuOpened));
    };

    useEffect(() => {
        return () => {
            dispatch(setMenuOpen(menuOpened));
        };
    }, []);

    return (
        <div className="mobile-menu">
            <Button
                type="button"
                buttonStyle="icon-button"
                size="large"
                className="burger-button"
                title="mobile menu button"
                onClick={onClick}
            >
                <BurgerIcon />
            </Button>

            <div
                className={cn(
                    "mobile-menu__wrapper",
                    menuOpened ? "active" : ""
                )}
            >
                <div className="mobile-menu__top-wrapper">
                    <Button
                        type="button"
                        buttonStyle="icon-button"
                        size="large"
                        className="burger-button"
                        title="close mobile menu button"
                        onClick={onClick}
                    >
                        <CloseIcon />
                    </Button>
                </div>

                <NavigationCards />
            </div>
        </div>
    );
};

export default MobileMenu;
