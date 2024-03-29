import { BreedType } from "@api/breedsController/types";

export interface BaseImageType {
    height: number;
    id: string;
    url: string;
    width: number;
}

export interface RandomImageType extends BaseImageType {
    breeds: BreedType[];
}

export interface GetImagesProps {
    limit: string;
    page: string;
    queryParams?: string;
    signal?: AbortSignal;
}

export interface UploadImageResponse {
    id: string;
    url: string;
    sub_id: string;
    width: number;
    height: number;
    original_filename: string;
    pending: number;
    approved: number;
}
