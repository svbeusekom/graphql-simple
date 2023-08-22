import {User} from "../../Infrastructure/Graphql/Generated/generated";

export interface UserRepository {
    getUser(id: number): Promise<User>;
    getUsers(): Promise<User[]>;
    addUser(name: string, description?: string | null): Promise<User>;
}