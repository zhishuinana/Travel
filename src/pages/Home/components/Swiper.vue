<template>
  <swiper :options="swiperOption">

    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>

  </swiper>
</template>
<script>
export default {
  nama: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'
      }, {
        id: '002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  >>> .swiper-pagination-bullet-active
    background : #fff
  .swiper-img
    width : 100%
</style>
