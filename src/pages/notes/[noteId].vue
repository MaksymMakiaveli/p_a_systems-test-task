<script setup lang="ts">
  import { useNoteIdModelView } from '~/composables/pages/noteId/noteId.module';
  import { NoteCheckboxSection } from '~/features/note/note-checkbox-section';
  import { NoteImageSection } from '~/features/note/note-image-section';
  import { NoteType } from '~/shared/api/entities/note.entity';
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '~/shared/ui/select';
  import { DateFormatter } from '~/shared/utils/date';

  const { data, actions } = useNoteIdModelView();

  const { note } = data;
</script>

<template>
  <div class="flex h-full w-full flex-col">
    <div v-if="note" class="flex h-full grow flex-col gap-5 pt-12.5">
      <div class="px-12.5">
        <div>
          <input
            v-if="note"
            :value="note.title"
            class="text-32 w-full font-semibold"
            placeholder="Untitled"
            @input="actions.onChangeTitle"
          />
        </div>

        <div class="flex flex-col pt-7.5">
          <div class="border-ui-black-300 flex items-center gap-3 border-b py-3.5">
            <div class="text-ui-gray-300 flex w-25 items-center gap-5">
              <Icon name="mdi:calendar-month" class="text-18" />
              <span class="text-14">Date</span>
            </div>
            <span class="text-14 text-white underline">{{
              DateFormatter.formatDefault(note?.createdAt)
            }}</span>
          </div>
          <div class="flex items-center gap-3 py-3.5">
            <div class="text-ui-gray-300 flex w-25 items-center gap-5">
              <Icon name="mdi:format-list-bulleted-type" class="text-18" />
              <span class="text-14">Type</span>
            </div>
            <Select
              v-if="note"
              :model-value="note.type"
              @update:model-value="actions.onChangeNoteType"
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="noteType in Object.values(NoteType)"
                  :key="noteType"
                  :value="noteType"
                >
                  {{ noteType }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div
        class="scrollbar-thumb-ui-black-200 scrollbar-track-transparent flex grow flex-col overflow-hidden"
      >
        <div class="scrollbar-thin overflow-y-auto px-12.5 pb-6">
          <textarea
            :value="note.text"
            autocomplete="off"
            spellcheck="false"
            class="text-14 field-sizing-content w-full resize-none outline-none"
            placeholder="Type your note here..."
            @input="actions.onChangeText"
          />

          <NoteImageSection
            v-if="note.type === NoteType.IMAGE"
            :src="note.imageSrc"
            @update:src="actions.onUploadImage"
            @delete:image="actions.onDeleteImageNote"
          />

          <NoteCheckboxSection
            v-if="note.type === NoteType.CHECKBOX"
            :value="note.values"
            @update:value="actions.onUpdateCheckboxValue"
            @add:checkbox="actions.onAddCheckbox"
            @remove:checkbox="actions.onRemoveCheckbox"
          />
        </div>
      </div>
    </div>
  </div>
</template>
