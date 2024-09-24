import { BACKEND_URL } from './constants'

export type IBoard = {
  id: number
  title: string
  contents: string
  board_category: string
  writer_id: number
  created_at: Date
  comment_count: number
  view_count: number
}

const convertBoard = (result: unknown) => {
  const {
    id,
    title,
    contents,
    board_category,
    writer_id,
    created_at,
    comment_count,
    view_count
  } = result as IBoard
  return {
    id,
    title,
    contents,
    board_category,
    writer_id,
    created_at,
    comment_count,
    view_count
  }
}

export const fetchBoardList = async (): Promise<IBoard[]> => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'React POST Request Example' })
  }

  return (await fetch(BACKEND_URL + '/board/list', requestOptions)).json();
}
