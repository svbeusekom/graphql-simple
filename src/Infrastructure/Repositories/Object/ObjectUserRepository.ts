import {UserRepository} from "../../../Domain/Repositories/UserRepository";
import {User} from "../../Graphql/Generated/generated";
import {UserNotFoundException} from "../../../Domain/Exceptions/UserNotFoundException";

export class ObjectUserRepository implements UserRepository{
    private readonly users: User[];

    public constructor() {
        this.users = [];
        this.users.push(
            {id: 1, name: 'Stefan', description: 'This is the first user'},
            {id: 2, name: 'Sander', description: 'This is the second user'}
        );
    }

    public async getUser(id: number): Promise<User> {
        const user = this.users.find((user) => user.id === id);

        if (!user) {
            throw new UserNotFoundException(id);
        }

        return user;
    }

    public async getUsers(): Promise<User[]> {
        return this.users;
    }

    public async addUser(name: string, description?: string | null): Promise<User> {
        this.users.sort((a, b) => (a.id > b.id) ? 1 : -1);
        const lastUser = this.users[this.users.length-1];
        const newId = lastUser.id + 1;
        const user = { id: newId, name, description };
        this.users.push(user);

        return user;
    }

    public async deleteUser(id: number) {
        const user = await this.getUser(id);

        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                this.users.splice(i, 1);
                break;
            }
        }

        this.users.sort((a, b) => (a.id > b.id) ? 1 : -1);

        return user;
    }
}