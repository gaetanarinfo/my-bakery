import { createStore } from 'vuex'

import axios from 'axios'
import { SessionStorage } from 'quasar';

export default createStore({
  state: {
    bakery: [],
    bakeryComments: [],
    bakerys: [],
    bakerysAll: [],
    bakerysAllCount: [],
    blogs: [],
    blogsAll: [],
    blogsAllCount: 0,
    ratings: [],
    villesFrance: [],
    searchAll: [],
    bakerysFavorites: [],
    bakeryHours: [],
    blog: [],
    blog_tags: [],
    activateAccount: [],
    markersBakerys: [],
    products_cart: [],
    paiement_status: [],
    stateUser: {
      user: null,
      token: null,
    },
    products: [],
  },
  getters: {
    getBakery: (state) => state.bakery,
    getBakeryComments: (state) => state.bakeryComments,
    getBakeryHours: (state) => state.bakeryHours,
    getBakerys: (state) => state.bakerys,
    getBakerysAll: (state) => state.bakerysAll,
    getBakerysAllCount: (state) => state.bakerysAllCount,
    getBlog: (state) => state.blog,
    getBlogTags: (state) => state.blog_tags,
    getBlogs: (state) => state.blogs,
    getBlogsAll: (state) => state.blogsAll,
    getBlogsAllCount: (state) => state.blogsAllCount,
    getRatings: (state) => state.ratings,
    getVillesFrance: (state) => state.villesFrance,
    getSearchAll: (state) => state.searchAll,
    getBakerysFavorites: (state) => state.bakerysFavorites,
    getActivateAccount: (state) => state.activateAccount,
    getToken: (state) => state.stateUser.token,
    getMarkerBakerys: (state) => state.markersBakerys,
    getProducts: (state) => state.products,
    getProductsCart: (state) => state.products_cart,
    getPaiementStatus: (state) => state.paiement_status,
    isLoggedIn: (state) => {

      if (sessionStorage.getItem('token') === null) {
        return !!state.stateUser.token;
      } else {
        return sessionStorage.getItem('token');
      }
    },
  },
  actions: {

    // Liste des boulangeries en France
    async fetchBakerys ({ commit, state }, data) {
      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/bakerys/' + data.limite)

        this.bakerys = getUrl.data.bakerys
        commit('SET_BAKERYS', getUrl.data.bakerys)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBakerysAll ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/bakerys-all')
        this.bakerysAll = getUrl.data.bakerysAll
        commit('SET_BAKERYS_ALL', getUrl.data.bakerysAll)

        this.bakerysAll = getUrl.data.bakerysAllCount
        commit('SET_BAKERYS_ALL_COUNT', getUrl.data.bakerysAllCount)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBakery ({ commit, state }, data) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/bakery/' + data.url)

        if (getUrl.data.bakery !== undefined) {

          this.bakery = getUrl.data.bakery

          commit('SET_BAKERY', getUrl.data.bakery)

          this.bakeryComments = getUrl.data.bakeryComments

          commit('SET_BAKERY_COMMENTS', getUrl.data.bakeryComments)

          this.bakeryHours = getUrl.data.bakeryHours

          commit('SET_BAKERY_HOURS', getUrl.data.bakeryHours)

        } else {
          this.$router.push('/bakerys')
        }
      } catch (error) {
        console.log(error)
      }

    },
    async fetchBakeryUpdate ({ commit, state }, data) {
      try {
        await axios.get(process.env.WEBSITE + '/bakery-update/' + data.url)
      } catch (error) {
        console.log(error)
      }

    },

    // Liste des articles sur le blog
    async fetchBlogs ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/blogs')

        this.blogs = getUrl.data.blogs
        commit('SET_BLOGS', getUrl.data.blogs)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBlogsAll ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/blogs-all')

        this.blogsAll = getUrl.data.blogsAll
        commit('SET_BLOGS_ALL', getUrl.data.blogsAll)

        this.blogsAll = getUrl.data.blogsAllCount
        commit('SET_BLOGS_ALL_COUNT', getUrl.data.blogsAllCount)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchSearchAll ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/search')

        this.searchAll = getUrl.data.searchAll
        commit('SET_SEARCH_ALL', getUrl.data.searchAll)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBlog ({ commit, state }, data) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/blogs/' + data.url)

        if (getUrl.data.blog !== undefined) {

          localStorage.removeItem('article-title')
          localStorage.removeItem('article-description')
          localStorage.removeItem('article-url')
          localStorage.removeItem('article-image')

          localStorage.setItem('article-title', getUrl.data.blog.title)
          localStorage.setItem('article-description', getUrl.data.blog.small_content)
          localStorage.setItem('article-url', 'https://my-bakery.fr/#/blogs/' + getUrl.data.blog.url)
          localStorage.setItem('article-image', 'https://my-bakery.fr/blogs/' + getUrl.data.blog.image)

          this.blog = getUrl.data.blog
          this.blog_tags = getUrl.data.tags

          commit('SET_BLOG', getUrl.data.blog)
          commit('SET_BLOG_TAGS', getUrl.data.tags)

        } else {
          this.$router.push('/blogs')
        }
      } catch (error) {
        console.log(error)
      }
    },

    // Vote du site internet
    async fetchRatings ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/ratings')

        this.ratings = getUrl.data.ratings
        commit('SET_RATINGS', getUrl.data.ratings)
      } catch (error) {
        console.log(error)
      }
    },

    // Vote du site internet
    async fetchVillesFrance ({ commit }) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/villes-france-home')

        this.villesFrance = getUrl.data.villesFrance
        commit('SET_VILLES_FRANCE', getUrl.data.villesFrance)
      } catch (error) {
        console.log(error)
      }
    },

    // Listes des boulangeries en favoris
    async fetchBakerysFavorites ({ commit, state }, data) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/favorites/' + data.favorites)

        this.favorites = getUrl.data.favorites
        commit('SET_FAVORITES', getUrl.data.favorites)
      } catch (error) {
        console.log(error)
      }
    },

    // My account
    async fetchActivateAccount ({ commit, state }, data) {
      try {
        const getUrl = await axios.get(process.env.WEBSITE + '/activate-account/' + data.token)

        if (getUrl.data.activateAccount !== undefined) {

          this.activateAccount = getUrl.data

          commit('SET_ACTIVATE_ACCOUNT', getUrl.data)

        } else {
          this.$router.push('/my-account')
        }
      } catch (error) {
        console.log(error)
      }
    },

    // Verification Account
    async fetchVerificationAccount () {
      try {

        if (sessionStorage.getItem('token') === null) {
          this.$router.push('/my-account')
        } else {

          const getUrl = await axios.get(process.env.WEBSITE + '/authenticate/' + sessionStorage.getItem('token'))

          if (getUrl.data.user !== undefined) {
            this.state.stateUser.user = getUrl.data.user
            SessionStorage.setItem('email', getUrl.data.user.email)
          } else {
            this.$router.push('/my-account')
          }

        }
      } catch (error) {
        console.log(error)
      }
    },

    // Verification Token Forgot Password
    async fetchVerificationTokenForgot ({ commit, state }, data) {
      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/forgot-verif-password-token/' + data.token)

        if (getUrl.data.success === false) {
          this.$router.push('/my-account')
        }

      } catch (error) {
        console.log(error)
      }
    },

    async fetchMarkersBakerys ({ commit, state }, data) {
      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/bakerys-markers/' + data.region)

        if (getUrl.data.markers.length >= 1) {

          this.markersBakerys = getUrl.data

          commit('SET_MARKER_BAKERY', getUrl.data)

        } else {
          this.$router.push('/')
        }

      } catch (error) {
        console.log(error)
      }
    },

    async fetchProducts ({ commit, state }, data) {
      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/products')

        if (getUrl.data.products.length >= 1) {

          this.products = getUrl.data.products

          commit('SET_PRODUCTS', getUrl.data.products)

        } else {
          this.$router.push('/')
        }

      } catch (error) {
        console.log(error)
      }
    },

    async fetchProductsCart ({ commit, state }, data) {

      try {

        const getUrl = await axios.get(process.env.WEBSITE + '/products-cart/' + data.cart)

        if (getUrl.data.products_cart.length >= 1) {

          this.products_cart = getUrl.data.products_cart

          commit('SET_PRODUCTS_CART', getUrl.data.products_cart)

        }

      } catch (error) {
        console.log(error)
      }

    },

    async setInsertCommandeClient ({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/order-insert', { 'user_id': data.user_id, 'product_id': data.product_id, 'status': data.status, 'qte': data.qte, 'total_ht': data.total_ht, 'total_ttc': data.total_ttc })
        .then((res) => {
          if (res.data.succes === true) {
            location.href = process.env.WEBSITE + '/paypal/create/' + res.data.order_id
          }
        })
        .catch((error) => {
          console.log(error)
        })

    },

    setOrderValidate ({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/order-validate', { 'paymentId': data.paymentId, 'status': data.status })
        .then((res) => {
          console.log(res.data);

          if (res.data.succes === true) {
            this.paiement_status = res.data
            commit('SET_PAIEMENT_STATUS', res.data)
          } else {
            this.$router.push('/')
          }

        })
        .catch((error) => {
          console.log(error)
        })

    },

    setOrderCancel({ commit, state }, data) {

      axios.post(process.env.WEBSITE + '/order-cancel', { 'paymentId': data.paymentId, 'status': data.status })
        .then((res) => {
          console.log(res.data);

          if (res.data.succes === true) {
            this.paiement_status = res.data
            commit('SET_PAIEMENT_STATUS', res.data)
          } else {
            this.$router.push('/')
          }

        })
        .catch((error) => {
          console.log(error)
        })

    }

  },
  mutations: {

    SET_PAIEMENT_STATUS (state, paiement_status) {
      state.paiement_status = paiement_status
    },

    SET_PRODUCTS_CART (state, products_cart) {
      state.products_cart = products_cart
    },

    SET_PRODUCTS (state, products) {
      state.products = products
    },

    SET_MARKER_BAKERY (state, markersBakerys) {
      state.markersBakerys = markersBakerys
    },

    SET_BAKERYS (state, bakerys) {
      state.bakerys = bakerys
    },

    SET_BAKERY (state, bakery) {
      state.bakery = bakery
    },

    SET_BAKERY_COMMENTS (state, bakeryComments) {
      state.bakeryComments = bakeryComments
    },

    SET_BAKERYS_ALL (state, bakerysAll) {
      state.bakerysAll = bakerysAll
    },

    SET_BAKERYS_ALL_COUNT (state, bakerysAllCount) {
      state.bakerysAllCount = bakerysAllCount
    },

    SET_BLOGS (state, blogs) {
      state.blogs = blogs
    },

    SET_BLOG (state, blog) {
      state.blog = blog
    },

    SET_BLOG_TAGS (state, blog_tags) {
      state.blog_tags = blog_tags
    },

    SET_BLOGS_ALL (state, blogsAll) {
      state.blogsAll = blogsAll
    },

    SET_BLOGS_ALL_COUNT (state, blogsAllCount) {
      state.blogsAllCount = blogsAllCount
    },

    SET_RATINGS (state, ratings) {
      state.ratings = ratings
    },

    SET_VILLES_FRANCE (state, villesFrance) {
      state.villesFrance = villesFrance
    },

    SET_SEARCH_ALL (state, searchAll) {
      state.searchAll = searchAll
    },

    SET_FAVORITES (state, bakerysFavorites) {
      state.bakerysFavorites = bakerysFavorites
    },

    SET_BAKERY (state, bakery) {
      state.bakery = bakery
    },

    SET_BAKERY_HOURS (state, bakeryHours) {
      state.bakeryHours = bakeryHours
    },

    SET_ACTIVATE_ACCOUNT (state, activateAccount) {
      state.activateAccount = activateAccount
    }

  }
})
