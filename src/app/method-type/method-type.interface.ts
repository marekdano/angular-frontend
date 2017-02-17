
export interface MethodType {
  MethodTypeName: string,
  MethodTypeDescription: string,
  AttributesAvailable: AttributeAvailable[]
}

export interface AttributeAvailable {
  AttributeTypeId: number,
  AttributeTypeName: string,
  AttributeTypeDescription: string,
  IsRequired: boolean,
  IsMaster: boolean
}