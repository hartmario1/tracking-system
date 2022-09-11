export const serverUrl = 'https://tracksystem.herokuapp.com';
export const localUrl = 'http://localhost:3000';

export interface APIErrorData {
  statusCode: number;
  statusText: string;
  message: string | null;
}

export class APIError extends Error {
    public constructor(public readonly data: APIErrorData) {
        super(data.message);
    }
}
