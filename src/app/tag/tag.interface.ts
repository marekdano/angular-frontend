import { TagAlias } from '../attributes/attribute.interface';

export interface Tag {
  Name: string,
  Source: string,
  Id?: number,
  TimeField?: string,
  ValueField?: string,
  Description?: string,
  TagAliases?: TagAlias[]
}