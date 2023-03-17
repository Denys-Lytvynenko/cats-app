import { FC } from "react";

import { UploadModalProps } from "./types";

import Modal from "@components/Modal";
import Typography from "@components/Typography";
import Message from "./Message";

import "./styles.scss";

const UploadModal: FC<UploadModalProps> = props => {
    return (
        <Modal {...props} className="upload-modal">
            <Typography tag="h4" className="upload-modal__title">
                Upload a .jpg or .png Cat Image
            </Typography>
            <Typography tag="p" className="upload-modal__description">
                Any uploads must comply with the{" "}
                <a href="https://thecatapi.com/privacy">upload guidelines</a> or
                face deletion.
            </Typography>

            <Message status="failure">Some message</Message>
            <Message status="success">Some message</Message>
        </Modal>
    );
};

export default UploadModal;
