

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(imagem, titulo, link) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.link = link;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            this._sequence = 0;
            this._size = arr.length;
            this._elements = arr;
            this._carouselElement = document.getElementById("carousel");
            this._titleElement = document.getElementById("carousel-title");

            arr.forEach((item, index) => {
                const imgElement = document.createElement("img");
                imgElement.src = item.imagem;
                imgElement.alt = item.titulo;
                imgElement.style.display = "none";
                
                if (index === 0) imgElement.classList.add("active");
                this._carouselElement.appendChild(imgElement);
            });

            this._titleElement.innerHTML = `<a href="${arr[0].link}">${arr[0].titulo}</a>`;
            this._interval = setInterval(() => this.Next(), 2000);
        } else {
            throw "Method Start needs an Array Variable.";
        }
    }

    static Next() {
        const images = this._carouselElement.querySelectorAll("img");
        images[this._sequence].classList.remove("active");
        this._sequence = (this._sequence + 1) % this._size;
        images[this._sequence].classList.add("active");
        this._titleElement.innerHTML = `<a href="${this._elements[this._sequence].link}">${this._elements[this._sequence].titulo}</a>`;
    }
}

