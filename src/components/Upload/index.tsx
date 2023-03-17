import { ChangeEvent, DragEvent, FC, useState } from "react";

import { cn } from "@utils/classNames";
import { UploadProps } from "./types";

import Button from "../Button";
import FileUploadMessage from "../Message";
import Typography from "../Typography";

import { ReactComponent as UploadIcon } from "@assets/icons/upload-file.svg";

import "./styles.scss";

const Upload: FC<UploadProps> = () => {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [file, setFile] = useState<FileList>();

    const handleDrag = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files);
        }
    };

    return (
        <div className="file-upload-form__wrapper">
            <form
                className="file-upload-form"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onSubmit={e => e.preventDefault()}
            >
                <input
                    type="file"
                    id="file-upload-form__input"
                    className="file-upload-form__input"
                    accept="image/png, .jpg"
                    onChange={handleChange}
                />

                <label
                    htmlFor="file-upload-form__input"
                    className={cn(
                        "file-upload-form__label",
                        dragActive ? "active" : ""
                    )}
                >
                    <UploadIcon />

                    <Typography tag="p">
                        <strong>Drag</strong> here your file or{" "}
                        <strong>Click</strong> here to upload
                    </Typography>
                </label>
            </form>

            <Typography tag="p" className="file-upload-form__filename">
                {file ? file[0].name : "No file selected"}
            </Typography>

            {file && <Button active>Upload photo</Button>}

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
