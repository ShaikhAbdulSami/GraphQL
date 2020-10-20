let crypto = require('crypto')
let localData = {}

const resolver = {
    Query: {
        getMessage: () => {
            return "Hello World"
        },
        getName: () => {
            return "Abdul Sami"
        },
        getAllMessages: () => {
            return [{message:"test" , id:"1234"},{message:"test",id:"1234"}]
        }
    },
    Mutation: {
        createMessage : (_,{input})=>{
            // console.log("args" ,args)
            let id = crypto.randomBytes(10).toString("hex")
            console.log("Id" , id)
            localData[id] = {id,...input.message}
            return {id,...input}
        }
    }
}
module.exports = resolver