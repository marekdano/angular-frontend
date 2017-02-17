
export interface Frequency {
  Id: string,
  PeriodUnit: TimeUnit,
  PeriodValue: number,
  Description: string
}

export interface TimeUnit {
  Id: number,
  Name: string
}