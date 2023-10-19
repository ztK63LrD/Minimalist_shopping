<template>
  <view class="carousel">
    <!-- 轮播图区域 -->
    <swiper indicator-dots autoplay :interval="3000" :duration="1000" circular :list="list">
      <!-- 循环渲染轮播图的item项 -->
      <swiper-item v-for="item in list" :key="item.id">
        <view class="swiper-item">
          <!-- 动态绑定图片的 src 属性 -->
          <image class="img" :src="item.imgUrl" mode="aspectFill"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
// import type { BannerItem } from '@/types/home'
// 添加泛型参数来指定属性类型
defineProps<{
  list: any[]
}>()
</script>

<style lang="scss">
/* 轮播图 */
.carousel {
  // height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .swiper-item,
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
