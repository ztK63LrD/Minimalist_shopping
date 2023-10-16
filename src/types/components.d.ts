import Swiper from '@/components/Swiper.vue'
import SwGuess from '@/components/SwGuess.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Swiper: typeof Swiper
    SwGuess: typeof SwGuess
  }
}

// 组件实例类型
export type SwiperInstance = InstanceType<typeof Swiper>
export type SwGuessInstance = InstanceType<typeof SwGuess>
