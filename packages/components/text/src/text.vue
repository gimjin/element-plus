<template>
  <el-tooltip v-bind="tooltipOptions">
    <component
      :is="tag"
      ref="textRef"
      :class="textKls"
      :style="{ '-webkit-line-clamp': lineClamp }"
      v-bind="$attrs"
    >
      <slot />
    </component>
    <template #content>
      <slot v-if="$slots.tooltip" name="tooltip" />
      <slot v-else />
    </template>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, useSlots, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import ElTooltip from '@element-plus/components/tooltip'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'
import { textProps } from './text'

defineOptions({
  name: 'ElText',
})

const props = defineProps(textProps)
const slots = useSlots()
const emits = defineEmits(['ellipsis'])

const textSize = useFormSize()
const ns = useNamespace('text')

const textKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(textSize.value),
  ns.is('truncated', props.truncated),
  ns.is('line-clamp', props.lineClamp !== undefined),
])

const textRef = ref<HTMLElement>()
const showEllipsis = ref<boolean>(false)

const tooltipOptions = computed(() => {
  if (typeof props.tooltip === 'object') {
    return {
      ...props.tooltip,
      disabled: !showEllipsis.value,
    }
  }

  return {
    disabled: !props.tooltip || !showEllipsis.value,
  }
})

function computeShowEllipsis(target: HTMLElement) {
  if (props.truncated) {
    showEllipsis.value = target.scrollWidth > target.clientWidth
  }
  if (props.lineClamp !== undefined) {
    showEllipsis.value = target.scrollHeight > target.clientHeight
  }
}

useResizeObserver(textRef, (entries) => {
  computeShowEllipsis(entries[0].target as HTMLElement)
})

watch(
  () => slots.default?.(),
  async () => {
    await nextTick()
    computeShowEllipsis(textRef.value as HTMLElement)
  }
)

watch(
  () => showEllipsis.value,
  (showEllipsis) => {
    emits('ellipsis', showEllipsis)
  }
)
</script>
