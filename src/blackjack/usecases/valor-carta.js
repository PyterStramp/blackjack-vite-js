
/**
 * Toma la carta tomada y toma el valor como number
 * @param {String} El valor crudo de la carta
 * @returns {Number} El valor de la carta según el número; ej/: [2, 3, 4, ..., J,Q,K = 10, A = 11]
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}