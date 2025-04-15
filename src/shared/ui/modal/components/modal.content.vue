<script setup lang="ts">
  import { onClickOutside } from '#imports';
  import { onMounted, Transition, useTemplateRef } from 'vue';
  import { cn } from '~/shared/utils/misc';
  import { injectModalRootCtx } from './modal.root.vue';

  defineOptions({
    inheritAttrs: false,
  });

  const contentNode = useTemplateRef('template-node');

  const rootCtx = injectModalRootCtx();

  onClickOutside(contentNode, () => {
    rootCtx.closeModel();
  });

  onMounted(() => {
    contentNode.value?.focus();
  });
</script>

<template>
  <Transition
    name="modal-content"
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div
      v-if="rootCtx.open.value"
      class="bg-ui-black-900/50 fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        ref="template-node"
        v-bind="$attrs"
        :class="cn('bg-ui-black-500 rounded-lg p-4 shadow-2xs', $attrs.class as string)"
      >
        <div v-if="$slots.title" class="border-ui-black-200 border-b pb-2 text-center">
          <slot name="title" />
        </div>

        <slot />
      </div>
    </div>
  </Transition>
</template>
