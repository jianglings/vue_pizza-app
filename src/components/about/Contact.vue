<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">contactUS</h4>
      <p class="card-text">949044437@qq.com</p>

      <router-link :to="{name:'personNameLink'}">姓名</router-link>
      <router-link :to="{name:'phoneNumberLink'}">电话</router-link>

      <router-view class="mt-3"></router-view>
    </div>
  </div>
</template>