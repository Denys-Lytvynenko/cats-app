import { DragEvent, FC, useState } from "react";

import { UploadProps } from "./types";

import Typography from "../Typography";

import "./styles.scss";
import Button from "../Button";
import FileUploadMessage from "../Message";

const Upload: FC<UploadProps> = () => {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState();

    const handleDrag = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    return (
        <div className="file-upload-form__wrapper">
            <form
                className="file-upload-form"
                onDrag={handleDrag}
                onSubmit={e => e.preventDefault()}
            >
                <input
                    type="file"
                    id="file-upload-form__input"
                    className="file-upload-form__input"
                    multiple={true}
                    accept="image/png, .jpg"
                />

                <label
                    htmlFor="file-upload-form__input"
                    className="file-upload-form__label"
                >
                    <Typography tag="p">
                        <strong>Drag</strong> here your file or{" "}
                        <strong>Click</strong> here to upload
                    </Typography>
                </label>
            </form>

            <Typography tag="p" className="file-upload-form__filename">
                {selectedFile ? selectedFile : "No file selected"}
            </Typography>

            <Button active>Upload photo</Button>

            <FileUploadMessage
                status="success"
                className="file-upload-form__message"
            >
                success
            </FileUploadMessage>
        </div>
    );
};

export default Upload;
