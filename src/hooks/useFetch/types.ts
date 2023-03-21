export type UseFetchResponseType<T> = [
    loading: boolean,
    data: T | null,
    error: any
];
