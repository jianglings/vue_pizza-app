<template>
  <div class="row mt-3">
    <div class="col-sm-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block mt-3" src="../../src/assets/icon.png" alt />
          <form @submit.prevent="onSubmit">
            <div class="form-group mb-3">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="form-group mb-3">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <button class="btn btn-block btn-success mt-3">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  // 组件内的守卫
  beforeRouterEnter: (to, from, next) => {
    // 将当前用户清空
    next(vm => vm.$store.dispatch("setUser", null));
  },

  methods: {
    onSubmit() {
      this.$axios.get("/users.json").then(res => {
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          users.push(user);
        }
        // 实现过滤
        let result = users.filter(
          user => user.email === this.email && user.password === this.password
        );
        // 判断 result 的长度  --》 是否登录成功（filter 若未匹配，返回空）
        if (result.length > 0 && result != " ") {
          this.$store.dispatch("setUser", result[0].email);
          this.$router.push({ name: "homeLink" });
        } else {
          this.$store.dispatch("setUser", null);
          alert("账号或密码输入错误！");
        }
      });
    }
  }
};
</script>


<style  scoped>
* {
  padding: 0;
  margin: 0;
}
</style> 
