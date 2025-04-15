<script setup lang="ts">
  type Props = {
    title: string;

    createdAt: string;

    text: string;

    hideClose?: boolean;
  };

  type Emits = {
    'click:close': [];
  };

  defineProps<Props>();

  const emit = defineEmits<Emits>();

  const onClickClose = (event: MouseEvent) => {
    event.stopPropagation();

    emit('click:close');
  };
</script>

<template>
  <div class="bg-ui-black-500 relative flex flex-col gap-2.5 p-5" v-bind="$attrs">
    <p class="text-18 text-ui-white truncate font-semibold">{{ title }}</p>
    <div class="flex items-center gap-2.5">
      <span class="text-16 text-ui-gray-300">{{ createdAt }}</span>
      <p class="text-16 text-ui-gray-100 truncate">{{ text }}</p>
    </div>

    <button v-if="!hideClose" class="absolute top-2 right-2 cursor-pointer" @click="onClickClose">
      <Icon name="mdi:close" class="text-ui-gray-100 size-5" />
    </button>
  </div>
</template>
