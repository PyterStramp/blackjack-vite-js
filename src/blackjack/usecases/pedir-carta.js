
/**
 * Pide una carta del deck
 * @param {Array<String>} deck del juego
 * @returns {String} - Carta tomada del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
