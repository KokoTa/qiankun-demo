<template>
  <div>
    <router-view></router-view>
    <div id="container1"></div>
    <div id="container2"></div>
    <el-button type="primary" size="default" @click="$router.push('/')">/</el-button>
    <el-button type="primary" size="default" @click="$router.push('/app1')">/app1</el-button>
    <el-button type="primary" size="default" @click="$router.push('/app1/about')">/app1/about</el-button>
    <el-button type="primary" size="default" @click="$router.push('/app2')">/app2</el-button>
    <el-button type="primary" size="default" @click="$router.push('/app2/about')">/app2/about</el-button>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
</style>
