// Consegna:
// Scrivere una funzione (e lanciarla :razzo:) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.



function generateArray(min, max, ...myarguments) {
   const include = myarguments.filter((element,index) => {
        
        return index > min && index < max
        
   })
   return include
}

console.log(generateArray(2,6,2,3,4,5,6,7,8,9));