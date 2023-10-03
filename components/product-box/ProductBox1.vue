<template>
  <div>
    <div class="product_wrappers_one">
      <div class="thumb">
        <nuxt-link :to="{ path: '/products/id/' + product.id }" class="image">
          <img
            :src="getImageUrl( product.images[0].url)"
            :alt="product.title"
          />
          
        </nuxt-link>
        
        <div class="actions">
          <button
            @click="addToWishlist(product)"
            class="action wishlist"
            title="Wishlist"
          >
            <i class="far fa-heart"></i>
          </button>
          <button
            id="toggle-btn"
            @click="toggleModal"
            class="action quickview"
            title="Quick view"
          >
            <i class="fas fa-expand"></i>
          </button>
          
        </div>
        <button
          @click="addToCart(products)"
          class="add-to-cart offcanvas-toggle"
          title="Add To Cart"
        >
          Add To Cart
        </button>
      </div>

      <div class="content">
        <h5 class="title text-capitalize">
          <nuxt-link :to="{ path: '/products/' + product.id }">{{
            product.name
          }}</nuxt-link>
        </h5>
        <span class="price">
          <span class="new" v-if="product.promotion"
            >${{ product.promotion }}</span
          >
          <span class="new" v-else>${{ product.price }}</span>
        </span>
      </div>

      <!-- Modal Area Start-->
      <div>
        <b-modal
          ref="product-details-popup"
          centered
          hide-footer
          title="Using Component Methods"
          class="product_one_modal_top"
          id="product_slider_one"
        >
          <template #modal-header="{ close }">
            <button
              type="button"
              class="close close_modal_icon"
              @click="close()"
            >
              <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
          </template>

          <div>
            <div class="row">
              <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                <div class="products_modal_sliders">
                  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                    <div class="swiper-wrapper">
                      <div
                        class="swiper-slide"
                        v-for="(imag, index) in product.images"
                        :key="index"
                      >
                        <img
                          src=""
                          :id="imag.id"
                          class="img-fluid bg-img"
                          alt="imag.alt"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
      <!-- Modal Area End-->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductBox1",
  props: ["product", "index"],

  data() {
    return {
      // Product Quanity Increment/ Decrement Data
      quantity: 1,

      imageSrc: "",
      cartProduct: {},
      compareProduct: {},
      dismissSecs: 3,
      dismissCountDown: 0,

      quantity: 1,

      activeColor: "",
      selectedSize: "",
      qty: "",
      size: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,

        products: [],
      },
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),

    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
  /* // For displaying default color and size on pageload
    this.uniqColor = this.product.variants[0].color;
    this.sizeVariant(this.product.variants[0].image_id);
    // Active default color
    this.activeColor = this.uniqColor;
    this.changeSizeVariant(this.product.variants[0].size);
    */
  },

  methods: {
    // Product details Popup id Methods
    toggleModal() {
      this.$refs["product-details-popup"].toggle("#toggle-btn");
    },

    async getData() {
            try {
                const response = await this.$axios.get('/products/'); // Assurez-vous d'utiliser `this.$axios` ici
                // Traitement des données
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },

    // Image Url
   getImageUrl(url) {
      return 'http://localhost:8083/'+ url;
},

    // Product Add To Cart realted methods
    addToCart: function (product) {
      console.log(product)
      this.dismissCountDown = this.dismissSecs;
      this.cartProduct = product;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("cart/addToCart", product);
    },

    // After Add to cart Alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
      this.$emit("alertseconds", this.dismissCountDown);
    },

    // Discount Price
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("products/addToWishlist", product);
    },
    addToCompare: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("products/addToCompare", product);
    },

    // Display Unique color
    Color(variants) {
      const uniqColor = [];
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color);
        }
      }
      return uniqColor;
    },
    // Change Size Variant
    changeSizeVariant(variant) {
      this.selectedSize = variant;
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false);
    },
    sizeVariant(id, slideId, color) {
      // this.swiper.slideTo(slideId, 1000, false)
      this.size = [];
      this.activeColor = color;
      this.product.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size);
        }
      });
    },
  },
};
</script>