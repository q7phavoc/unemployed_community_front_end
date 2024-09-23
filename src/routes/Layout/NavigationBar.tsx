//import {Link} from 'react-router-dom'
import {Link as RRLink} from 'react-router-dom'
import {Link} from '../../components'
import {useAuth} from '../../contexts'

export default function NavigationBar() {
  const {loggedUser} = useAuth()
  // prettier-ignore
  return (
    <div className="flex justify-between overflow bg-base-100 h-24">
      <div className="flex p-2">
        <Link to="/" className="btn btn-link"><img className='object-scale-down w-24 rounded-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src={require('../../assets/logo.png')} alt="Link to Home" /></Link>
      </div>
      <div className="flex p-2 navBar items-center">
        <Link to="/" className="btn btn-link">홈</Link>
        {loggedUser && (<Link to="/board" className="ml-4 btn btn-link">게시판</Link>)}
        {loggedUser && (<Link to="/community" className="ml-4 btn btn-link">커뮤니티</Link>)}
        {loggedUser && (<Link to="/course" className="ml-4 btn btn-link">교육 자료</Link>)}
        {loggedUser && (<Link to="/event" className="ml-4 btn btn-link">이벤트</Link>)}
        {loggedUser && (<Link to="/profile" className="ml-4 btn btn-link">프로필</Link>)}
      </div>
      <div className="flex items-center p-2">
        {!loggedUser && (<RRLink to="/login" className="btn btn-sm btn-primary">로그인</RRLink>)}
        {!loggedUser && (<RRLink to="/signup" className="ml-4 btn btn-sm btn-outline btn-primary">회원가입</RRLink>)}
        {loggedUser && (<RRLink to="/logout" className="btn btn-sm btn-outline btn-primary">로그아웃</RRLink>)}
      </div>
    </div>
  )
}
