import React, { useState } from 'react';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  comments: number;
  views: number;
}

const posts: Post[] = [
  { id: 1, title: 'React를 활용한 취업 정보', author: '홍길동', date: '2023-09-21', comments: 5, views: 120 },
  { id: 2, title: '취업 후기: ABC 주식회사', author: '김철수', date: '2023-09-20', comments: 2, views: 95 },
  { id: 3, title: '자기계발을 위한 필독서', author: '이영희', date: '2023-09-19', comments: 3, views: 150 },
  { id: 4, title: 'Q&A: 면접 준비 질문', author: '박민수', date: '2023-09-18', comments: 8, views: 200 },
];

const Board: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('취업 정보');

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">게시판</h2>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          {['취업 정보', '취업 후기', 'Q&A', '자기계발'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          글쓰기
        </button>
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
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-100 cursor-pointer" onClick={() => alert(`게시글 ${post.id} 상세 페이지로 이동`)}>
                <td className="border px-4 py-2">{post.title}</td>
                <td className="border px-4 py-2">{post.author}</td>
                <td className="border px-4 py-2">{post.date}</td>
                <td className="border px-4 py-2">{post.comments}</td>
                <td className="border px-4 py-2">{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Board;
