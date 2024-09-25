import type {ICard} from '../data'

export type UUID = string
export type List = {
  uuid: UUID
  title: string
}

export type Card = ICard
export type CardidListid = {
  cardid: UUID
  listid: UUID
}
export type ListidCardid = CardidListid
export type ListidCardidS = {listid: UUID; cardids: UUID[]}
export type CardidListidIndex = CardidListid & {
  index: number
}


export type IBoard = {
  id: number
  title: string
  contents: string
  board_category: string
  writer_id: number
  created_at: string
  comment_count: number
  view_count: number
}

export interface IGroup {
  id: number
  name: string
  description: string
  participants: number
}

export interface ICourse {
  id: number
  title: string
  instructor: string
  duration: string
  rating: number
}

export interface IEvent {
  id: number;
  name: string;
  description: string;
  participants: number;
  timeLeft: string;
}