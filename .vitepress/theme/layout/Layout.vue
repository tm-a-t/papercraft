<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ProjectTitle from './ProjectTitle.vue'
import LangCookie from './LangCookie.vue'
import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-title-after>
      <ProjectTitle/>
    </template>
    <template #nav-bar-content-before>
      <ClientOnly>
        <NolebaseHighlightTargetedHeading/>
        <LangCookie/>
      </ClientOnly>
    </template>
  </Layout>
</template>

<style scoped>
/* .Layout:not(.has-russian-translation) :deep(.translations) {
  opacity: 0;
  pointer-events: none;
  cursor: inherit;
}
*/
</style>