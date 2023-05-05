export interface Branch {
  id: number
  opened: boolean
  title: string
  content: string
  mask: string
  towel: string
  fountain: string
  locker_room: string
  schedules: Schedule[]
}
  
export interface Schedule {
  weekdays: string
  hour: string
}

export interface Context<T> {
  initialBranches: string[],
  setInitialBranches: (branches: string[]) => void,
  branches: string[],
}
