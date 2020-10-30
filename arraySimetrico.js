// DEFINIÇÃO: UM ARRAY SIMÉTRICO É:
//  Um array vazio
exports.arraySimetrico = (array)=>{
    //variáveis para uso geral
    const arraySize = array.length;
    const PositiveMessage = 'O array é simétrico';
    const NegativeMessage = 'O array não é simétrico';

    //variáveis para simétrico sendo par
    const firstPosition = array[0];
    const secondPosition = array[1];
    const ultimatePosition = array[array.length-1];
    const penultimatePotion = array[array.length-2];
    //variáveis para simétrico sendo ímpar
    const middlePosition = array[(array.length/2)-0.5];

    //Exceções
    if(arraySize == 0)
        return PositiveMessage;
    
    //Exceções
    if(array.length == 1 && array[0]== 0)
        return PositiveMessage;
    

    //VERIFICAR SENDO PAR
    if(arraySize%2 == 0){
        //  Um array com um número par de elementos, no qual:
        // o O primeiro elemento é igual ao ultimo elemento, com valor oposto
        // o O segundo elemento é igual ao penúltimo elemento, com valor oposto
        if(firstPosition == -ultimatePosition && secondPosition == -penultimatePotion)
            return PositiveMessage;
        
    }

    //VERIFICAR SENDO ÍMPAR
    if(array.length%2 == 1){
        //  Um array com um número ímpar de elemetos, no qual:
        // o O elemento do meio é zero
        // o Os outros elementos seguem a lógica do array com número par de elementos
        if(middlePosition == 0 && (firstPosition == -ultimatePosition && secondPosition == -penultimatePotion))
        return PositiveMessage;
    }

    return NegativeMessage;

}