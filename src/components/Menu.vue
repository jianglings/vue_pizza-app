<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>
              <strong>{{ item.name }}</strong>
            </td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}} 寸</td>
            <td>{{option.price}} RMB</td>
            <td>
              <!-- item -> name 属性  option ->price 属性 -->
              <button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length>0">
        <table>
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in baskets" :key="item.id">
            <tr>
              <td>
                <button @click="decrease(item)" class="btn btn-sm">-</button>
                <span>{{item.quantity}}</span>
                <button @click="increase(item)" class="btn btn-sm">+</button> &emsp;&emsp;
              </td>
              <td>{{item.name}} {{item.size}}&emsp;&emsp;</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
          </tbody>
        </table>
        <p>总价:{{totalPrice}} RMB</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>{{basketText}}</div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      baskets: [], //用于存储添加到购物车里的内容
      basketText: "当前购物车为空，请添加！"
      // getMenuItems: {}
    };
  },
  computed: {
    getMenuItems() {
      // 从vuex中获取数据
      // return this.$store.state.menuItems;

      // 通过getters 获取数据
      return this.$store.getters.getMenuItems;
    },

    // 遍历basekts，通过price* quantity 得到totalCost
    totalPrice() {
      let totalCost = 0;
      for (let index in this.baskets) {
        let individualItem = this.baskets[index];
        totalCost += individualItem.price * individualItem.quantity;
      }
      return totalCost;
    }
  },
  // 一进入页面时就请求数据
  created() {
    this.getData();
  },

  methods: {
    getData() {
      // fetch
      // fetch("https://pizza-app-8b5f5.firebaseio.com/menu.json")
      //   .then(res => res.json())
      //   .then(data => (this.getMenuItems = data));

      // axios
      // this.$axios.get("menu.json").then(res => (this.getMenuItems = res.data));

      // 将数据存储到vuex中
      this.$axios
        .get("menu.json")
        .then(res => this.$store.commit("setMenuItems", res.data));
    },

    addToBasket(item, option) {
      // 点击添加时，触发事件向baskets 中添加购物列表
      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      };

      if (this.baskets.length > 0) {
        let result = this.baskets.filter(
          basket => basket.name === item.name && basket.price === option.price
        );

        if (result != null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.baskets.push(basket);
        }
      } else {
        this.baskets.push(basket);
      }
    },
    decrease(item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removefromBasket(item);
      }
    },
    increase(item) {
      item.quantity++;
    },
    removefromBasket(item) {
      // 当长度小于等于0 时，删除当前项
      this.baskets.splice(this.baskets.indexOf(item), 1);
    }
  }
};
</script>