<script setup lang="ts">
  import type { CheckboxValue } from './types';

  type Props = {
    value: CheckboxValue[];
  };

  type Emits = {
    'update:value': [CheckboxValue];
    'add:checkbox': [];
    'remove:checkbox': [string];
  };

  const props = defineProps<Props>();

  const emit = defineEmits<Emits>();

  const onUpdateValue = (value: { id: string } & ({ label: string } | { checked: boolean })) => {
    const currentValue = props.value.find((checkbox) => checkbox.id === value.id);

    if (!currentValue) return;

    const updatedValue = { ...value };

    if ('label' in updatedValue) {
      updatedValue.label = updatedValue.label.trim();
    }

    emit('update:value', {
      ...currentValue,
      ...updatedValue,
    });
  };
</script>

<template>
  <div class="flex w-full flex-col gap-2 overflow-hidden">
    <div class="flex w-full flex-col gap-1">
      <div v-for="checkbox in value" :key="checkbox.id" class="flex w-full items-center gap-2">
        <label
          :data-checked="checkbox.checked"
          class="border-ui-white data-[checked=true]:bg-ui-white relative flex size-4 items-center justify-center rounded-sm border"
        >
          <input
            type="checkbox"
            :checked="checkbox.checked"
            placeholder="Untitled"
            class="hidden"
            @change="
              onUpdateValue({
                id: checkbox.id,
                checked: ($event.target as HTMLInputElement).checked,
              })
            "
          />

          <Icon
            :data-checked="checkbox.checked"
            name="mdi:check"
            class="text-18 text-ui-black-900 hidden data-[checked=true]:block"
          />
        </label>
        <textarea
          type="text"
          :value="checkbox.label"
          placeholder="Untitled"
          class="text-14 field-sizing-content min-w-[100px] resize-none break-after-all pt-1 outline-none"
          maxlength="50"
          @input="
            onUpdateValue({
              id: checkbox.id,
              label: ($event.target as HTMLInputElement).value,
            })
          "
        />
        <button
          class="text-ui-gray-300 inline-flex cursor-pointer items-center justify-center"
          @click="emit('remove:checkbox', checkbox.id)"
        >
          <Icon name="mdi:close" class="text-18" />
        </button>
      </div>
    </div>

    <button
      class="border-ui-black-300 text-14 inline-flex w-fit cursor-pointer items-center gap-2 rounded-md border px-3 py-2"
      @click="emit('add:checkbox')"
    >
      <Icon name="mdi:plus" class="text-18" />
      Add Checkbox
    </button>
  </div>
</template>
