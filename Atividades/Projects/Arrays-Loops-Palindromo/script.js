function isPalindrome(str){
    let frase = str.toLowerCase().replaceAll(' ', '');
    let fraseInvertida = '';

    for (let i = frase.length -1; i >= 0; i--) {
        fraseInvertida += frase[i];
    }
    if (frase === fraseInvertida) {
        return true;
    }
    return false;
}
function arrayMaxMin(arr){
    let valorMin = arr[0];
    let valorMax = arr[0];
    const newArray = [];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] >= valorMax) {
            valorMax = arr[i];
        }
        if (arr[i] <= valorMin) {
            valorMin = arr[i];
        }
        
    }
    newArray.push(valorMin);
    newArray.push(valorMax);
    return newArray;
}
