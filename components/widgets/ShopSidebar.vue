<template>
    <div class="col-lg-3">
        <div class="shop_sidebar_wrapper">
            <div class="shop_Search">
                <form @submit.prevent="randomProduct">
                    <input @keyup="randomProduct" type="text" class="form-control" placeholder="Search...">
                    <button @click="randomProduct"><img :src="require('@/assets/img/svg/search.svg')" alt="img"></button>
                </form>
            </div>
            <div class="shop_sidebar_boxed">
                <h4>Product Categories</h4>
                <form v-for="categorie in categories">
                    <label class="custom_boxed">{{ categorie.name }}
                        <input type="radio" name="radio" checked @change="randomProduct">
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>

            <div class="shop_sidebar_boxed">
                <h4>Price</h4>
                <div class="price_filter">
                    <vue-slider v-model="value" :min="0" :max="5000" ref="slider"
                        @change="randomProduct($refs.slider.getValue())">
                    </vue-slider>
                    <div class="price-slider-amount mt-3 text-capitalize">Price: ${{ value[0] }} - ${{ value[1] }}</div>
                </div>
            </div>

           
            
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'


export default {
    name: 'ShopSidebar',

    async mounted() {
        try {
            const response = await this.$axios.get('/categories/'); // Assurez-vous d'utiliser `this.$axios` ici
            // Traitement des données
            this.categories = response.data
        } catch (error) {
            //console.error(error);
        }
    },
    data() {
        return {
            // For Range Slider Value 
            value: [50, 1000],
            categories: []
        }
    },
    computed: {
        ...mapState({
            shuffleproducts: state => state.products.shuffleproducts,
        }),

    },
    methods: {
        async getData() {
            try {
                const response = await this.$axios.get('/categories/'); // Assurez-vous d'utiliser `this.$axios` ici
                // Traitement des données
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async getImageUrl(path) {
            return require('@/assets/img/product-image/' + path);
        },
        // Discount Price 
        discountedPrice(product) {
            const price = product.price - (product.price * product.discount / 100)
            return price
        },
        // For Shop Left Shorting and Up Shorting 
        randomProduct() {
            let array = this.shuffleproducts;
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            this.$store.dispatch('products/shuffleProduct', array.slice(0, 30))

        },
        getallProduct() {
            this.$store.dispatch('products/getallProduct')
        }
    }
}
</script>