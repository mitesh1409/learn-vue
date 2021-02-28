Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="submitReview">
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>

                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name">
            </p>

            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review"></textarea>
            </p>

            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>

            <p>Would you recommend this product?</p>

            <label>
                Yes
                <input type="radio" name="recommend" value="yes" v-model="recommend">
            </label>

            <label>
                No
                <input type="radio" name="recommend" value="no" v-model="recommend">
            </label>

            <p>
                <input type="submit" value="Submit">
            </p>
        </form>
    `,

    data: function () {
        return {
            name: null,
            review: null,
            rating: null,
            recommend: null,
            errors: []
        }
    },

    methods: {
        submitReview() {
            if (!this.validated()) {
                return;
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend,
            };

            this.$emit('review-submitted', productReview);

            this.name = null;
            this.review = null;
            this.rating = null;
            this.recommend = null;
        },

        validated() {
            // Unset errors.
            this.errors = [];

            var validated = true;

            if (!this.name) {
                this.errors.push('Name is required');
                validated = false;
            }

            if (!this.review) {
                this.errors.push('Review is required');
                validated = false;
            }

            if (!this.rating) {
                this.errors.push('Rating is required');
                validated = false;
            }

            if (!this.recommend) {
                this.errors.push('Recommendation is required');
                validated = false;
            }

            return validated;
        }
    }
});

Vue.component('product-details', {
    template: `
    <ul v-if="details.length">
        <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
    </ul>
    `,

    props: {
        details: {
            type: Array,
            required: true
        }
    },
});


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

                <product-details :details="details"></product-details>

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
            </div>

            <div>
                <h2>Reviews</h2>

                <ul v-if="reviews.length">
                    <li v-for="review in reviews">
                        <p>{{ review.name }}</p>
                        <p>Rating: {{ review.rating }}</p>
                        <p>{{ review.review }}</p>
                    </li>
                </ul>

                <p v-else>There are no reviews yet.</p>
            </div>

            <product-review @review-submitted="addReview"></product-review>
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

            onSaleFont: 'onSaleFont',

            reviews: []
        };
    },

    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },

        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
        },

        updateVariant(variantIndex) {
            this.selectedVariant = variantIndex;
        },

        addReview(review) {
            this.reviews.push(review);
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
        primeMember: true,
        cart: []
    },

    methods: {
        addToCart(id) {
            this.cart.push(id);
        },

        removeFromCart(id) {
            for (var i = (this.cart.length - 1); i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    },

    computed: {
        numberOfProductsInCart() {
            return this.cart.length;
        }
    }
});