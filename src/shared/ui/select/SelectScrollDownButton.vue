<script setup lang="ts">
  import { cn } from '$shared/utils/misc';
  import {
    SelectScrollDownButton,
    type SelectScrollDownButtonProps,
    useForwardProps,
  } from 'reka-ui';
  import { computed, type HTMLAttributes } from 'vue';

  const props = defineProps<SelectScrollDownButtonProps & { class?: HTMLAttributes['class'] }>();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });

  const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollDownButton
    data-slot="select-scroll-down-button"
    v-bind="forwardedProps"
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)"
  >
    <slot>
      <Icon name="mdi:chevron-down" class="size-4" />
    </slot>
  </SelectScrollDownButton>
</template>
