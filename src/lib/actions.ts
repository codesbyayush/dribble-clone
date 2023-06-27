import { GraphQLClient } from 'graphql-request'
import { createUserMutation, getUserQuery } from '@/graphql';

const isProduction = process.env.NODE_ENV === 'production' ;

const apiUrl = isProduction ? process.env.GRAFBASE_API_URL || ' ' : 'http://127.0.0.1:4000/graphql';

const apiKey = isProduction ? process.env.GRAFBASE_API_KEY || ' ' : '12345';

const serverUrl = isProduction ? process.env.SERVER_URL : 'http://localhost:3000';


const client = new GraphQLClient(apiUrl)

const makeGraphQLRequest = async (query:string , variables = {}) => {
    try {
        return await client.request(query,variables)
    } catch (error) {
        console.log(error);
    }
}

export const getUser = (email: string) => {

    client.setHeader('x-api-key', apiKey)
    return makeGraphQLRequest(getUserQuery, {email})
}

export const createUser = (name:string, email:string, avatarUrl : string) => {

    client.setHeader('x-api-key', apiKey)
    const variables = {
        input:{
        name: name,
        email: email,
        avatarUrl: avatarUrl}
    }

    return makeGraphQLRequest(createUserMutation, variables)
}