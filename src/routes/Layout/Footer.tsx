import * as D from '../../data'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-5 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4">
          <h3 className="font-bold mb-2">사이트 맵</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">홈</a></li>
            <li><a href="#" className="hover:underline">채용 공고</a></li>
            <li><a href="#" className="hover:underline">인기 게시판</a></li>
            <li><a href="#" className="hover:underline">추천 교육</a></li>
            <li><a href="#" className="hover:underline">이벤트</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">회사 정보</h3>
          <p>회사명: ABC 주식회사</p>
          <p>주소: 서울특별시 예시구 예시로 123</p>
          <p>연락처: 010-1234-5678</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">이용 약관</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">이용 약관</a></li>
            <li><a href="#" className="hover:underline">개인정보 처리방침</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">SNS 링크</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} ABC 주식회사. 모든 권리 보유.</p>
      </div>
    </footer>
  )
}
