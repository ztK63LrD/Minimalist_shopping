<template>
  <!-- 自定义导航栏 -->
  <HomeNavbar></HomeNavbar>
  <!-- 滚动组件容器 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <Swiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <SwGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
// 获取接口函数
import { getHomeBanner, getHomeCategory, getHomeHot } from '@/api/home'
// 引入ts类型
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
// 导入组件
import HomeNavbar from './components/HomeNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
// 导入骨架屏组件
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

// 获取首页banner数据
let bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBanner()
  bannerList.value = res.result
}
// 获取首页分类数据
let categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategory()
  categoryList.value = res.result
}
// 获取热门推荐数据
let hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHot()
  hotList.value = res.result
}
// 猜你喜欢组合式函数调用
const { guessRef, onScrolltolower } = useGuessList()
// 设置下拉刷新状态
let isTriggered = ref<boolean>(false)
// 自定义下拉刷新
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 加载数据
  // await getHomeBannerData() // 轮播图数据
  // await getHomeCategoryData() // 分类数据
  // await getHomeHotData() // 猜你喜欢数据
  // 重置猜你喜欢的数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
    guessRef.value?.getGuess(),
  ])
  // 加载数据完成关闭动画
  isTriggered.value = false
}
// 标记是否在加载中
let isLoading = ref<boolean>(false)
// 组件刚加载的时候调用
onLoad(async () => {
  // 页码处于加载中
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  // 页面加载完毕
  isLoading.value = false
})
</script>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
  overflow-y: auto;
  /* 设置内容高度，使其超出容器高度才能出现滚动条 */
  min-height: 80%;
}
</style>
