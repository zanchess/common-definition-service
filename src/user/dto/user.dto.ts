export class Login {
    email: string;
    password: string;
}

export class UserDTO {
    _id?: unknown; // TODO: figure out with id type
    firstName: string;
    lastName: string;
    account: string;
    password: string;
    email: string;
    age: number;
    male: string;
}
