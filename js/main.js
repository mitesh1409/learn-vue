var app = new Vue({
    el: '#app',

    data: {
        product: 'T-Shirt',

        description: 'A T-Shirt with Vue.js Badge',

        image: {
            src: './images/grey-t-shirt.jpeg',
            alt: 'Grey T-Shirt with Vue.js Badge',
            title: 'Grey T-Shirt with Vue.js Badge'
        },

        inStock: true,

        onSale: false,

        details: [
            'Cotton, Polyester & Rayon Blend',
            'Round Neck',
            'Short Sleeves'
        ],

        variants: [
            {
                id: 1001,
                color: 'Grey',
                image: {
                    src: './images/grey-t-shirt.jpeg',
                    alt: 'Grey T-Shirt with Vue.js Badge',
                    title: 'Grey T-Shirt with Vue.js Badge'
                }
            },
            {
                id: 1002,
                color: 'Black',
                image: {
                    src: './images/black-t-shirt.jpeg',
                    alt: 'Black T-Shirt with Vue.js Badge',
                    title: 'Black T-Shirt with Vue.js Badge'
                }
            }
        ],

        sizes: [
            'S',
            'M',
            'L',
            'XL',
            'XXL'
        ],

        cart: 0
    },

    methods: {
        addToCart() {
            this.cart++;
        },

        removeFromCart() {
            if (this.cart > 0) {
                this.cart--;
            }
        },

        updateVariantImage(variantImage) {
            this.image = variantImage;
        } 
    }
});