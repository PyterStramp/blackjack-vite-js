
import _ from 'underscore';

//tiene ciertas dependencias
//esta documentación sirve para VScode
//tipo de dato
/**
 * 
 * @param {Array<string>} tiposDeCarta - Ejemplo ['E','C','D','T']
 * @param {Array<string>} tiposEspeciales ['A','J','Q','K']
 * @returns {Array<string>} Nuevo deck
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length ===0)
        throw new Error('El arreglo del tipo de carta es obligatorio');

    if (!tiposEspeciales || tiposEspeciales.length ===0)
        throw new Error('El arreglo del tipo de carta es obligatorio');        

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

//exportacion por defecto
//export default crearDeck;
