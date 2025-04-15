import { piniaPluginPersistedstate } from '#imports';
import { randomUUID } from '$shared/utils/misc';
import { defineStore } from 'pinia';
import {
  NoteType,
  type NoteCheckboxValue,
  type NoteEntity,
} from '~/shared/api/entities/note.entity';

const ID = 'note_repository';

type StateTree = {
  notes: NoteEntity[];
};

export const useNoteRepository = defineStore(ID, {
  state: (): StateTree => ({
    notes: [],
  }),

  getters: {
    lastOpenedNotes(state) {
      return state.notes.filter((note) => note.lastOpenedAt);
    },

    sortedByDateNotes(state) {
      return [...state.notes].sort((a, b) => {
        const dateA = a.updatedAt || a.createdAt;
        const dateB = b.updatedAt || b.createdAt;

        return new Date(dateB).getTime() - new Date(dateA).getTime();
      });
    },
  },

  actions: {
    createNote() {
      this.notes.push({
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lastOpenedAt: null,
        title: 'New Note',
        type: NoteType.DEFAULT,
        text: '',
      });
    },

    getNoteById(id: string) {
      const note = this.notes.find((note) => note.id === id);

      if (!note) return null;

      return note;
    },

    noteWasOpened(id: string) {
      const note = this.getNoteById(id);

      if (!note) return;

      note.lastOpenedAt = new Date().toISOString();

      if (this.lastOpenedNotes.length > 10) {
        const oldestOpenedNote = this.lastOpenedNotes.reduce((oldest, current) => {
          if (!oldest.lastOpenedAt || !current.lastOpenedAt) return oldest;
          return new Date(oldest.lastOpenedAt).getTime() < new Date(current.lastOpenedAt).getTime()
            ? oldest
            : current;
        });

        if (oldestOpenedNote && oldestOpenedNote.lastOpenedAt) {
          oldestOpenedNote.lastOpenedAt = null;
        }
      }
    },

    deleteNote(id: string) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },

    updateNote(id: string, note: Partial<NoteEntity>) {
      const index = this.notes.findIndex((note) => note.id === id);

      if (index === -1) return;

      this.notes[index] = {
        ...this.notes[index],
        ...note,
        updatedAt: new Date().toISOString(),
      } as NoteEntity;
    },

    addCheckbox(id: string, value: NoteCheckboxValue) {
      const index = this.notes.findIndex((note) => note.id === id);

      if (index === -1) return;

      if (this.notes[index].type !== NoteType.CHECKBOX) return;

      this.notes[index] = {
        ...this.notes[index],
        values: [...(this.notes[index].values || []), value],
      };
    },

    removeCheckbox(id: string, checkboxId: string) {
      const index = this.notes.findIndex((note) => note.id === id);

      if (index === -1) return;

      if (this.notes[index].type !== NoteType.CHECKBOX) return;

      this.notes[index] = {
        ...this.notes[index],
        values: this.notes[index].values?.filter((v) => v.id !== checkboxId),
      };
    },
  },

  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
