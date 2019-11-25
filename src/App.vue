<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row mt-3">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
        <div class="col-m-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    "app-header": Header
  }
};
</script>

<style>
</style>
