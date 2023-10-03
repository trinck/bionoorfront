<template>
    <div>
        <!-- footer Area -->
        <footer id="footer_one">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="footer_left_side">
                            <nuxt-link to="/"><img :src="require('@/assets/img/logobionoor_noir.jpg')"
                                    alt="logo" /></nuxt-link>
                            <div class="footer_left_side_icon">
                                <ul>
                                    <li>
                                        <a href="#!"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fab fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="#!"><i class="fab fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div class="footer_one_widget">

                            <h3 className="titre_footer">ADRESSE DU SIEGE :</h3>
                            <p class="text-black">285 Avenue Brahim Roudani <br />
                                Etage 1 N°2 Maarif,Casablanca</p> <br />
                            <h3 className="titre_footer">ADRESSE DU MAGASIN :</h3>
                            <p class="text-black">Rue 9 N°10 Bd 6 Novembre Idriss <br />
                                El Harti SEBATA Casablanca</p> <br />

                        </div>
                    </div>


                    <div class="col-lg-2 col-md-6 col-sm-12 col-12">
                        <div class="footer_one_widget">
                            <h3>CONDITIONS GENERALES DE VENTE</h3>
                            <ul>
                                <li><nuxt-link to="/cart/">Mentions Légales</nuxt-link></li>
                                <li><nuxt-link to="/cart/cart-2">Conditions d'utilisation </nuxt-link></li>
                                <li><nuxt-link to="/cart/empty-cart">Politique de remboursement</nuxt-link></li>
                                <li><nuxt-link to="/my-account/wishlist">Wishlist</nuxt-link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div class="footer_one_widget">
                            <h3>LIENS RAPIDES:</h3>
                            <ul>
                                <li><nuxt-link to="/shop/shop-4">Boutique</nuxt-link></li>
                                <li><nuxt-link to="/#">Professionnel</nuxt-link></li>
                                <li><nuxt-link to="/#">Export</nuxt-link></li>
                                <li><nuxt-link to="/faq">A Propos</nuxt-link></li>
                                <li><nuxt-link to="/contact-us">Contact</nuxt-link></li>
                                <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

        <!-- CopyRight Area -->
        <section id="copyright_one">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="copyright_left">
                            <h6>© CopyRight by A2R <span>2020 TERMES et CONDITION</span></h6>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="copyright_right">
                            <img :src="require('@/assets/img/common/payment.png')" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
    data() {
        return {

            title: 'Contact Us',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Contact'
                }
            ],
            // Form Validation
            user: {
                email: "",
            },
            submitted: false
        }
    },

    validations: {
        user: {
            email: { required, email }
        }
    },
    methods: {
        handleSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            alert("Thanks for Subscribe newsletter!");
        }
    },
}
</script>