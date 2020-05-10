import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    loggedIn: false,
    url: 'http://localhost:6060',
    cartQty: null,
    successAlertMessage: null,
    showSuccessAlert: false,
    errorAlertMessage: null,
    showErrrorAlert: false,
    categories: [
      'Airtime & Bills',
      'Phones & Tablets',
      'Computing',
      'Electronics',
      'Home & Office',
      'Fashion',
      'Health & Beauty',
      'Gaming',
      'Grocery',
      'Food',
      'Specials'
    ],
    products : [
      {
        id: 1,
        name: 'Cooking Oil',
        price: 3000,
        moreimg: ['https://www.industrynewsengine.com/wp-content/uploads/2019/09/Cooking-Oil-1.jpg',
                    'https://floridaoliveoil.com/wp-content/uploads/2015/12/olive_oil_spanish.jpg'
                  ],
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        img: 'https://www.industrynewsengine.com/wp-content/uploads/2019/09/Cooking-Oil-1.jpg'
      },
       {
        id: 4,
        name: 'Dell Notebook pro',
        price: 200000,
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://www.computeruniverse.net/images/800/907732664AECC84DBC604E4A8A27B08D.jpg', 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/latitude_notebooks/14_5490/non_touch/notebooks-latitude-14-5490-nt-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKA67RM4_Nvpp0di9eQvc6SdccoiN2oGlouDG3573rrH151_RI'
                  ],
        
        img: 'https://www.computeruniverse.net/images/800/907732664AECC84DBC604E4A8A27B08D.jpg'
      },
       {
        id: 8,
        name: 'Horseman Shoe',
        price: 35500,
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://ae01.alicdn.com/kf/HTB1Tp9nbFYM8KJjSZFuq6Af7FXaV/COSIDRAM-Patent-Leather-Oxford-Shoes-For-Men-Dress-Shoes-Men-Formal-Shoes-Pointed-Toe-Business-Wedding.jpg', 'https://belk.scene7.com/is/image/Belk?layer=0&src=3900184_26130098_A_918_T10L00&layer=comp&$DWP_PRODUCT_PLP_DESKTOP$',
                    'https://img1.exportersindia.com/product_images/bc-full/dir_131/3910410/shoes-1482473603-2654299.jpeg'
                  ],
        
        img: 'https://ae01.alicdn.com/kf/HTB1Tp9nbFYM8KJjSZFuq6Af7FXaV/COSIDRAM-Patent-Leather-Oxford-Shoes-For-Men-Dress-Shoes-Men-Formal-Shoes-Pointed-Toe-Business-Wedding.jpg'
      },
       {
        id: 9,
        name: 'Nokia 3082',
        price: 9500,
         moreimg: ['https://www.slashgear.com/wp-content/uploads/2019/07/press-release-HMD-Global-Combo-hires-1280x720.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP_8_XImywbx2xtRzKkKp1pxTEfc48n5giPW0BEhkBpDR82r3d',
                    'https://www.maxbhi.com/images/detailed/2928/back_panel_cover_for_nokia_106_2018_white_maxbhi_com_83029.jpg'
                  ],
        
       
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        img: 'https://www.slashgear.com/wp-content/uploads/2019/07/press-release-HMD-Global-Combo-hires-1280x720.jpg'
      },
       {
        id: 10,
        name: 'Airman Fan',
        price: 18000,
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/A/117719_1517688418.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61FexCNYyUL._SX425_.jpg',
                    'https://cf-catman.infibeam.net/img/m1/abab/8841726/0b/e7/stallioantiquecopper.png.240be7a910.999x600x550.jpg'
                  ],
        
        img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/A/117719_1517688418.jpg'
      }
    ]
  },
  mutations: {
    setCart(state, item) {
      state.cart.unshift(item)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    // set cart on reload
    setCartReload(state, item) {
      state.cart = item
    },
    // set cart after removing item
    setRemoveItemCart(state, item) {
      state.cart = item
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    // set cartQty
    setCartItemQty(state, item) {
      state.cartQty = item
    },
    // set success message
    setSuccessAlert (state, item) {
      state.successAlertMessage = item.successMessage
      state.showSuccessAlert = item.showSuccess
    },
    // set error message
    setErrorAlert (state, item) {
      state.errorAlertMessage = item.errorMessage
      state.showErrrorAlert = item.showError
    }
  },
  getters: {
  setCartQty (state) {
    let totalQuantity = []
    state.cart.forEach((item) => {
      totalQuantity.push(item.quantity)
 })
    let total = totalQuantity.reduce((a, b) => {
    return a + b
 })
 return total
  }
},
  actions: {
  },
  modules: {
  }
})
