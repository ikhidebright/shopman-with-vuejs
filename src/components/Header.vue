<template>
  <div class="head">
    <div>
      <b-navbar toggleable="lg" variant="faded" fixed="top" id="header" type="light
      ">
        <b-navbar-brand style="font-size: 30px" href="/">Shopman</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav></b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-5">
            <b-nav-form @submit="search">
              <input
                size="sm"
                v-model="src"
                id="in"
                class="mr-sm-2"
                placeholder=" Search products, brands, categories"
              />
              <b-button size="sm" class="my-2 my-sm-0" type="submit" variant id="search">SEARCH</b-button>
            </b-nav-form>
            <b-nav-item-dropdown right class="head3" dark v-if="!loggedIn">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
              <i class="fas fa-user mr-2"></i> Login
              </template>
              <b-button size="sm" class="pa-4" type="submit" block variant to="/login" id="login">LOGIN</b-button>
              <p class="text-center mt-3">or</p>
              <b-button size="sm" class="mt-n2" type="submit" to="/register" block variant id="register">REGISTER</b-button>
              <div class="dropdown-divider mt-3"></div>
              <b-link class="dropdown-item acc" to="/dashboard"><i class="fas fa-user mr-3"></i>Account</b-link>
              <b-link class="dropdown-item" to="/orders"><i class="fas fa-box mr-3"></i>Orders</b-link>
              <b-link class="dropdown-item" to="saved"><i class="fas fa-heart mr-3"></i>Saved Items</b-link>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right class="head3" dark v-if="loggedIn">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
              <i class="fas fa-user mr-2"></i> Hi, {{ user.first_name }}
              </template>
              <b-link class="dropdown-item acc" to="/dashboard"><i class="fas fa-user mr-3"></i>Account</b-link>
              <b-link class="dropdown-item" to="/orders"><i class="fas fa-box mr-3"></i>Orders</b-link>
              <b-link class="dropdown-item" to="saved"><i class="fas fa-heart mr-3"></i>Saved Items</b-link>
              <div class="dropdown-divider mt-3"></div>
               <b-button size="sm" class="mt-2" type="submit" to="/register" block variant id="register">LOGOUT</b-button>
              </b-nav-item-dropdown>

            <b-nav-item-dropdown right class="head1">
              <template v-slot:button-content>
              <i class="far fa-question-circle mr-2"></i> Help
              </template>
              <b-dropdown-item href="#">Help Center?</b-dropdown-item>
              <b-dropdown-item href="#">How to shop on Cherry</b-dropdown-item>
              <b-dropdown-item href="#">How to pay on Cherry</b-dropdown-item>
              <b-dropdown-item href="#">How to use a Voucher</b-dropdown-item>
              <b-dropdown-item href="#">Shopma Express</b-dropdown-item>
            </b-nav-item-dropdown>


            <b-navbar-nav class="head2">
              <b-nav-item to="/cart">
                <span id="cart">
                  <i class="fas fa-cart-plus mr-2 ml-3"></i>
                Cart
                 <span class="cartc"> {{ cartcount }} </span>
                </span>
              </b-nav-item>
            </b-navbar-nav>


          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    src: ''
  }),
  methods: {
    search (evt) {
      evt.preventDefault()
      this.$router.push({ path: 'search', query: { q: this.src } })
    }
  },
  computed: {
    cartcount () {
      return this.$store.getters.getCartQty
    },
    user () {
      return this.$store.state.user
    },
    loggedIn () {
      return this.$store.state.loggedIn
    }
  }
};
</script>

<style>

b-link:hover {
  color: #f68B1E !important
}

.cartc {
  background: red; 
  color: #ffffff;
  padding: 0vmin 0.6vmin 0vmin 0.6vmin;
  border-radius: 100%;
  position: relative;
  right: 8.5vmin;
  bottom: 1.5vmin
}

#register {
  background: white; 
  color: #f68B1E;
  width: 90%;
  margin: 0 auto;
  border: none;
  border-radius: 0.5vmin;
  font-weight: bold;
}

#register:hover {
  background: #ffefd8; 
  color: #ff9900;
  border: none;
  border-radius: 0.5vmin;
  font-weight: bold;
}

#register:focus {
 outline: none
}

#login {
  background: #f68B1E; 
  color: #ffffff;
  width: 90%;
  margin: 0 auto;
  border: none;
  border-radius: 0.5vmin;
  padding: 1vmin;
  font-weight: bold;
}

#login:hover {
  border: none;
  border-radius: 0.5vmin;
  padding: 1vmin;
  font-weight: bold;
}

#login:focus {
 outline: none
}



#in {
  width: 500px;
  height: 40px;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
  background-color: white;
  outline: none;
  border: 1px #c7c7cd solid;
  
}
.head {
  margin-bottom: 40px;
}
#search {
  background-color: #f68b1e;
  height: 45px;
  border-radius: 5px;
  color: white;
  padding: 0 1vmin 0 1vmin;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  outline-color: none;
  outline: none;
  border: none;
}

#header {
  background-color: white !important;
}
.head1 {
  color: #282828 !important;
  font-size: 16px !important;
  padding: 8px;
}
.head2 {
  color: black !important;
  font-size: 16px !important;
  padding: 8px;
}

.head3 {
  color: #282828 !important;
  font-size: 16px !important;
  padding: 8px;
}
#focus:focus {
  outline: none !important;
}
</style>
