import { Method } from '../methods/method.interface';

export interface Container {
  ContainerName: string,
  PlantAreaName: string,
  ContainerTypeName: string,
  ContainerNumber?: number,
  MaxQuantity?: number,
  ContainerKey?: number,
  ContainerTypeKey?: number,
  PlantAreaKey?: number,
  DefaultBatchName?: string,
  SeedNumber?: number,
  Count?: number,
  CurrentStatus?: string,
  Methods?: Method[] 
}
