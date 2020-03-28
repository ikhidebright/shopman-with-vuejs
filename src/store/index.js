import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
        price: '3,000',
        moreimg: ['https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1', 'https://www.industrynewsengine.com/wp-content/uploads/2019/09/Cooking-Oil-1.jpg',
                    'https://floridaoliveoil.com/wp-content/uploads/2015/12/olive_oil_spanish.jpg'
                  ],
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        img: 'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1'
      },
      {
        id: 2,
        name: 'Vivo power',
        price: '15,000',
        moreimg: ['https://cdn-reichelt.de/bilder/web/xxl_ws/D600/GOOBAY59854_01.png','https://www.powerbankexpert.com/wp-content/uploads/2016/12/what-is-a-power-bank.jpg',
                    'https://s3.amazonaws.com/piggy-blog/wp-content/uploads/2018/08/06193131/How-Many-Times-Can-A-30000mAh-Power-Bank-Fully-Charge-Your-Smartphone.jpg'
                  ],
        
        
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        img: 'https://cdn-reichelt.de/bilder/web/xxl_ws/D600/GOOBAY59854_01.png'
      },
       {
        id: 3,
        name: 'HP Mouse',
        price: '2,500',
        moreimg: ['https://images-na.ssl-images-amazon.com/images/I/818eEM-H9uL._SL1500_.jpg', 'https://pixfeeds.com/images/topic/3639/1200-3639-computer-mouse-photo1.jpg',
                    'https://woodacresschool.org/wp-content/uploads/2018/10/Computer%20mouse.jpg'
                  ],
        
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        img: 'https://images-na.ssl-images-amazon.com/images/I/818eEM-H9uL._SL1500_.jpg'
      },
       {
        id: 4,
        name: 'Dell Notebook pro',
        price: '200,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://www.computeruniverse.net/images/800/907732664AECC84DBC604E4A8A27B08D.jpg', 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/latitude_notebooks/14_5490/non_touch/notebooks-latitude-14-5490-nt-campaign-hero-504x350-ng.psd?fmt=jpg&wid=570&hei=400',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKA67RM4_Nvpp0di9eQvc6SdccoiN2oGlouDG3573rrH151_RI'
                  ],
        
        img: 'https://www.computeruniverse.net/images/800/907732664AECC84DBC604E4A8A27B08D.jpg'
      },
       {
        id: 5,
        name: 'Lenovo Keyboard',
        price: '6,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://images-na.ssl-images-amazon.com/images/I/918e33SZeKL._SL1500_.jpg', 'https://www.computerhope.com/cdn/keyboard/keyboard.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg'
                  ],
        
        img: 'https://images-na.ssl-images-amazon.com/images/I/918e33SZeKL._SL1500_.jpg'
      },
       {
        id: 6,
        name: 'Samsung Projector',
        price: '135,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://www.projectorcentral.com/img.cfm?pid=4650', 'https://i.pcmag.com/imagery/reviews/05sDObyjy9LLKSH04rZrcdx-6.fit_lpad.size_624x364.v_1569480155.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61j-E4RtdhL._SL1500_.jpg'
                  ],
        
        img: 'https://www.projectorcentral.com/img.cfm?pid=4650'
      },
       {
        id: 7,
        name: 'Good mama Rice',
        price: '12,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://olist-uc.feednews.com/upload/20200109/iheztnrxblt.jpg','https://pluspng.com/img-png/sack-of-rice-png-a-2000.jpg',
                    'https://previews.123rf.com/images/innakreativv/innakreativv1901/innakreativv190100094/115453240-bag-of-rice-and-wooden-spoon-on-a-white-isolated-.jpg'
                  ],
        
        img: 'https://olist-uc.feednews.com/upload/20200109/iheztnrxblt.jpg'
      },
       {
        id: 8,
        name: 'Horseman Shoe',
        price: '35,500',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://ae01.alicdn.com/kf/HTB1Tp9nbFYM8KJjSZFuq6Af7FXaV/COSIDRAM-Patent-Leather-Oxford-Shoes-For-Men-Dress-Shoes-Men-Formal-Shoes-Pointed-Toe-Business-Wedding.jpg', 'https://belk.scene7.com/is/image/Belk?layer=0&src=3900184_26130098_A_918_T10L00&layer=comp&$DWP_PRODUCT_PLP_DESKTOP$',
                    'https://img1.exportersindia.com/product_images/bc-full/dir_131/3910410/shoes-1482473603-2654299.jpeg'
                  ],
        
        img: 'https://ae01.alicdn.com/kf/HTB1Tp9nbFYM8KJjSZFuq6Af7FXaV/COSIDRAM-Patent-Leather-Oxford-Shoes-For-Men-Dress-Shoes-Men-Formal-Shoes-Pointed-Toe-Business-Wedding.jpg'
      },
       {
        id: 9,
        name: 'Nokia 3082',
        price: '9,500',
         moreimg: ['https://www.slashgear.com/wp-content/uploads/2019/07/press-release-HMD-Global-Combo-hires-1280x720.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP_8_XImywbx2xtRzKkKp1pxTEfc48n5giPW0BEhkBpDR82r3d',
                    'https://www.maxbhi.com/images/detailed/2928/back_panel_cover_for_nokia_106_2018_white_maxbhi_com_83029.jpg'
                  ],
        
       
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        img: 'https://www.slashgear.com/wp-content/uploads/2019/07/press-release-HMD-Global-Combo-hires-1280x720.jpg'
      },
       {
        id: 10,
        name: 'Airman Fan',
        price: '18,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/A/117719_1517688418.jpg', 'https://images-na.ssl-images-amazon.com/images/I/61FexCNYyUL._SX425_.jpg',
                    'https://cf-catman.infibeam.net/img/m1/abab/8841726/0b/e7/stallioantiquecopper.png.240be7a910.999x600x550.jpg'
                  ],
        
        img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/A/117719_1517688418.jpg'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
