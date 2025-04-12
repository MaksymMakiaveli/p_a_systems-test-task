export enum NoteType {
  DEFAULT = 'DEFAULT',
  IMAGE = 'IMAGE',
  CHECKBOX = 'CHECKBOX',
}

export type NoteBase = {
  id: string;

  createdAt: Date;

  updatedAt: Date;

  title: string;
};

export type NoteDefault = NoteBase & { type: NoteType.DEFAULT } & {
  text: string;
};

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
