import { FC } from "react";
import { Link } from "react-router-dom";

import { cn } from "../../utils/classNames";
import { CardProps } from "./types";

import Button from "../Button";

import "./styles.scss";

const Card: FC<CardProps> = ({
    name,
    className,
    image,
    href,
    backgroundColor,
}) => {
    return (
        <div className={cn("card", className)}>
            <Link to={href} className="card__image" style={{ backgroundColor }}>
                <img src={image} alt={name} />
            </Link>

            <div className="card__button">
                <Button href={href} buttonStyle="text-button">
                    {name}
                </Button>
            </div>
        </div>
    );
};

export default Card;
