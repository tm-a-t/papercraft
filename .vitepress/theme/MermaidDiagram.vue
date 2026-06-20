<template>
    <div class="mermaid-diagram">
        <div v-if="svg" class="mermaid-diagram__svg" v-html="svg"></div>
        <pre v-else-if="error" class="mermaid-diagram__fallback"><code>{{ source }}</code></pre>
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue'
import {useData} from 'vitepress'

const props = defineProps<{
    id: string
    graph: string
}>()

const {isDark} = useData()
const source = computed(() => decodeURIComponent(props.graph))
const svg = ref('')
const error = ref<unknown>(null)

let renderVersion = 0

async function renderDiagram() {
    const currentVersion = ++renderVersion

    try {
        const {default: mermaid} = await import('mermaid')

        mermaid.initialize({
            startOnLoad: false,
            theme: isDark.value ? 'dark' : 'default',
        })

        const rendered = await mermaid.render(`${props.id}-${currentVersion}`, source.value)

        if (currentVersion === renderVersion) {
            svg.value = rendered.svg
            error.value = null
        }
    } catch (caught) {
        if (currentVersion === renderVersion) {
            svg.value = ''
            error.value = caught
        }
    }
}

onMounted(renderDiagram)
watch(isDark, renderDiagram)
</script>
