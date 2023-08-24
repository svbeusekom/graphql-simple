import {Resolvers} from "../../Graphql/Generated/generated";
import {ObjectUserRepository} from "../../Repositories/Object/ObjectUserRepository";

const userRepository = new ObjectUserRepository();
const resolvers: Resolvers = {
    Query: {
        getUser: async (_, __) => {
            return await userRepository.getUser(__.id);
        },
        getUsers: async () => {
            return await userRepository.getUsers();
        }
    },
    Mutation: {
        addUser: async (_, __) => {
            return await userRepository.addUser(__.input?.name, __.input?.description);
        },
        deleteUser: async (_, __) => {
            return await userRepository.deleteUser(__.id);
        }
    }
};

export default resolvers;
