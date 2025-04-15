<script setup lang="ts">
  import { NuxtLink } from '#components';
  import PlusIcon from '$assets/icons/plus.svg';
  import { NoteIcon } from '$entities/notes/ui';
  import { ROUTER_BOOK } from '$kernel/routes/router-book';
  import { useNoteRepository } from '$shared/api/repositories/note.repository';

  const noteRepository = useNoteRepository();
</script>

<template>
  <div class="flex h-full w-full">
    <aside class="flex h-full w-full max-w-75 shrink-0 flex-col">
      <div class="pt-7.5">
        <div class="px-5">
          <NuxtLink :to="ROUTER_BOOK.root()" class="font-kaushan text-2xl">Inkwell</NuxtLink>
        </div>
      </div>
      <div class="px-5 pt-7.5">
        <button
          class="bg-ui-gray-900 hover:bg-ui-gray-700 flex h-10 w-full cursor-pointer items-center justify-center gap-2 px-4 transition-colors"
          @click="noteRepository.createNote()"
        >
          <PlusIcon />
          New Note
        </button>
      </div>

      <div class="flex grow flex-col overflow-hidden pt-7.5">
        <div class="px-5 pb-2">
          <span class="text-ui-gray-300">Recent</span>
        </div>

        <div
          class="scrollbar-thumb-ui-black-200 scrollbar-track-transparent flex grow flex-col overflow-hidden"
        >
          <ul class="scrollbar-thin h-full grow overflow-y-auto pb-4">
            <li v-for="note in noteRepository.lastOpenedNotes" :key="note.id">
              <NuxtLink
                :to="ROUTER_BOOK.note.particular({ noteId: note.id })"
                active-class="!text-ui-white bg-ui-indigo"
                class="text-ui-gray-300 hover:text-ui-gray-100 flex items-center gap-3 px-5 py-2.5 transition-colors"
              >
                <NoteIcon :note-type="note.type" class="text-24 shrink-0" />
                <span class="truncate">{{ note.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>
