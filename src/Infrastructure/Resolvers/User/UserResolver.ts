import {Resolvers} from "../../Graphql/Generated/generated";
import {ObjectUserRepository} from "../../Repositories/Object/ObjectUserRepository";

const userRepository = new ObjectUserRepository();
const resolvers: Resolvers = {
    Query: {
        getUser: async (_, __) => {
            return userRepository.getUser(__.id);
        },
        getUsers: async () => {
            return userRepository.getUsers();
        }
    },
    Mutation: {
        addUser: async (_, __) => {
            return userRepository.addUser(__.input?.name, __.input?.description);
        }
    }
};

export default resolvers;
