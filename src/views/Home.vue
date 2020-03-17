<template>
  <div class="container">
  <br>
  <div class="row">
    <div class="col-3">
    <h6> Category </h6>
  <div v-for='category in categories' :key='category'>
  <SideBar :category='category' />
  </div>
    </div>
    <div class="col-9">
    <div class="row row-cols-2">
      <div class="col-sm" v-for='product in products' :key='product.id'>
  <ProductCard :product='product' />
  </div>
  </div>
    </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/Product/ProductCard.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'Home',
  data: () => ({
    products : [
      {
        id: 1,
        name: 'Cooking Oil',
        price: '3,000',
        img: 'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1'
      },
      {
        id: 2,
        name: 'Vivo power',
        price: '15,000',
        img: 'https://cdn-reichelt.de/bilder/web/xxl_ws/D600/GOOBAY59854_01.png'
      },
       {
        id: 3,
        name: 'HP Mouse',
        price: '2,500',
        img: 'https://images-na.ssl-images-amazon.com/images/I/818eEM-H9uL._SL1500_.jpg'
      },
       {
        id: 4,
        name: 'Dell Notebook pro',
        price: '200,000',
        img: 'https://www.computeruniverse.net/images/800/907732664AECC84DBC604E4A8A27B08D.jpg'
      },
       {
        id: 5,
        name: 'Lenovo Keyboard',
        price: '6,000',
        img: 'https://images-na.ssl-images-amazon.com/images/I/918e33SZeKL._SL1500_.jpg'
      },
       {
        id: 6,
        name: 'Samsung Projector',
        price: '135,000',
        img: 'https://www.projectorcentral.com/img.cfm?pid=4650'
      },
       {
        id: 7,
        name: 'Good mama Rice',
        price: '12,000',
        img: 'https://olist-uc.feednews.com/upload/20200109/iheztnrxblt.jpg'
      },
       {
        id: 8,
        name: 'Horseman Shoe',
        price: '35,500',
        img: 'https://ae01.alicdn.com/kf/HTB1Tp9nbFYM8KJjSZFuq6Af7FXaV/COSIDRAM-Patent-Leather-Oxford-Shoes-For-Men-Dress-Shoes-Men-Formal-Shoes-Pointed-Toe-Business-Wedding.jpg'
      },
       {
        id: 9,
        name: 'Nokia 3082',
        price: '9,500',
        img: 'https://www.slashgear.com/wp-content/uploads/2019/07/press-release-HMD-Global-Combo-hires-1280x720.jpg'
      },
       {
        id: 10,
        name: 'Airman Fan',
        price: '18,000',
        img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/A/117719_1517688418.jpg'
      }
    ],
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
    ]
  }),
  components: {
    ProductCard,
    SideBar
  }
}
</script>
