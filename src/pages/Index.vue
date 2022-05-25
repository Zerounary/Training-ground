<template>
  <div>
    <div class="nav">
      <router-link class="nav-menu" to="/">英语单词复习</router-link>
      <router-link class="nav-menu" to="/xiaohe" >小鹤输入法</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.nav {
@apply w-full h-50px  flex items-center space-x-3
}

.nav-menu {
  @apply text-xl h-full flex items-center p-3 rounded border
}

.active {
  @apply bg-gray-500 text-white;
}

</style>