import {BACKEND_URL} from './constants'

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

const convertRandomUser = (result: unknown) => {
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

export const fetchBoardList = (): Promise<IBoard> =>
  new Promise((resolve, reject) => {
    fetch(BACKEND_URL + '/board/list')
      .then(res => res.json())
      .then((data: unknown) => {
        console.log(data)
        const {results} = data as {results: IBoard[]}
        resolve(convertRandomUser(results[0]))
      })
  })
