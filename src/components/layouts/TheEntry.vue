<template>
  <div class="navbar-right">
    <ul v-if="auth" class="nav navbar-nav github-login">
      <li>
        <a v-dropdown href="javascript:;">
          <i class="fa fa-plus text-md"></i>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/articles/create">
              <i class="fa fa-paint-brush text-md"></i>
              创作文章
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <a v-dropdown href="javascript:;">
          <span v-if="user">
            <img v-if="user.avatar" :src="user.avatar" class="avatar-topnav" />
            <span v-if="user.name">{{user.name}}</span>
          </span>
          <span v-else>佚名</span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <!-- 编辑资料 -->
          <li>
            <router-link to="/users/1/edit">
              <i class="fa fa-cog text-md i-middle"></i>
              编辑资料
            </router-link>
            <a href="javascript:;" @click="logout">
              <i class="fa fa-sign-out text-md"></i>退出
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div v-else class="nav navbar-nav github-login">
      <!--<router-link> 组件支持用户在具有路由功能的应用中导航，通过 <router-link> 上的 to 属性可以指定目标地址，这里是一个字符串 /auth/register，对应路由配置中的 path。-->
      <router-link to="/auth/login" class="btn btn-default login-btn">
        <i class="fa fa-user"></i> 登 录
      </router-link>
      <router-link to="/auth/register" class="btn btn-default login-btn">
        <i class="fa fa-user-plus"></i> 注 册
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TheEntry",
  /*
    计算属性computed用来处理相对复杂的逻辑，并返回一个新的属性，它会根据其依赖的变化而变化
   */
  computed: {
    ...mapState([
      // 映射this.auth为store.state.auth
      "auth",

      // 映射this.user为store.state.user
      "user"
    ])
  },
  methods: {
    logout() {
      this.$swal({
        text: "你确定要退出吗？",
        confirmButtonText: "退出"
      }).then(res => {
        if (res.value) {
          this.$store.dispatch("logout");
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
