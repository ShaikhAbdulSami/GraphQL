import { gql } from '@apollo/client'

const createMessageMutation = gql `
mutation createMessage($data: messageInput){
    createMessage(input: $data){
        message
        id
    }
}
`

const getAllMessages = gql `
query getAllMessages{
    getAllMessages{
        message
        id
    }
}
`

export{
    createMessageMutation,
    getAllMessages
}