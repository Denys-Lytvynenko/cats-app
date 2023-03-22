export class ApiService {
    private static instance: ApiService;
    private readonly baseUrl: string;
    private readonly apiKey: string;
    private readonly headers: HeadersInit;

    constructor() {
        this.baseUrl = import.meta.env.VITE_API_URL;
        this.apiKey = import.meta.env.VITE_API_KEY;
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Accept, Content-Type",
            "x-api-key": this.apiKey,
        };
    }

    static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }

        return ApiService.instance;
    }

    /**
     * get
     */
    public get<P>(url: string, signal?: AbortSignal): Promise<P> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/${url}`, {
                    headers: this.headers,
                    signal,
                });

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }

                const actualData = await response.json();

                resolve(actualData as P);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * post
     */
    public post<T, P>(url: string, data: T): Promise<P> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/${url}`, {
                    method: "POST",
                    headers: this.headers,
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }

                const actualData = await response.json();

                resolve(actualData as P);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * delete
     */
    public delete<P>(url: string): Promise<P> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${this.baseUrl}/${url}`, {
                    method: "DELETE",
                    headers: this.headers,
                });

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }

                const actualData = await response.json();

                resolve(actualData as P);
            } catch (error) {
                reject(error);
            }
        });
    }
}
