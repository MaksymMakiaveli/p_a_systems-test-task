<script setup lang="ts">
  import { NoteType } from '$shared/api/entities/note.entity';

  type Props = {
    noteType: NoteType;
  };

  const props = defineProps<Props>();
</script>

<template>
  <Icon v-if="props.noteType === NoteType.IMAGE" name="mdi:file-image-outline" />
  <Icon
    v-else-if="props.noteType === NoteType.CHECKBOX"
    name="mdi:checkbox-multiple-marked-outline"
  />
  <Icon v-else name="mdi:file-document-outline" />
</template>
