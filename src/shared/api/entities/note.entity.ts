export enum NoteType {
  DEFAULT = 'DEFAULT',
  IMAGE = 'IMAGE',
  CHECKBOX = 'CHECKBOX',
}

export type NoteBase = {
  id: string;

  /**
   * @description The date and time the note was created. ISO 8601 format.
   * @value string
   */
  createdAt: string;

  /**
   * @description The date and time the note was last updated. ISO 8601 format.
   * @value string
   */
  updatedAt: string;

  /**
   * @description The date and time the note was last opened. ISO 8601 format.
   * @value string | null
   */

  lastOpenedAt: string | null;

  title: string;

  text: string;
};

export type NoteDefault = NoteBase & { type: NoteType.DEFAULT };

export type NoteImage = NoteBase & { type: NoteType.IMAGE } & {
  imageSrc: string;
};

export type NoteCheckbox = NoteBase & { type: NoteType.CHECKBOX } & {
  values: NoteCheckboxValue[];
};

export type NoteCheckboxValue = {
  id: string;

  checked: boolean;

  label: string;
};

export type NoteEntity = NoteDefault | NoteImage | NoteCheckbox;
