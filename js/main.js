var app = new Vue({
    el: '#app',

    data: {
        product: 'T-Shirt',

        description: 'A T-Shirt with Vue.js Badge',

        image: './images/grey-t-shirt.jpeg',

        imageAlt: 'Grey T-Shirt with Vue.js Badge',

        imageTitle: 'Grey T-Shirt with Vue.js Badge',

        inStock: true,

        onSale: false,

        details: [
            'Cotton, Polyester & Rayon Blend',
            'Round Neck',
            'Short Sleeves'
        ],
    }
});