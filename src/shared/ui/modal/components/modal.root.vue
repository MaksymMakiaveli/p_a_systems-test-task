<script lang="ts">
  import { useVModel } from '#imports';
  import type { Ref } from 'vue';
  import { createCtx } from '~/shared/utils/ctx';

  export type ModalRootProps = {
    open?: boolean;

    defaultOpen?: boolean;
  };

  export type ModalRootEmit = {
    'update:open': [value: boolean];
  };

  export type ModalRootCtx = {
    open: Readonly<Ref<boolean>>;

    onOpenChange: (value: boolean) => void;

    onOpenToggle: () => void;

    openModel: () => void;

    closeModel: () => void;
  };

  export const [provideModalRootCtx, injectModalRootCtx] = createCtx<ModalRootCtx>('modal-root');
</script>

<script setup lang="ts">
  const props = withDefaults(defineProps<ModalRootProps>(), {
    open: undefined,
    defaultOpen: false,
  });

  const emit = defineEmits<ModalRootEmit>();

  const open = useVModel(props, 'open', emit, {
    defaultValue: props.defaultOpen,
    passive: (props.open === undefined) as false,
  }) as Ref<boolean>;

  provideModalRootCtx({
    open,
    onOpenChange: (value) => {
      open.value = value;
    },
    onOpenToggle: () => {
      open.value = !open.value;
    },
    openModel: () => {
      open.value = true;
    },
    closeModel: () => {
      open.value = false;
    },
  });
</script>

<template>
  <slot />
</template>
