Vue.component('product', {
    template: `
        <div class="product">
            <div class="product-image">
                <img :src="image.src" :alt="image.alt" :title="image.title">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>

                <p>{{ title }} wishlisted by 1000 customers!</p>

                <p>{{ description }}</p>

                <p v-if="inStock">In Stock</p>
                <p v-else
                    :class="{ strikeThrough: !inStock }">
                    Out of Stock
                </p>

                <div v-if="onSale">
                    <span :class="[highlightSale, onSaleFont]">On Sale!</span>
                </div>

                <ul v-if="details.length">
                    <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
                </ul>

                <div v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-box"
                    :style="{ backgroundColor: variant.color }">
                </div>

                <div>
                    <select name="product-size" id="product-size">
                        <option value="">Select Your Size</option>
                        <option v-for="(size, index) in sizes" :key="index" value="size">{{ size }}</option>
                    </select>
                </div>

                <div>Shipping Charges: {{ shipping }}</div>

                <button @click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">
                    Add to Cart
                </button>

                <button @click="removeFromCart">Remove from Cart</button>

                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>
            </div>
        </div>
    `,

    props: {
        primeMember: {
            type: Boolean,
            required: true
        }
    },

    data: function () {
        return {
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
        };
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
        },

        shipping() {
            if (this.primeMember) {
                return 0;
            }

            return 2.99;
        }
    }
});

var app = new Vue({
    el: '#app',

    data: {
        primeMember: true
    }
});