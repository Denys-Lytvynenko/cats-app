import { FC } from "react";

import { cn } from "@utils/classNames";
import { ModalProps } from "./types";

import Button from "../Button";

import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";

import "./styles.scss";

const Modal: FC<ModalProps> = ({ isOpen, onClose, className, children }) => (
    <>
        {isOpen && (
            <div className={cn("modal", className)}>
                <div className="modal__wrapper">
                    <div className="modal__overlay" onClick={onClose} />

                    <div className="modal__content">
                        <div className="modal__inner">
                            <div className="modal__inner-top">
                                <Button
                                    buttonStyle="icon-button"
                                    size="small"
                                    onClick={onClose}
                                >
                                    <CloseIcon />
                                </Button>
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
);

export default Modal;
