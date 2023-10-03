import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6bac303e = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _22e37b05 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _87ef75ce = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _de2b024a = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _017e0620 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _761a8abf = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _56a6655c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _ba03a2a2 = () => interopDefault(import('..\\pages\\my-account\\index.vue' /* webpackChunkName: "pages/my-account/index" */))
const _310de57e = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _110b1b6c = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _7161fd45 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _6046a668 = () => interopDefault(import('..\\pages\\vendor-dashboard\\index.vue' /* webpackChunkName: "pages/vendor-dashboard/index" */))
const _4f0aff10 = () => interopDefault(import('..\\pages\\blog\\blog-2.vue' /* webpackChunkName: "pages/blog/blog-2" */))
const _4f191691 = () => interopDefault(import('..\\pages\\blog\\blog-3.vue' /* webpackChunkName: "pages/blog/blog-3" */))
const _303f0802 = () => interopDefault(import('..\\pages\\blog\\blog-single-2.vue' /* webpackChunkName: "pages/blog/blog-single-2" */))
const _d9c59ae8 = () => interopDefault(import('..\\pages\\cart\\cart-2.vue' /* webpackChunkName: "pages/cart/cart-2" */))
const _d9a96be6 = () => interopDefault(import('..\\pages\\cart\\cart-3.vue' /* webpackChunkName: "pages/cart/cart-3" */))
const _d98d3ce4 = () => interopDefault(import('..\\pages\\cart\\cart-4.vue' /* webpackChunkName: "pages/cart/cart-4" */))
const _2e640467 = () => interopDefault(import('..\\pages\\cart\\empty-cart.vue' /* webpackChunkName: "pages/cart/empty-cart" */))
const _587ee3a2 = () => interopDefault(import('..\\pages\\contact-us\\contact-us-2.vue' /* webpackChunkName: "pages/contact-us/contact-us-2" */))
const _28d5ae3f = () => interopDefault(import('..\\pages\\my-account\\account-details.vue' /* webpackChunkName: "pages/my-account/account-details" */))
const _23358306 = () => interopDefault(import('..\\pages\\my-account\\account-info-edit.vue' /* webpackChunkName: "pages/my-account/account-info-edit" */))
const _7203eeff = () => interopDefault(import('..\\pages\\my-account\\addresses.vue' /* webpackChunkName: "pages/my-account/addresses" */))
const _7509dddd = () => interopDefault(import('..\\pages\\my-account\\checkout-1.vue' /* webpackChunkName: "pages/my-account/checkout-1" */))
const _7517f55e = () => interopDefault(import('..\\pages\\my-account\\checkout-2.vue' /* webpackChunkName: "pages/my-account/checkout-2" */))
const _9b0bf7fc = () => interopDefault(import('..\\pages\\my-account\\compare.vue' /* webpackChunkName: "pages/my-account/compare" */))
const _fb102070 = () => interopDefault(import('..\\pages\\my-account\\downloads.vue' /* webpackChunkName: "pages/my-account/downloads" */))
const _45e9fb49 = () => interopDefault(import('..\\pages\\my-account\\order-tracking.vue' /* webpackChunkName: "pages/my-account/order-tracking" */))
const _7dfed150 = () => interopDefault(import('..\\pages\\my-account\\orders.vue' /* webpackChunkName: "pages/my-account/orders" */))
const _f1da6110 = () => interopDefault(import('..\\pages\\my-account\\wishlist.vue' /* webpackChunkName: "pages/my-account/wishlist" */))
const _148dc0a3 = () => interopDefault(import('..\\pages\\product\\product-single-2.vue' /* webpackChunkName: "pages/product/product-single-2" */))
const _149bd824 = () => interopDefault(import('..\\pages\\product\\product-single-3.vue' /* webpackChunkName: "pages/product/product-single-3" */))
const _08cf28b8 = () => interopDefault(import('..\\pages\\shop\\shop-2.vue' /* webpackChunkName: "pages/shop/shop-2" */))
const _08dd4039 = () => interopDefault(import('..\\pages\\shop\\shop-3.vue' /* webpackChunkName: "pages/shop/shop-3" */))
const _08eb57ba = () => interopDefault(import('..\\pages\\shop\\shop-4.vue' /* webpackChunkName: "pages/shop/shop-4" */))
const _08f96f3b = () => interopDefault(import('..\\pages\\shop\\shop-5.vue' /* webpackChunkName: "pages/shop/shop-5" */))
const _4817c9bd = () => interopDefault(import('..\\pages\\vendor-dashboard\\add-product.vue' /* webpackChunkName: "pages/vendor-dashboard/add-product" */))
const _2eb12570 = () => interopDefault(import('..\\pages\\vendor-dashboard\\order.vue' /* webpackChunkName: "pages/vendor-dashboard/order" */))
const _3d462c2e = () => interopDefault(import('..\\pages\\vendor-dashboard\\product.vue' /* webpackChunkName: "pages/vendor-dashboard/product" */))
const _44dcb9a3 = () => interopDefault(import('..\\pages\\vendor-dashboard\\profile.vue' /* webpackChunkName: "pages/vendor-dashboard/profile" */))
const _32fc92ca = () => interopDefault(import('..\\pages\\vendor-dashboard\\setting.vue' /* webpackChunkName: "pages/vendor-dashboard/setting" */))
const _0b052a3b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _8b5cb85e = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _874e725c = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _6bac303e,
    name: "404"
  }, {
    path: "/about-us",
    component: _22e37b05,
    name: "about-us"
  }, {
    path: "/blog",
    component: _87ef75ce,
    name: "blog"
  }, {
    path: "/cart",
    component: _de2b024a,
    name: "cart"
  }, {
    path: "/contact-us",
    component: _017e0620,
    name: "contact-us"
  }, {
    path: "/faq",
    component: _761a8abf,
    name: "faq"
  }, {
    path: "/login",
    component: _56a6655c,
    name: "login"
  }, {
    path: "/my-account",
    component: _ba03a2a2,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _310de57e,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _110b1b6c,
    name: "register"
  }, {
    path: "/shop",
    component: _7161fd45,
    name: "shop"
  }, {
    path: "/vendor-dashboard",
    component: _6046a668,
    name: "vendor-dashboard"
  }, {
    path: "/blog/blog-2",
    component: _4f0aff10,
    name: "blog-blog-2"
  }, {
    path: "/blog/blog-3",
    component: _4f191691,
    name: "blog-blog-3"
  }, {
    path: "/blog/blog-single-2",
    component: _303f0802,
    name: "blog-blog-single-2"
  }, {
    path: "/cart/cart-2",
    component: _d9c59ae8,
    name: "cart-cart-2"
  }, {
    path: "/cart/cart-3",
    component: _d9a96be6,
    name: "cart-cart-3"
  }, {
    path: "/cart/cart-4",
    component: _d98d3ce4,
    name: "cart-cart-4"
  }, {
    path: "/cart/empty-cart",
    component: _2e640467,
    name: "cart-empty-cart"
  }, {
    path: "/contact-us/contact-us-2",
    component: _587ee3a2,
    name: "contact-us-contact-us-2"
  }, {
    path: "/my-account/account-details",
    component: _28d5ae3f,
    name: "my-account-account-details"
  }, {
    path: "/my-account/account-info-edit",
    component: _23358306,
    name: "my-account-account-info-edit"
  }, {
    path: "/my-account/addresses",
    component: _7203eeff,
    name: "my-account-addresses"
  }, {
    path: "/my-account/checkout-1",
    component: _7509dddd,
    name: "my-account-checkout-1"
  }, {
    path: "/my-account/checkout-2",
    component: _7517f55e,
    name: "my-account-checkout-2"
  }, {
    path: "/my-account/compare",
    component: _9b0bf7fc,
    name: "my-account-compare"
  }, {
    path: "/my-account/downloads",
    component: _fb102070,
    name: "my-account-downloads"
  }, {
    path: "/my-account/order-tracking",
    component: _45e9fb49,
    name: "my-account-order-tracking"
  }, {
    path: "/my-account/orders",
    component: _7dfed150,
    name: "my-account-orders"
  }, {
    path: "/my-account/wishlist",
    component: _f1da6110,
    name: "my-account-wishlist"
  }, {
    path: "/product/product-single-2",
    component: _148dc0a3,
    name: "product-product-single-2"
  }, {
    path: "/product/product-single-3",
    component: _149bd824,
    name: "product-product-single-3"
  }, {
    path: "/shop/shop-2",
    component: _08cf28b8,
    name: "shop-shop-2"
  }, {
    path: "/shop/shop-3",
    component: _08dd4039,
    name: "shop-shop-3"
  }, {
    path: "/shop/shop-4",
    component: _08eb57ba,
    name: "shop-shop-4"
  }, {
    path: "/shop/shop-5",
    component: _08f96f3b,
    name: "shop-shop-5"
  }, {
    path: "/vendor-dashboard/add-product",
    component: _4817c9bd,
    name: "vendor-dashboard-add-product"
  }, {
    path: "/vendor-dashboard/order",
    component: _2eb12570,
    name: "vendor-dashboard-order"
  }, {
    path: "/vendor-dashboard/product",
    component: _3d462c2e,
    name: "vendor-dashboard-product"
  }, {
    path: "/vendor-dashboard/profile",
    component: _44dcb9a3,
    name: "vendor-dashboard-profile"
  }, {
    path: "/vendor-dashboard/setting",
    component: _32fc92ca,
    name: "vendor-dashboard-setting"
  }, {
    path: "/",
    component: _0b052a3b,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _8b5cb85e,
    name: "blog-slug"
  }, {
    path: "/product/:id?",
    component: _874e725c,
    name: "product-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
