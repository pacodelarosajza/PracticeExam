import { Schema, model} from  'mongoose'
export const esquema = new Schema ({
    Storage:{
        type:Number
    },
    Format:{
        type:String
    }
})

export const modelo = new model('data', esquema)