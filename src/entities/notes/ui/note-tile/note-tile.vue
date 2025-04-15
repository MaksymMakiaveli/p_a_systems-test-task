<script setup lang="ts">
  type Props = {
    title: string;

    createdAt: string;

    text: string;
  };

  defineProps<Props>();
</script>

<template>
  <div class="bg-ui-black-500 flex flex-col gap-2.5 p-5">
    <p class="text-18 text-ui-white truncate font-semibold">{{ title }}</p>
    <div class="flex items-center gap-2.5">
      <span class="text-16 text-ui-gray-300">{{ createdAt }}</span>
      <p class="text-16 text-ui-gray-100 truncate">{{ text }}</p>
    </div>
  </div>
</template>
