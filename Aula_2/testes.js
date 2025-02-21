/* Exercise 7: ======================================================
Escreva uma função que receba uma string como argumento e retorne a string invertida.
*/
   function reverseString(str) {
   let strReverse = "";
   for (let i = str.length-1; i >= 0; i--) {
     strReverse += str[i];
   }
    
   // strReverse = str.split("").reverse().join("");

    return strReverse;
}

    console.log(reverseString("Fabio")); 
