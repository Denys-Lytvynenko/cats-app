import {
    ChangeEvent,
    DragEvent,
    FC,
    FormEvent,
    useEffect,
    useState,
} from "react";

import { ImagesController } from "@api/imagesController";
import { cn } from "@utils/classNames";
import { convertToBase64 } from "@utils/convertToBase64";
import { IMessage, UploadProps } from "./types";

import Button from "../Button";
import Image from "../Image";
import FileUploadMessage from "../Message";
import Typography from "../Typography";

import { ReactComponent as ButtonLoaderIcon } from "@assets/icons/button-loader.svg";
import { ReactComponent as UploadIcon } from "@assets/icons/upload-file.svg";

import "./styles.scss";

const validateFile = (file: File) => {
    let message: IMessage = {};

    // check file type
    if (!["image/jpeg", "image/png"].includes(file.type)) {
        message.status = "failure";
        message.text = "Only jpeg, png images are allowed.";
    }

    // check file size (< 2MB)
    if (file.size > 2 * 1024 * 1024) {
        message.status = "failure";
        message.text = "File must be less than 2MB.";
    }

    return message;
};

const Upload: FC<UploadProps> = () => {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [file, setFile] = useState<File>();
    const [imagePreview, setImagePreview] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
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

        const validationMessage = validateFile(e.dataTransfer.files[0]);

        if (validationMessage.status === "failure") {
            setMessage(validationMessage);
            setFile(undefined);
            setImagePreview("");
            return;
        } else {
            setMessage({});
        }

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (e.target.files && e.target.files[0]) {
            const validationMessage = validateFile(e.target.files[0]);

            if (validationMessage.status === "failure") {
                setMessage(validationMessage);
                setFile(undefined);
                setImagePreview("");
                return;
            } else {
                setMessage({});
            }

            setFile(e.target.files[0]);
        }
    };

    useEffect(() => {
        if (!file) return;

        convertToBase64(file).then(filePrev =>
            setImagePreview(filePrev as string)
        );
    }, [file]);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (file) {
            try {
                setLoading(true);
                const validationMessage = validateFile(file);
                if (validationMessage.status === "failure") {
                    setMessage(validationMessage);
                    setLoading(false);
                    return;
                } else {
                    setMessage({});
                }

                const formData = new FormData();
                formData.append("file", file);
                formData.append("sub_id", import.meta.env.VITE_SUB_ID);

                const response =
                    await ImagesController.getInstance().uploadImage(formData);

                if (!!response && response.approved) {
                    setMessage({
                        status: "success",
                        text: "Thanks for the Upload - Cat found!",
                    });
                    setImagePreview("");
                    setFile(undefined);
                }
            } catch (error: any) {
                const parseError = await error.text();
                if (parseError.includes("correct animal not found")) {
                    setMessage({ status: "failure", text: parseError });
                }

                console.error(`Error on upload image: ${error}`);
            } finally {
                setLoading(false);
            }
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
                onSubmit={onSubmit}
            >
                <div className="file-upload-form__input-wrapper">
                    <input
                        type="file"
                        id="file-upload-form__input"
                        name="file"
                        className="file-upload-form__input"
                        accept="image/png, .jpg, .gif"
                        onChange={handleChange}
                    />

                    <label
                        htmlFor="file-upload-form__input"
                        className={cn(
                            "file-upload-form__label",
                            dragActive || message.status === "failure"
                                ? "active"
                                : ""
                        )}
                    >
                        {imagePreview && file && (
                            <Image
                                src={imagePreview}
                                alt={file.name}
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
                    {file ? file.name : "No file selected"}
                </Typography>

                {file && message.status !== "failure" && (
                    <Button
                        type="submit"
                        buttonStyle="icon-text-button"
                        active={loading}
                        disabled={loading}
                        className={cn(
                            "file-upload-form__submit-button",
                            loading ? "loading" : ""
                        )}
                    >
                        {!loading ? (
                            "Upload photo"
                        ) : (
                            <>
                                <ButtonLoaderIcon />
                                Uploading
                            </>
                        )}
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
