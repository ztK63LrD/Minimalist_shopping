// 分类页面的相关api函数
import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'
/**
 * 分类列表数据函数
 */
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
