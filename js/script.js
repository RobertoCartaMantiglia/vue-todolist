// Descrizione:
// Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.



const { createApp } = Vue

createApp({
  data() {
    return {
      newTodoJob : '',
      title: "To do List:",
      jobs : [
        { 
            text: 'Pulisci la casa',
            done: true
         }, 
         { 
            text: 'Fare la spesa',
            done: false
         },
         { 
            text: 'Portare fuori il cane',
            done: true
         },
         { 
            text: 'Andare in palestra',
            done: false
         },
         { 
            text: 'Fare il compito assegnato da Boolean per il pomeriggio',
            done: false
         },
       
      ],
    }
  },
  methods: {
    addNewJob(){
        let newJob = {    //creo un nuovo obj generico con le caratteristiche degli obj presenti nel array
            text: this.newTodoJob,
            done: false,
        }
        this.jobs.push(newJob);  //pusho l'obj nel array
        this.newTodoJob = '';   //svuoto il valore messo nel input
    },

  }
}).mount('#app')