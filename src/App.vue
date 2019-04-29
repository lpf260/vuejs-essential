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
$container-large-desktop: 1200px; /*用来替换Bootstrap样式的默认值*/
$btn-primary-bg: #00b5ad;
$btn-primary-border: #00b5ad;
$label-primary-bg: #00b5ad;
$pagination-active-bg: #00b5ad;
$pagination-active-border: #00b5ad;
$pagination-color: #00b5ad;
$input-border-focus: #00b5ad;
$link-color: #12c4c5;
$link-hover-color: #22ddde;
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
$fa-font-path: "~font-awesome/fonts/";

@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
@import "~font-awesome/scss/font-awesome";
@import "./styles/main";
@import "./styles/extra";
</style>
