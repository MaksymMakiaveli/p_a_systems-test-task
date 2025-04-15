<script setup lang="ts">
  import { navigateTo, useRoute } from '#app';
  import { NoteTile } from '$entities/notes/ui/note-tile';
  import { useNoteRepository } from '$shared/api/repositories/note.repository';
  import { computed, ref } from 'vue';
  import { ROUTER_BOOK } from '~/kernel/routes/router-book';
  import { Modal } from '~/shared/ui/modal';
  import { DateFormatter } from '~/shared/utils/date';
  import { cn } from '~/shared/utils/misc';

  const noteRepository = useNoteRepository();

  const route = useRoute();

  const isModalOpen = ref(false);

  const onClickNoteTile = async (noteId: string) => {
    await navigateTo({ path: ROUTER_BOOK.note.particular({ noteId }) });
  };

  const currentNoteId = computed(() => route.params.noteId);

  const onDeleteNote = async (noteId: string) => {
    noteRepository.deleteNote(noteId);
    isModalOpen.value = false;

    if (currentNoteId.value === noteId) {
      await navigateTo({ path: ROUTER_BOOK.note.root() });
    }
  };
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
              @click:close="isModalOpen = true"
            />
          </div>
        </div>
      </div>

      <NuxtPage />
    </div>
    <Modal.Root v-model:open="isModalOpen">
      <Modal.Portal>
        <Modal.Content class="w-[300px]">
          <template #title>
            <h6 class="text-18 font-medium">Do you want to delete this note?</h6>
          </template>

          <div class="flex gap-2 pt-3">
            <button
              class="bg-ui-black-200 text-14 grow cursor-pointer rounded-md px-4 py-2 font-medium"
              @click="isModalOpen = false"
            >
              Cancel
            </button>
            <button
              class="bg-ui-black-200 text-14 grow cursor-pointer rounded-md px-4 py-2 font-medium"
              @click="onDeleteNote(currentNoteId as string)"
            >
              Delete
            </button>
          </div>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  </div>
</template>
