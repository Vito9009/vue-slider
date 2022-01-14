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
        ]
    }
})

/*

const mainPicture = document.querySelector(".my_main-picture");    // Selettore contenitore main
const previewImage = document.querySelector(".my_preview-images");// Selettore contenitore preview

// Definizione variabili
let imgShowed = "";
let imgSide = "";
let classActive = 0;

// Cicli for per inserimento immagini e testo in html
for (let i = 0; i < imgArray.length; i++){
    imgShowed += `
    <div class="picture-show" id="img-num-${i}">
        <img id="main-pic" src="${imgArray[i]}" alt="">

        <div class="my_pic-info">
            <h5 id="title-info-pic">${titleArray[i]}</h5>
            <p id="info-pic">${textArray[i]}</p>
        </div>

    </div>
    `;
}

for (let i = 0; i < imgArray.length; i++){
    imgSide += `
    <div class="my_preview-images d-flex flex-column justify-content-center align-items-center col-12" id="img-preview-num-${i}">
            <img class="main-pic h-100" src="${imgArray[i]}" alt="">
    </div>
    `;
}

mainPicture.innerHTML = imgShowed;
previewImage.innerHTML = imgSide;

let mainImgActive = document.getElementById("img-num-" + classActive); //Rendere visibile l'immagine principale
mainImgActive.classList.add("active");
let previewImgActive = document.getElementById("img-preview-num-" + classActive);
previewImgActive.classList.add("my_preview-selected");

//CLICK PULSANTI 

let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");

btnPrev.addEventListener("click", function (){ //btn Prev
    classActive--;
    if (classActive < 0){ //LOOP VERSO L'ALTO
        classActive = 4;
    }

    if (previewImgActive.classList.contains("my_preview-selected")){ // INSERISCE BORDO ALL=IMMAGINE PREVIEW SELEZIONATA
        previewImgActive.classList.toggle("my_preview-selected");
    }

    if (mainImgActive.classList.contains("active")){ // DISPLAYBLOCK SULL'IMMAGINE SELEZIONATA (NELLA SITUAZIONE PRECEDENTE L'IMMAGINE È IN DISPLAY NONE)
        mainImgActive.classList.toggle("active");
    }

    mainImgActive = document.getElementById("img-num-" + classActive); //AGGIUNTA CLASSE ACTIVE
    mainImgActive.classList.add("active");
    
    previewImgActive = document.getElementById("img-preview-num-" + classActive); //AGGIUNTA CLASSE BORDO E OPACITY
    previewImgActive.classList.add("my_preview-selected");
}
);

btnNext.addEventListener("click", function (){ //btn Next
    classActive++;
    if (classActive > 4){  //LOOP VERSO IL BASSO
        classActive = 0;
    }

    if (previewImgActive.classList.contains("my_preview-selected")){ // INSERISCE BORDO ALL=IMMAGINE PREVIEW SELEZIONATA
        previewImgActive.classList.toggle("my_preview-selected");
    }

    if (mainImgActive.classList.contains("active")){ // DISPLAYBLOCK SULL'IMMAGINE SELEZIONATA (NELLA SITUAZIONE PRECEDENTE L'IMMAGINE È IN DISPLAY NONE)
        mainImgActive.classList.toggle("active");
    }

    mainImgActive = document.getElementById("img-num-" + classActive); //AGGIUNTA CLASSE ACTIVE
    mainImgActive.classList.add("active");
    
    previewImgActive = document.getElementById("img-preview-num-" + classActive); //AGGIUNTA CLASSE BORDO E OPACITY
    previewImgActive.classList.add("my_preview-selected");
}
);

// PROBLEMA CON IMMAGINI LATERALI (ALTEZZA ESTREMAMENTE BASSA)

*/