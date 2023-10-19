<template name="skeleton">
  <view class="sk-container">
    <view class="navbar" style="padding-top: 44px">
      <view class="wrap">
        <navigator class="back icon-left" open-type="navigateBack">
          <view is="node-modules/@dcloudio/uni-ui/lib/uni-icons/uni-icons">
            <text
              class="uni-icons icons--uni-icons uniui-back icons--uniui-back sk-pseudo sk-pseudo-circle"
              style="color: #333333; font-size: 30px"
            ></text>
          </view>
        </navigator>
        <view class="title sk-transparent sk-text-14-2857-308 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view :scroll-y="true" class="viewport" id="scroller" :enable-back-to-top="true">
      <view class="overview sk-image" style="padding-top: 64px">
        <view class="status icon-clock sk-transparent sk-text-0-0000-609 sk-text">等待付款</view>
        <view class="tips">
          <text class="money sk-transparent sk-text-0-0000-614 sk-text">应付金额: ¥ 201</text>
          <text class="time sk-transparent sk-text-0-0000-328 sk-text">支付剩余</text>
          <view is="node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown">
            <view
              class="uni-countdown countdown--uni-countdown data-v-342c352a countdown--data-v-342c352a"
            >
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-59 sk-text"
                style="
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  width: 22px;
                  line-height: 20px;
                  border-radius: 3px;
                  background-position-x: 50%;
                "
                >00</text
              >
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color: #fff; font-size: 12px; margin:"
                >时</text
              >
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-437 sk-text"
                style="
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  width: 22px;
                  line-height: 20px;
                  border-radius: 3px;
                  background-position-x: 50%;
                "
                >29</text
              >
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color: #fff; font-size: 12px; margin:"
                >分</text
              >
              <text
                class="uni-countdown__number countdown--uni-countdown__number data-v-342c352a countdown--data-v-342c352a sk-transparent sk-text-15-0000-637 sk-text"
                style="
                  color: rgb(255, 255, 255);
                  font-size: 14px;
                  width: 22px;
                  line-height: 20px;
                  border-radius: 3px;
                  background-position-x: 50%;
                "
                >51</text
              >
              <text
                class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-342c352a countdown--data-v-342c352a sk-transparent sk-opacity"
                style="color: #fff; font-size: 12px; margin:"
                >秒</text
              >
            </view>
          </view>
        </view>
        <view
          class="button sk-transparent sk-text-28-1250-904 sk-text"
          style="background-position-x: 50%"
          >去支付</view
        >
      </view>
      <view class="shipment">
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-275 sk-text">黄 15280062088</view>
          <view class="address sk-transparent sk-text-14-2857-885 sk-text"
            >天津市 天津市 和平区三沙</view
          >
        </view>
      </view>
      <view class="goods">
        <view class="item">
          <navigator class="navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-471 sk-text"
                >女式羊毛内里懒人家居豆豆鞋</view
              >
              <view class="type sk-transparent sk-text-22-2222-924 sk-text">杏色， 36</view>
              <view class="price">
                <view class="actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-196 sk-text">199</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
        </view>
        <view class="total">
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-330 sk-text">商品总价: </view>
            <view class="symbol sk-transparent sk-text-0-0000-92 sk-text sk-pseudo sk-pseudo-circle"
              >199</view
            >
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-737 sk-text">运费: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-823 sk-text sk-pseudo sk-pseudo-circle"
              >2</view
            >
          </view>
          <view class="row">
            <view class="text sk-transparent sk-text-0-0000-895 sk-text">应付金额: </view>
            <view
              class="symbol primary sk-transparent sk-text-0-0000-518 sk-text sk-pseudo sk-pseudo-circle"
              >201</view
            >
          </view>
        </view>
      </view>
      <view class="detail">
        <view class="title sk-transparent sk-text-0-0000-914 sk-text">订单信息</view>
        <view class="row">
          <view class="item sk-transparent">
            订单编号: 1714822761114767361
            <text class="copy sk-transparent sk-text-0-0000-622 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-692 sk-text"
            >下单时间: 2023-10-19 09:56:21</view
          >
        </view>
      </view>
      <xtx-guess class="r"></xtx-guess>
      <view class="toolbar-height" style="padding-bottom: 34px"></view>
      <view class="toolbar" style="padding-bottom: 34px">
        <view class="button primary sk-transparent sk-text-14-2857-477 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-181 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-308 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-609 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-0-0000-614 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-0-0000-328 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text-15-0000-59 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 40rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-15-0000-437 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 40rpx;
  position: relative !important;
}
.sk-text-15-0000-637 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 40rpx;
  position: relative !important;
}
.sk-text-28-1250-904 {
  background-image: linear-gradient(
    transparent 28.125%,
    #eeeeee 0%,
    #eeeeee 71.875%,
    transparent 0%
  ) !important;
  background-size: 100% 64rpx;
  position: relative !important;
}
.sk-text-14-2857-275 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-885 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-471 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-22-2222-924 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 43.2rpx;
  position: relative !important;
}
.sk-text-14-2857-196 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-330 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-92 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-737 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-823 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-895 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-0-0000-518 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 36rpx;
  position: relative !important;
}
.sk-text-0-0000-914 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30rpx;
  position: relative !important;
}
.sk-text-0-0000-622 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 20rpx;
  position: relative !important;
}
.sk-text-0-0000-692 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26rpx;
  position: relative !important;
}
.sk-text-14-2857-477 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-181 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
