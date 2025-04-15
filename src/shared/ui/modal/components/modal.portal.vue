<script lang="ts">
  import { useMounted } from '#imports';
  import type { TeleportProps } from 'vue';

  export type ModalPortalProps = Partial<TeleportProps> & {
    forceMount?: boolean;
  };
</script>

<script setup lang="ts">
  withDefaults(defineProps<ModalPortalProps>(), {
    to: 'body',
  });

  const isMounted = useMounted();
</script>

<template>
  <Portal v-if="isMounted || forceMount" :to="to" :disabled="disabled" :defer="defer">
    <slot />
  </Portal>
</template>
