import { MethodTypeAttribute } from '../attributes/attribute.interface'; 

export interface Method {
  Id: number,
  MethodTypeId: number,
  MethodName: string,
  DestinationUnitId: number, 
  MethodEnabled: boolean,
  LastExecutionTime?: string,
  UnitId?: number,
  AllowableAttributes?: MethodTypeAttribute[]
}