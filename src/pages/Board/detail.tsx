import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { IBoard } from '../../store/commonTypes';
import { BACKEND_URL, BOARD_CATEGORY } from '../../data';
import { useNavigate, useParams } from 'react-router-dom'; // useNavigate 훅을 추가

// 게시글 작성 페이지 컴포넌트
const BoardDetail: React.FC = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 얻기
  const { id } = useParams();

  // 게시글 상태 관리
  const [board, setBoard] = useState<Omit<IBoard, 'id' | 'created_at' | 'comment_count' | 'view_count'>>({
    title: '',
    contents: '',
    board_category: BOARD_CATEGORY[0],
    writer_id: 1,  // 작성자의 id를 하드코딩. 실제 구현에서는 로그인 사용자 정보를 이용
  });

  // 입력값 변경 핸들러
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBoard(prevBoard => ({
      ...prevBoard,
      [name]: value,
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // 여기에 API로 데이터를 전송하는 로직을 추가할 수 있음
    console.log('작성된 게시글 데이터:', board);
    if (id) {
      try {
        const response = await fetch(BACKEND_URL + `/board/${id}`, {
          method: id ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(board),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('게시글이 성공적으로 저장되었습니다:', result);
          navigate("/board");
        } else {
          const errorData = await response.json();
          console.error('게시글 저장에 실패했습니다:', errorData.message);
        }
      } catch (error) {
        console.error('게시글 저장 중 오류 발생:', error);
      }
    } else {
      try {
        const response = await fetch(BACKEND_URL + '/board/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(board),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('게시글이 성공적으로 작성되었습니다:', result);
          navigate("/board");
        } else {
          const errorData = await response.json();
          console.error('게시글 작성에 실패했습니다:', errorData.message);
        }
      } catch (error) {
        console.error('게시글 작성 중 오류 발생:', error);
      }
    }
  };

  const handleCancel = () => {
    navigate("/board");
  };

  useEffect(() => {
    console.log(id);
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }

      const res = await fetch(BACKEND_URL + `/board/${id}`, requestOptions);
      const result = await res.json();
      return result;
    }

    if (id) fetchData().then(res => setBoard(res));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">{id ? "게시글 수정" : "게시글 작성"}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 제목 입력 필드 */}
        <div className="flex flex-col">
          <label htmlFor="title" className="font-semibold text-gray-700 mb-2">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            value={board.title}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="제목을 입력하세요"
            required
          />
        </div>

        {/* 내용 입력 필드 */}
        <div className="flex flex-col">
          <label htmlFor="contents" className="font-semibold text-gray-700 mb-2">내용</label>
          <textarea
            id="contents"
            name="contents"
            value={board.contents}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
            placeholder="내용을 입력하세요"
            required
          />
        </div>

        {/* 카테고리 선택 필드 */}
        <div className="flex flex-col">
          <label htmlFor="board_category" className="font-semibold text-gray-700 mb-2">카테고리</label>
          <select
            id="board_category"
            name="board_category"
            value={board.board_category}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            {BOARD_CATEGORY.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* 제출 버튼 및 취소 버튼 */}
        <div className="text-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {id ? "수정하기" : "작성하기"}
          </button>
          <button
            type="button" // 타입을 button으로 설정하여 폼 제출하지 않도록 변경
            onClick={handleCancel} // 취소 버튼 클릭 시 handleCancel 호출
            className="bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-400 transition duration-300"
          >
            취소하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardDetail;
