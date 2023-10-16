// 封装首页所有要使用的api函数
import type { PageResult, PageParams } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 获取首页广告区域的接口函数
 *  @param distributionSite 广告区域展示位置
 */
export const getHomeBanner = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
/**
 * 获取首页前台分类的接口函数
 */
export const getHomeCategory = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
/**
 * 获取首页热门推荐的接口函数
 */
export const getHomeHot = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
/**
 * 获取首页猜你喜欢的接口函数
 */
export const getHomeGoodsGuessLike = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
