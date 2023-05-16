export type Callback = (error?: Error, response?: unknown) => void;
export type DatabaseQuery<T> = (object: T, callback: Callback) => void;
