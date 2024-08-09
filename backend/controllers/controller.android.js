import {modelo} from '../models/model.android.js'
export const testAndroid = () => {
    console.log("llamando la funcion desde el controlador")
}
modelo.create({
    number: 6.6,

},
{
    year: "2009"
})