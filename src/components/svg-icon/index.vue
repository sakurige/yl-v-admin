<script setup lang="ts">
  import { computed, defineProps } from "vue";
  import { isExternal as external } from "@/utils";
  const props = defineProps({
    className: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      required: true,
    },
  });
  const isExternal = computed(() => external(props.icon));
  const styleExternalIcon = computed(() => ({
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    "-webkit-mask": `url(${props.icon}) no-repeat 50% 50%`,
  }));
  const iconName = computed(() => `#icon-${props.icon}`);
</script>
<template>
  <!-- 展示外部图标 -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>
  <!-- 内部图标 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:herf="iconName" />
  </svg>
</template>
<style lang="less" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .svg-external-icon {
    display: inline-block;

    background-color: currentColor;
    mask-size: cover !important;
    -webkit-mask-size: cover !important;
  }
</style>
