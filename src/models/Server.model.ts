import { IPlayer } from '../../proto/ServerClientMessage'

export interface Server {
  id?: string
  domain?: string
  ip: string
  port: number
  name?: string
  description?: string
  players?: IPlayer[]
  countryCode?: string
  gameMode?: number
  version?: string
  passwordRequired?: boolean | null
  isDedicated?: boolean
}
