var app = new Vue({
    el: '#app',

    data: {
        product: 'T-Shirt',

        brand: 'Vue.js',

        description: 'A T-Shirt with Vue.js Badge',

        onSale: true,

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
                },
                quantity: 99
            },
            {
                id: 1002,
                color: 'Black',
                image: {
                    src: './images/black-t-shirt.jpeg',
                    alt: 'Black T-Shirt with Vue.js Badge',
                    title: 'Black T-Shirt with Vue.js Badge'
                },
                quantity: 0
            }
        ],

        selectedVariant: 0,

        sizes: [
            'S',
            'M',
            'L',
            'XL',
            'XXL'
        ],

        cart: 0,

        highlightSale: 'highlightSale',

        onSaleFont: 'onSaleFont'
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

        updateVariant(variantIndex) {
            this.selectedVariant = variantIndex;
        } 
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },

        image() {
            return this.variants[this.selectedVariant].image;
        },

        inStock() {
            return this.variants[this.selectedVariant].quantity;
        }
    }
});