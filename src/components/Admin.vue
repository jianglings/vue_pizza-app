<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import newPizza from "./newPizza";

export default {
  data() {
    return {
      // getMenuItems: []
    };
  },

  computed: {
    getMenuItems: {
      get() {
        return this.$store.state.menuItems;
      },
      set() {}
    }
  },

  //请求数据，并展示相应的属性
  created() {
    fetch("https://pizza-app-8b5f5.firebaseio.com/menu.json")
      .then(
        // 获取到的是一个可读的数据流
        res => {
          return res.json();
        }
      )
      // 删除数据时需要根据 ID 来进行删除，将存储的数据的key(唯一)作为 ID
      .then(data => {
        let menuAray = [];
        for (let key in data) {
          data[key].id = key;
          menuAray.push(data[key]);
        }
        // 在当前页面获取到数据时添加了ID，要与vuex中的数据进行同步
        // this.getMenuItems = menuAray;
        this.$store.commit("setMenuItems", menuAray);
      });
  },
  methods: {
    deleteData(item) {
      // fetch
      // 通过唯一 ID 进行删除
      fetch(
        "https://pizza-app-8b5f5.firebaseio.com/menu/" + item.id + "/.json",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          // 数据同步更新
          this.$store.commit("removeMenuItems", item);
        })
        .catch(err => console.log(err));
    }
  },

  components: {
    "app-new-pizza": newPizza
  }
};
</script>


<style >
</style>