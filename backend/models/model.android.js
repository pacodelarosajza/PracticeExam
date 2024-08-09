import { Schema, model} from  'mongoose'
export const esquema = new Schema ({
    number:{
        type:Number
    },
    year:{
        type:Number
    }
})

export const modelo = new model('android', esquema)