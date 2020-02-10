import api from './api.js'

const { getImages } = api();

class ImagePolyHTML extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['def'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
        if(name=='def') {this.search()}
    }

    async search() {
        const curr_search = await getImages(this.getAttribute('def'));
        this.printResults(curr_search.hits)
    }

    printResults(images) {
        const classes = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four'
        }

        const grid = document.querySelector('.grid');
        grid.innerHTML = '';
        images.forEach(img => grid.innerHTML += 
            `<div class="${classes[(Math.floor(Math.random() * (5-1) + 1))]}"><img src="${img.largeImageURL}"/></div>`)
    }
}

if (!customElements.get('image-element')) {
    customElements.define('image-element', ImagePolyHTML)
}




