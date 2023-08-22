export class UserNotFoundException extends Error {
    public constructor(id: number) {
        super(`Could not find user with ID '${id}'`);
    }
}