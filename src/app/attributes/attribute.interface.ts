
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
  InstanceNo: number,
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

}

export interface ValueFromFileDefinition {

}

export interface TimeFromFileDefinition {

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