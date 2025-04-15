import { navigateTo } from '#app';
import debounce from 'lodash.debounce';
import type { AcceptableValue } from 'reka-ui';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { NoteCheckboxSectionValue } from '~/features/note/note-checkbox-section';
import { ROUTER_BOOK } from '~/kernel/routes/router-book';
import { NoteType, type NoteEntity } from '~/shared/api/entities/note.entity';
import { useNoteRepository } from '~/shared/api/repositories/note.repository';
import { randomUUID } from '~/shared/utils/misc';

export function useNoteIdModelView() {
  const route = useRoute();

  const noteRepository = useNoteRepository();

  const noteState = ref<NoteEntity | null>(null);

  const noteId = computed(() => {
    return route.params.noteId as string;
  });

  const onUpdateNote = debounce((value: Omit<NoteEntity, 'id'>) => {
    noteRepository.updateNote(noteId.value, value);
  }, 300);

  const onChangeTitle = (event: Event) => {
    if (!noteState.value) return;

    const target = event.target as HTMLInputElement;

    const updatedValue = {
      ...noteState.value,
      title: target.value.trim(),
    };

    noteState.value = updatedValue;

    onUpdateNote(updatedValue);
  };

  const onChangeNoteType = (value: AcceptableValue) => {
    if (!noteState.value) return;

    const updatedValue = {
      ...noteState.value,
      type: value as NoteType,
    };

    if (noteState.value.type !== updatedValue.type) {
      if (noteState.value.type === NoteType.IMAGE && 'imageSrc' in updatedValue) {
        updatedValue.imageSrc = '';
      }

      if (noteState.value.type === NoteType.CHECKBOX && 'values' in updatedValue) {
        updatedValue.values = [];
      }
    }

    noteState.value = updatedValue as NoteEntity;

    onUpdateNote(updatedValue);
  };

  const onChangeText = (event: Event) => {
    if (!noteState.value) return;

    const target = event.target as HTMLTextAreaElement;

    const updatedValue = {
      ...noteState.value,
      text: target.value.trim(),
    };

    noteState.value = updatedValue;

    onUpdateNote(updatedValue);
  };

  const onUploadImage = (src: string) => {
    if (!noteState.value || noteState.value.type !== NoteType.IMAGE) return;

    noteState.value.imageSrc = src;

    onUpdateNote({ imageSrc: src } as Extract<NoteEntity, { type: NoteType.IMAGE }>);
  };

  const onAddCheckbox = () => {
    if (!noteState.value || noteState.value.type !== NoteType.CHECKBOX) return;

    const currentNote = noteRepository.getNoteById(noteState.value.id);

    if (!currentNote || currentNote.type !== NoteType.CHECKBOX) return;

    const newCheckbox = {
      id: randomUUID(),
      label: '',
      checked: false,
    };

    noteState.value.values = [...(noteState.value.values || []), newCheckbox];

    noteRepository.addCheckbox(noteState.value.id, newCheckbox);
  };

  const onRemoveCheckbox = (id: string) => {
    if (!noteState.value || noteState.value.type !== NoteType.CHECKBOX) return;

    noteState.value.values = noteState.value.values?.filter((v) => v.id !== id);

    noteRepository.removeCheckbox(noteState.value.id, id);
  };

  const onUpdateCheckboxValue = (value: NoteCheckboxSectionValue) => {
    if (!noteState.value || noteState.value.type !== NoteType.CHECKBOX) return;

    const currentValue = noteState.value.values?.find((v) => v.id === value.id);

    if (!currentValue) return;

    const updatedCheckboxValue = {
      ...currentValue,
      ...value,
    };

    noteState.value.values = noteState.value.values?.map((v) =>
      v.id === value.id ? updatedCheckboxValue : v,
    );

    onUpdateNote({ values: noteState.value.values } as Extract<
      NoteEntity,
      { type: NoteType.CHECKBOX }
    >);
  };

  onMounted(() => {
    if (noteRepository.notes.length <= 0) {
      return navigateTo(ROUTER_BOOK.note.root());
    }

    const currentNote = noteRepository.getNoteById(noteId.value);

    if (!currentNote) return navigateTo(ROUTER_BOOK.note.root());

    noteRepository.noteWasOpened(noteId.value);

    noteState.value = {
      ...currentNote,
    };
  });

  return {
    data: {
      note: noteState,
    },
    actions: {
      onChangeTitle,
      onChangeNoteType,
      onChangeText,
      onUploadImage,
      onAddCheckbox,
      onRemoveCheckbox,
      onUpdateCheckboxValue,
    },
  };
}
