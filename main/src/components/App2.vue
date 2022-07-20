<template>
  <div class="layout">
    App2
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'

onMounted(() => {
  const route = useRoute();
  console.log(route);
})

</script>

<style lang="scss" scoped>
</style>
