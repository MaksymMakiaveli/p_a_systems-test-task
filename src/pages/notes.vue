<script setup lang="ts">
  import { navigateTo, useRoute } from '#app';
  import { NoteTile } from '$entities/notes/ui/note-tile';
  import { useNoteRepository } from '$shared/api/repositories/note.repository';
  import { computed } from 'vue';
  import { ROUTER_BOOK } from '~/kernel/routes/router-book';
  import { DateFormatter } from '~/shared/utils/date';
  import { cn } from '~/shared/utils/misc';

  const noteRepository = useNoteRepository();

  const route = useRoute();

  const onClickNoteTile = async (noteId: string) => {
    await navigateTo({ path: ROUTER_BOOK.note.particular({ noteId }) });
  };

  const currentNoteId = computed(() => route.params.noteId);
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="flex h-full grow">
      <div class="bg-ui-black-700 flex h-full w-full max-w-[350px] shrink-0 flex-col">
        <div class="px-5 pt-7.5">
          <h6 class="text-22 font-medium">Notes</h6>
        </div>
        <div
          class="scrollbar-thumb-ui-black-200 scrollbar-track-transparent flex flex-col overflow-hidden"
        >
          <div class="scrollbar-thin flex flex-col gap-5 overflow-y-auto px-5 pt-7.5 pb-4">
            <NoteTile
              v-for="note in noteRepository.sortedByDateNotes"
              :key="note.id"
              :title="note.title"
              :created-at="DateFormatter.formatDefault(note.createdAt)"
              :text="note.text"
              :class="
                cn('cursor-pointer transition-colors', {
                  '!bg-ui-black-200': currentNoteId === note.id,
                })
              "
              @click="onClickNoteTile(note.id)"
            />
          </div>
        </div>
      </div>

      <NuxtPage />
    </div>
  </div>
</template>
