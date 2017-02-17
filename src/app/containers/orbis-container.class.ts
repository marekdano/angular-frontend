import { Container } from './container.interface';
import { Method } from '../methods/method.interface';

export class OrbisContainer implements Container {
    
  constructor(
    public ContainerName: string,
    public PlantAreaName: string,
    public ContainerTypeName: string,
    public MaxQuantity: number,
    public DefaultBatchName: string,
    public ContainerNumber: number,
    public ContainerKey?: number,
    public PlantAreaKey?: number,
    public ContainerTypeKey?: number,
    public CurrentStatus?: string,
    public SeedNumber?: number,
    public Count?: number,
    public Methods?: Method[] ) {}
}