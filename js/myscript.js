/*
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d’oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo 
  recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe ;)
- oltre a Vue, ora abbiamo diversi strumenti in più nelle nostre tasche, che possono tornarci utili per svolgere 
  l’esercizio in una versione più evoluta ed efficace, soprattutto per quando riguarda la struttura dei dati. Forse 
  questa volta possiamo fare qualcosa di meglio di 3 array separati... sì, ma cosa? 
*/

let app = new Vue({
    el: '#box',
    data:{
        startingposition: 0,
        playandstop: "",
        infoimg: [
            {
                image: 'img/01.jpg',
                country: 'Svezia',
                infotext: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/02.jpg',
                country: 'Svizzera',
                infotext: 'Lorem ipsum.'
            },
            {
                image: 'img/03.jpg',
                country: 'Gran Bretagna',
                infotext: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/04.jpg',
                country: 'Germania',
                infotext: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            },
            {
                image: 'img/05.jpg',
                country: 'Paradise',
                infotext: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            }
        ],
    },
    
    methods:{
        prev: function(){                                   // Indietro cliccando sulla freccia superiore
            if (this.startingposition == 0){
                this.startingposition = this.infoimg.length - 1;
            }else{
                this.startingposition--;
            }
        },

        next: function(){                                   // Avanti cliccando sulla freccia inferiore
            if (this.startingposition == this.infoimg.length - 1){
                this.startingposition = 0;
            }else{
                this.startingposition++;
            }
        },

        corrente: function(index){                  // Aggiunta classe my_preview-selected quando l'immagine viene selezionata
            if(index == this.startingposition){
                return "my_preview-selected";
            }else{
                return "";
            }            
        },
        
        autoplay: function(){                           // Le immagini scorrono da sole
            this.playandstop = setInterval(() => {      // (fino a quando non si passa il mouse sullo slider laterale)
                this.startingposition++;

                if (this.startingposition == this.infoimg.length){
                    this.startingposition = 0;
                }
            }, 3000);
        },

        stopautoplay: function() {                   // Le immagini smettono di scorrono da sole 
            clearInterval(this.playandstop);        // (quando si passa il mouse sullo slider laterale)
          }
    },
        
    beforeMount: function() {           // Metodo Lifecycle Hooks trovato online per il funzionamento autoplay,
        this.autoplay();                // ma da rivedere (beforeMount e mounted, beforeCreate e created, 
    }                                   // beforeUpdate e updated, beforeDestroy e destroyed) 
});