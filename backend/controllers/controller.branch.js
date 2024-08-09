import {modelo} from '../models/model.branch.js'
export const testBranch = () => {
    console.log("llamando la funcion desde el controlador")
}
modelo.create({
    name: "Sony",

},
{
    country: "Japon"
})