<template>
  <div class="container mt-1">
  <br>
<div class="card mt-5" style="width: 40rem;">
  <img :src="`${pitem[0].img}`" class="card-img-top" style="max-height: 18rem" :alt="`${pitem[0].name} pic`">
  <div class="card-body">
  <div v-for="img in pitem[0].moreimg" class="d-flex">
  <img :src="`${img}`" class="card-img-top" style="max-height: 10rem; max-width: 10rem" :alt="`${pitem[0].name} pic`">
  </div>
    <h5 class="card-title">{{ pitem[0].name }}</h5>
    <p class="card-text">₦ {{ pitem[0].price }}</p>
    <p class="card-text">Description <br> {{ pitem[0].desc }}</p>

    <router-link to="/">Add to cart</router-link>
  </div>
</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    pitem: [],
    products : [
      {
        id: 1,
        name: 'Cooking Oil',
        price: '3,000',
        moreimg: ['https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1'],
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        img: 'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1'
      },
      {
        id: 2,
        name: 'Vivo power',
        price: '15,000',
        moreimg: ['https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1'],
        
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        img: 'https://cdn-reichelt.de/bilder/web/xxl_ws/D600/GOOBAY59854_01.png'
      },
       {
        id: 3,
        name: 'HP Mouse',
        price: '2,500',
        moreimg: ['https://pixfeeds.com/images/topic/3639/1200-3639-computer-mouse-photo1.jpg',
                    'https://woodacresschool.org/wp-content/uploads/2018/10/Computer%20mouse.jpg',
                    'https://image.made-in-china.com/2f0j00asCEjBDdhUgH/Computer-Mouse-Mini-Size.jpg'],
        
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
        img: 'https://images-na.ssl-images-amazon.com/images/I/818eEM-H9uL._SL1500_.jpg'
      },
       {
        id: 4,
        name: 'Dell Notebook pro',
        price: '200,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1'],
        
        img: 'https://www.computeruniverse.net/images/800/907732664AECC84DBC604E4A8A27B08D.jpg'
      },
       {
        id: 5,
        name: 'Lenovo Keyboard',
        price: '6,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://www.computerhope.com/cdn/keyboard/keyboard.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg',
                    'https://cdn.shopify.com/s/files/1/0036/4806/1509/products/s0541022_290x@2x.progressive.jpg?v=1583855020_290x@2x.progressive.jpg'],
        
        img: 'https://images-na.ssl-images-amazon.com/images/I/918e33SZeKL._SL1500_.jpg'
      },
       {
        id: 6,
        name: 'Samsung Projector',
        price: '135,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://i.pcmag.com/imagery/reviews/05sDObyjy9LLKSH04rZrcdx-6.fit_lpad.size_624x364.v_1569480155.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61j-E4RtdhL._SL1500_.jpg',
                    'https://static1.celexongroup.com/images/D/original/1/1000006829/en/infocus/InFocus-IN119HDG.jpg'],
        
        img: 'https://www.projectorcentral.com/img.cfm?pid=4650'
      },
       {
        id: 7,
        name: 'Good mama Rice',
        price: '12,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1'],
        
        img: 'https://olist-uc.feednews.com/upload/20200109/iheztnrxblt.jpg'
      },
       {
        id: 8,
        name: 'Horseman Shoe',
        price: '35,500',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://belk.scene7.com/is/image/Belk?layer=0&src=3900184_26130098_A_918_T10L00&layer=comp&$DWP_PRODUCT_PLP_DESKTOP$',
                    'https://img1.exportersindia.com/product_images/bc-full/dir_131/3910410/shoes-1482473603-2654299.jpeg',
                    'https://www.ivfcharotar.com/wp-content/uploads/2019/05/men-s-dress-shoes-wingtips-oxfords-jcpenney-little-black-dressing-prestigious-3.jpg'],
        
        img: 'https://ae01.alicdn.com/kf/HTB1Tp9nbFYM8KJjSZFuq6Af7FXaV/COSIDRAM-Patent-Leather-Oxford-Shoes-For-Men-Dress-Shoes-Men-Formal-Shoes-Pointed-Toe-Business-Wedding.jpg'
      },
       {
        id: 9,
        name: 'Nokia 3082',
        price: '9,500',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1',
                    'https://i0.wp.com/nairametrics.com/wp-content/uploads/2018/07/Vegetable-Oil-2.jpg?fit=1600%2C1000&ssl=1'],
        
        img: 'https://www.slashgear.com/wp-content/uploads/2019/07/press-release-HMD-Global-Combo-hires-1280x720.jpg'
      },
       {
        id: 10,
        name: 'Airman Fan',
        price: '18,000',
        desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,',
       moreimg: ['https://images-na.ssl-images-amazon.com/images/I/61FexCNYyUL._SX425_.jpg',
                    'https://cf-catman.infibeam.net/img/m1/abab/8841726/0b/e7/stallioantiquecopper.png.240be7a910.999x600x550.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61Z431hRUqL._SL1500_.jpg'],
        
        img: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/A/117719_1517688418.jpg'
      }
    ]
  }),

  created () {
      this.pitem = this.products.filter((item) => {
         return item.id == parseInt(this.$route.params.id)
      })

      console.log(this.pitem)
  }
}
</script>
