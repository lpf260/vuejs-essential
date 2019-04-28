<template>
  <div id="wrap">
    <TheHeader/>
    <!--在单文件组件中，没有内容的组件应该是闭合的，所以不要忘记使用斜杠/进行闭合-->
  </div>
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/"; /*$在sass语法中表示变量，用于指定自提路径*/
$fa-font-path: "~font-awesome/fonts/";
@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
@import "~font-awesome/scss/font-awesome";

body > .container {
  margin-top: 15px;
}
</style>
