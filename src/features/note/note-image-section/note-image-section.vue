<script setup lang="ts">
  type Props = {
    src?: string | null;
  };

  type Emits = {
    'update:src': [string];

    'delete:image': [];
  };

  defineProps<Props>();

  const emit = defineEmits<Emits>();

  const onUploadImage = (event: Event) => {
    const target = event.target as HTMLInputElement;

    const file = target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      if (!event.target || !file) return;

      emit('update:src', event.target.result as string);
    };

    reader.readAsDataURL(file);
  };
</script>

<template>
  <div class="flex flex-col gap-2" v-bind="$attrs">
    <div v-if="src" class="relative flex w-full justify-center overflow-hidden rounded-md">
      <img :src="src" alt="Note Image" class="object-fit aspect-video" />

      <button class="absolute top-2 right-2 cursor-pointer" @click="emit('delete:image')">
        <Icon name="mdi:close" class="text-24" />
      </button>
    </div>

    <label
      v-else
      class="border-ui-black-300 inline-flex w-fit cursor-pointer items-center gap-2 rounded-md border px-3 py-2"
    >
      <input type="file" accept="image/*" class="hidden" @change="onUploadImage" />
      <Icon name="mdi:plus" class="text-18" />
      <span class="text-14">Upload Image</span>
    </label>
  </div>
</template>
