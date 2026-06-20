<script setup lang="ts">
import {ref} from 'vue'
import {VPButton} from 'vitepress/theme'
import {useEditLink} from 'vitepress/dist/client/theme-default/composables/edit-link.js'

const editLink = useEditLink()
</script>

<template>
  <div class="content-container">
    <div class="emoji">✍️</div>
    <h4 class="heading">Add your examples</h4>
    <div>Help us add code examples for your favorite library</div>

    <VPButton class="button-link no-icon" text="Edit page on GitHub" theme="alt" :href="editLink.url"/>
  </div>
</template>

<style scoped>
.content-container {
  text-align: center;
  padding: 48px 0;
  background-color: var(--vp-code-block-bg);
}

.heading {
  margin-bottom: 2px;
}

.emoji {
  font-size: 48px;
  line-height: 1;
  margin-bottom: -16px;
}

.button-link {
  margin-top: 24px;
  text-decoration: none;
}
</style>