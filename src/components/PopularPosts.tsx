import React from 'react';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
}

const posts: Post[] = [
  { id: 1, title: 'React의 새로운 기능', author: '홍길동', date: '2023-09-21' },
  { id: 2, title: 'Tailwind CSS로 스타일링하기', author: '김철수', date: '2023-09-20' },
  { id: 3, title: 'TypeScript 기본 개념', author: '이영희', date: '2023-09-19' },
  { id: 4, title: '최신 웹 트렌드', author: '박민수', date: '2023-09-18' },
  { id: 5, title: '프론트엔드 개발자의 필수 도구', author: '최지우', date: '2023-09-17' },
];

const PopularPosts: React.FC = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4 text-center">인기 게시판</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-64 border p-3 rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-600">작성자: {post.author}</p>
            <p className="text-gray-500">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
