<template>
  <div class="users-show">
    <div class="col-md-3 main-col">
      <div class="box">
        <div class="padding-md">
          <div class="list-group text-center">
            <a>
              <i class="text-md fa fa-user"></i>
              用户名
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserEdit",
  data() {
    return {
      links: [
        {
          name: "edit",
          title: "个人信息",
          icon: "list-alt"
        },
        {
          name: "edit_avatar",
          title: "修改头像",
          icon: "picture-o"
        },
        {
          name: "edit_password",
          title: "修改密码",
          icon: "lock"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
