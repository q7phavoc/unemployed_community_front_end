import React, { useState } from 'react';

interface Resource {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  rating: number;
}

const resources: Resource[] = [
  { id: 1, title: 'React 기초', instructor: '김철수', duration: '5시간', rating: 4.5 },
  { id: 2, title: 'Python으로 데이터 분석하기', instructor: '이영희', duration: '6시간', rating: 4.8 },
  { id: 3, title: 'JavaScript 심화', instructor: '박민수', duration: '4시간', rating: 4.3 },
];

const Course: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('취업 강의');

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">교육 자료</h2>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          {['취업 강의', '블로그/기사', '추천 강의'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${selectedTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{selectedTab} 리스트</h3>
        {resources.map((resource) => (
          <div key={resource.id} className="border p-3 mb-2 bg-white rounded shadow-sm">
            <h4 className="font-bold">{resource.title}</h4>
            <p>강의자: {resource.instructor}</p>
            <p>강의 시간: {resource.duration}</p>
            <p>평점: {resource.rating} / 5</p>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              수강하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
