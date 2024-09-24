import React, { useEffect, useState } from 'react'
import { BACKEND_URL, BOARD_CATEGORY } from '../../data'
import { convertISODateToYYYYMMDD } from '../../utils/date'
import { IBoard } from '../../store/commonTypes'
import { Link, useNavigate } from 'react-router-dom'

const Board: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('가입인사')
  const [posts, setPosts] = useState<IBoard[]>([])
  const [total, setTotal] = useState<number>(1) // Current page
  const [currentPage, setCurrentPage] = useState<number>(1) // Current page
  const [postsPerPage] = useState<number>(10) // Number of posts per page
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 얻기

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }

      const res = await fetch(BACKEND_URL + '/board/list', requestOptions);
      const result = await res.json();
      setTotal(result.total);
      return result.boards;
    }

    fetchData().then(res => setPosts(res));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }

      // const params = {
      //   category: selectedCategory
      // };

      const params = `category=${selectedCategory}&limit=${postsPerPage}&offset=${(currentPage - 1) * postsPerPage}`;
      const queryString = new URLSearchParams(params).toString();

      const res = await fetch(BACKEND_URL + `/board/list?${queryString}`, requestOptions);
      const result = await res.json();
      setTotal(result.total);
      return result.boards;
    }

    fetchData().then(res => setPosts(res));
  }, [selectedCategory, currentPage, postsPerPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(total / postsPerPage); // Calculate total pages

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">게시판</h2>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          {BOARD_CATEGORY.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${
                selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        <Link to={'/board/detail'}>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            글쓰기
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">제목</th>
              <th className="border px-4 py-2 text-left">작성자</th>
              <th className="border px-4 py-2 text-left">작성일</th>
              <th className="border px-4 py-2 text-left">댓글 수</th>
              <th className="border px-4 py-2 text-left">조회 수</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map(post => (
                <tr
                  key={post.id}
                  className="hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate(`/board/detail/${post.id}`)} // 클릭 시 게시글 ID로 상세 페이지로 이동
                >
                  <td className="border px-4 py-2">{post.title}</td>
                  <td className="border px-4 py-2">{post.writer_id}</td>
                  <td className="border px-4 py-2">{convertISODateToYYYYMMDD(post.created_at)}</td>
                  <td className="border px-4 py-2">{post.comment_count}</td>
                  <td className="border px-4 py-2">{post.view_count}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center border px-4 py-2">
                  게시글이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-l hover:bg-blue-700"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default Board
