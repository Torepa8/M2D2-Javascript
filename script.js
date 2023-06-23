/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i principali datatype in Javascript sono:
    numeri, strighe, boolean, null e undefined
    -number sono i numeri, che siano interi o decimali (-2 -34 9 1 0 1 3 5 6 2.3 etc)
    -string è una sequenza di caratteri alfanumerici ("ciao123" "eccomi sono una stringa")
    -boolean è una valore logico (vero o falso) 
    -null è un valore nullo  let valoreVuoto=null
    -undefined valore non definito let valoreUndefined 
    
    let è una variabile 

    */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 
 Un oggetto è un contenitore di elementi (proprietà) che sono caratterizzati da una coppia chiave-valore
 Un esempio può essere un oggetto che definisce una persona: const studente={nome:Salvatore,cognome:Pau,età:31} */


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
 let n1=12
 let n2=20
 let somma=n1+n2
 oppure let somma=12+20
*/
let somma=12+20
console.log(somma)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x=12 */


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* 
 let name="Salvatore"
*/

let name="Salvatore"


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/*
 let x=12
 let sottraz=4-12
*/
let x=12
let sottraz=4-12
console.log(sottraz)


const io={
    name:"Salvatore",
    surname:"Pau",
    hobby:"calcetto"
}

console.log(io)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 
 let name1="john"
 let name2="John"
 let control=console.log(name1==name2)
 console.log(name1.toLowerCase()==name2.toLowerCase())
*/


let name1="john"
let name2="John"
let control=console.log(name1==name2)
console.log(name1.toLowerCase()==name2.toLowerCase())
