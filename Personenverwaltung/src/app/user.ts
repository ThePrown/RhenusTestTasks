export interface User {
    id: number;
    firstName: String;
    lastName: String;
    email: String;
}

export interface UserWithoutId {
    firstName: String;
    lastName: String;
    email: String;
}