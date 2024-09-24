import { Link as RRLink } from 'react-router-dom';
import { Link } from '../../components';
import { useAuth } from '../../contexts';

export default function NavigationBar() {
  const { loggedUser } = useAuth();

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-blue-500 h-16 p-4 shadow-lg">
      <div className="flex items-center">
        <Link to="/" className='bg-transparent'>
          <img
            className="bg-transparent object-cover w-20 rounded-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            src={require('../../assets/logo.png')}
            alt="Link to Home"
          />
        </Link>
      </div>
      <div className="flex space-x-8">
        <Link to="/" className="bg-transparent text-lg font-bold text-white transition hover:text-yellow-300 focus:text-yellow-300">홈</Link>
        {loggedUser && (
          <>
            <Link to="/board" className="bg-transparent text-lg font-bold text-white transition hover:text-yellow-300 focus:text-yellow-300">게시판</Link>
            <Link to="/community" className="bg-transparent text-lg font-bold text-white transition hover:text-yellow-300 focus:text-yellow-300">커뮤니티</Link>
            <Link to="/course" className="bg-transparent text-lg font-bold text-white transition hover:text-yellow-300 focus:text-yellow-300">교육 자료</Link>
            <Link to="/event" className="bg-transparent text-lg font-bold text-white transition hover:text-yellow-300 focus:text-yellow-300">이벤트</Link>
            <Link to="/profile" className="bg-transparent text-lg font-bold text-white transition hover:text-yellow-300 focus:text-yellow-300">프로필</Link>
          </>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {!loggedUser ? (
          <>
            <RRLink to="/login" className="btn btn-sm bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-transparent hover:text-white rounded-md px-4 py-2 transition">로그인</RRLink>
            <RRLink to="/signup" className="btn btn-sm bg-transparent border-2 border-green-500 text-green-500 hover:bg-transparent hover:text-white rounded-md px-4 py-2 transition">회원가입</RRLink>
          </>
        ) : (
          <RRLink to="/logout" className="btn btn-sm bg-transparent border-2 border-red-500 text-red-500 hover:bg-transparent hover:text-white rounded-md px-4 py-2 transition">로그아웃</RRLink>
        )}
      </div>
    </div>
  );
}
