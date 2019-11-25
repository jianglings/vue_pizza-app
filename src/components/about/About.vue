<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col-4">
        <!--导航 -->
        <div class="list-group mb-3">
             <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
            <a class="list-group-item list-group-item-action">历史记录</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
            <a class="list-group-item list-group-item-action">点餐指南</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
            <a class="list-group-item list-group-item-action">配送信息</a>
          </router-link>
         
          <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <!-- 导航对应的内容 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>


<style >
</style>