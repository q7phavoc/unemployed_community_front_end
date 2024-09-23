import type {FC} from 'react'
import type {ICard} from '../../data'
import {CardDraggable} from '../../components'
import {Div, Avatar} from '../../components'
import {Icon} from '../../theme/daisyui'
import CarouselBasicExample from '../../components/Carousel'
import Carousel from '../../components/Carousel'
import JobList from '../../components/JobList'
import PopularPosts from '../../components/PopularPosts'
import RecommendedCourses from '../../components/RecommendedCourses'
import OngoingEvents from '../../components/OngoingEvents'

export type UserCardProps = {
  // card: ICard
  // onRemove?: () => void
  // onClick?: () => void
  // draggableId: string
  // index: number
}

const ListCard: FC<UserCardProps> = () => {
  // const {image, writer} = card
  // const {avatar, name, jobTitle} = writer

  const images = [
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
  ];

  // 메인화면(인기 게시글, 인기 사용자, today 방문, total 방문, 놀이 게시판, 교육 게시판, 취업 게시판)
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <p>today 방문 : 10명</p>
          <p>total 방문 : 2010명</p>
          <p>이번주 인기 사용자 : sdfdsf</p>
          <p>total 인기 사용자 : sdfdsf</p>
        </div>
        <Carousel items={images} autoSlideInterval={3000} />
        <div></div>
      </div>
      
      <JobList />
      <PopularPosts />
      <RecommendedCourses />
      <OngoingEvents />
      <p>놀이 게시판</p>
    </div>
  )
}
export default ListCard
