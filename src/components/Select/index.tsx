import { FC, useMemo } from "react";

import { cn } from "../../utils/classNames";
import { SelectProps } from "./types";

import "./styles.scss";

const Select: FC<SelectProps> = ({
    name,
    label,
    options,
    accentColor,
    className,
}) => {
    const optionsList = useMemo(() => {
        return options.map(option => (
            <option value={option.value} key={option.value}>
                {option.value}
            </option>
        ));
    }, []);

    return (
        <div className={cn("select", className)}>
            {label && (
                <label htmlFor={name} className="select__label">
                    {label}
                </label>
            )}

            <div className="select__wrapper">
                <select
                    name={name}
                    id={name}
                    className={cn("select__input", accentColor)}
                >
                    {optionsList}
                </select>
            </div>
        </div>
    );
};

export default Select;
