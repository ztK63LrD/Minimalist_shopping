<template>
  <view class="category">
    <view class="category-item" hover-class="none" v-for="item in list" :key="item.id">
      <image class="icon" :src="item.icon" @tap="goCategory"></image>
      <text class="text">{{ item.name }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
// 引入ts类型
import type { CategoryItem } from '@/types/home'

// 设置点击事件
const goCategory = () => {
  uni.switchTab({
    url: '/pages/category/category',
  })
}
// 定义 props 接收数据
defineProps<{
  list: CategoryItem[]
}>()
</script>

<style lang="scss">
/* 前台类目 */
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;
  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
