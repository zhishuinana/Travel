<template>
  <div class="icons-frame">
    <div class="icon">
      <img class="icon-img" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"/>
      <p>热门景点</p>
    </div>
    <div class="icon">
    </div>
    <div class="icon">
    </div>

  </div>
</template>
<script>
export default {
  nama: 'HomeIcons',
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus" scoped>
  .icons-frame
    height: 0
    padding-bottom: 50%
    background-color : blue
    .icon
      width:25%
      padding-bottom: 25%
      background-color: green
      float: left
      overflow: hidden
      height: 0
      .icon-img
        width: 100%
        padding-bottom :70%

</style>
