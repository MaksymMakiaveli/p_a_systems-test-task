import { defineStore } from 'pinia';

export const useNoteRepository = defineStore('note_repository', {
  state: () => ({
    notes: [],
  }),
});
