<template>
  <mdui-navigation-bar :value="currentRouteName" label-visibility="labeled">


    <mdui-navigation-bar-item
      icon="bookmark--outlined"
      value=""
      @click="$router.push('/')"
      >{{this.currentRouteName}}</mdui-navigation-bar-item
    >


    <mdui-navigation-bar-item
      icon="home--outlined"
      value="home"
      @click="$router.push('/')"
      >主页</mdui-navigation-bar-item
    >
    <mdui-navigation-bar-item
      icon="add--outlined"
      value="create"
      @click="$router.push('/create')"
      >创建活动</mdui-navigation-bar-item
    >
    <mdui-navigation-bar-item
      icon="format_list_bulleted--outlined"
      value="alltravels"
      @click="$router.push('/alltravels/')"
      >所有行程</mdui-navigation-bar-item
    >
    <mdui-navigation-bar-item
      icon="account_circle--outlined"
      value="about"
      @click="$router.push('/about')"
      >个人中心</mdui-navigation-bar-item
    >
  </mdui-navigation-bar>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>

<style>
mdui-navigation-bar {
  z-index: 554;
}
</style>