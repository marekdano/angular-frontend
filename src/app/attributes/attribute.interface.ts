
export interface MethodTypeAttribute {
  AttributeTypeId: number,
  AttributeTypeName: string,
  IsRequired: boolean,
  IsMaster: boolean,
  AttributeTypeDescription?: string,
  AttributeAndValue?: AttributeAndValue[],
}

export interface AttributeAndValue {
  Id: number,
  ValueConfigId: number,
  AttributeTypeId: number,
  ValueConfig: ValueConfig[],
  InstanceNo: string,
  LastProcessedTime?: Date,
  LastValue?: string  
}

export interface ValueConfig {
  CalculationTypeId: number,
  StartTimeConfig: TimeConfig,
  EndTimeConfig: TimeConfig,
  Tag: Tag,
  SqlQuery: SqlQuery,
  ValueFromFileDefinition: ValueFromFileDefinition,
  DefaultValue?: string,
  MultiplyBy?: number
  InterpolateHistory?: boolean,
  ReadValueAfter?: boolean,
  LocalBehaviour?: boolean
}

export interface Tag {
  Name: string,
  Source: string,
  Id?: number,
  TimeField?: string,
  ValueField?: string,
  Description?: string,
  TagAliases?: TagAlias[]
}


// TypeConfig

export interface SqlQuery {
  Query: string,
  QueryTypeId: number,
  Id?: number,
  Parameters: string
}

export interface ValueFromFileDefinition {
  FileSource: FileSource,
  ColumnValue: string,
  IsColumnValueIndex: boolean,
  Id?: number,
  FilterByColumn?: FilterByColumn
}

export interface TimeFromFileDefinition {
  FileSource: FileSource,
  DateColumn: string,
  AreColumnsIndexes: boolean,
  Id?: number,
  TimeColumn?: string,
  OffsetInSeconds?: number,
  FilterByColumn?: FilterByColumn 
}

export interface FileSource {
  FileFullName: string,
  FileTypeId: number,
  ColumnNamesInFirstRow: boolean,
  Id?: number,
  Tab?: string,
  IsTabIndex?: boolean
}

export interface FilterByColumn {
  FilterColumn: string,
  FilterValue: string,
  IsFilterColumnTheIndex: boolean,
  ConditionId: number,
  Id?: number,
  OptionalSecondFilterValue: string
}

export interface TimeConfig {
  TimeConfigTypeId: number,
  TimeFromTagDefinition?: TimeFromTagDefinition
  PeriodicTimeDefinition: PeriodicTimeDefinition,
  TimeFromSqlQuery: SqlQuery,
  TimeFromFileDefinition: TimeFromFileDefinition
}

export interface TimeFromTagDefinition {
  Id: number,
  Tag: Tag,
  ConditionId: number,
  Value: string,
  OptionalSecondValue?: string,
  OffsetInSeconds?: number 
}

export interface PeriodicTimeDefinition {
  FrequencyId: number,
  OffsetInSeconds: number,
  ResetTimeUnitId: number
}

export interface TagAlias {
  Id: number,
  ValueFromTag: string,
  Alias: string
}


export interface TimeConfigType {
  Id: number,
  Name: string,
  Description: string
}