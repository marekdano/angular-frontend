import { MethodTypeAttribute } from '../attributes/attribute.interface'; 

export interface Method {
  Id: number,
  MethodTypeId: number,
  MethodName: string,
  DestinationUnitId: number, 
  UnitId?: number,
  AllowableAttributes?: MethodTypeAttribute[]
}