import {
    ChangeEvent,
    DragEvent,
    FC,
    FormEvent,
    useEffect,
    useState,
} from "react";

import { cn } from "@utils/classNames";
import { convertToBase64 } from "@utils/convertToBase64";
import { IMessage, UploadProps } from "./types";

import Button from "../Button";
import Image from "../Image";
import FileUploadMessage from "../Message";
import Typography from "../Typography";

import { ReactComponent as UploadIcon } from "@assets/icons/upload-file.svg";

import "./styles.scss";

const Upload: FC<UploadProps> = () => {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [file, setFile] = useState<FileList>();
    const [imagePreview, setImagePreview] = useState<string>("");
    const [message, setMessage] = useState<IMessage>({
        status: undefined,
        text: "",
    });

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

    useEffect(() => {
        if (!file) return;

        convertToBase64(file[0]).then(file => setImagePreview(file as string));
    }, [file]);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(file);
    };

    return (
        <div className="file-upload-form__wrapper">
            <form
                className="file-upload-form"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onSubmit={onSubmit}
            >
                <div className="file-upload-form__input-wrapper">
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
                        {imagePreview && file && (
                            <Image
                                src={imagePreview}
                                alt={file[0].name}
                                className="file-upload-form__image"
                            />
                        )}

                        {!imagePreview && (
                            <>
                                <UploadIcon />

                                <Typography tag="p">
                                    <strong>Drag</strong> here your file or{" "}
                                    <strong>Click</strong> here to upload
                                </Typography>
                            </>
                        )}
                    </label>
                </div>

                <Typography tag="p" className="file-upload-form__filename">
                    {file ? file[0].name : "No file selected"}
                </Typography>

                {file && message.status !== "failure" && (
                    <Button type="submit" active>
                        Upload photo
                    </Button>
                )}
            </form>

            {message.status && message.text && (
                <FileUploadMessage
                    status={message.status}
                    className="file-upload-form__message"
                >
                    {message.text}
                </FileUploadMessage>
            )}
        </div>
    );
};

export default Upload;
