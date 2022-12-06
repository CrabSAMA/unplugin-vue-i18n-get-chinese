<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const msg = ref(t('你好'))
// console.log(msg)
</script>

<template>
  <div>
    {{ t('你好') }}
  </div>
  <div>
    这里是中文
  </div>
  <p>{{ msg }}</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
