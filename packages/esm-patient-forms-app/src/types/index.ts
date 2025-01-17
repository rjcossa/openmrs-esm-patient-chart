export interface Form {
  uuid: string;
  name: string;
  published: boolean;
  retired: boolean;
  encounterTypeUuid?: string;
  encounterTypeName?: string;
  complete?: boolean;
}

export interface Encounter {
  uuid: string;
  encounterDateTime: Date;
  encounterTypeUuid?: string;
  encounterTypeName?: string;
  form?: Form;
}
