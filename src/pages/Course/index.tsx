import React, { useState } from 'react';

const Course: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'courses' | 'articles' | 'recommended'>('courses');

  const resources = {
    courses: [
      { id: 1, title: '웹 개발 기초', instructor: '김철수', duration: '10시간', rating: '4.5' },
      { id: 2, title: '데이터 분석 입문', instructor: '이영희', duration: '8시간', rating: '4.7' },
    ],
    articles: [
      { id: 1, title: '2023년 IT 취업 트렌드', instructor: '홍길동', duration: '5분', rating: '4.2' },
      { id: 2, title: '프로그래밍 언어의 선택', instructor: '박민수', duration: '8분', rating: '4.6' },
    ],
    recommended: [
      { id: 1, title: '프론트엔드 개발 심화', instructor: '최지훈', duration: '12시간', rating: '4.9' },
      { id: 2, title: 'AI 활용법', instructor: '김다정', duration: '9시간', rating: '4.8' },
    ],
  };

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">교육 자료</h2>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded ${activeTab === 'courses' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            취업 강의
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded ${activeTab === 'articles' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            블로그/기사
          </button>
          <button
            onClick={() => setActiveTab('recommended')}
            className={`px-4 py-2 rounded ${activeTab === 'recommended' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-r`}
          >
            추천 강의
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{activeTab === 'courses' ? `취업 강의` : activeTab === 'articles' ? `블로그/기사` : `추천 강의`}</h3>
        {resources[activeTab].map(resource => (
        <div key={resource.id} className="border p-3 mb-2 bg-white rounded shadow-sm">
          <h4 className="font-bold">{resource.title}</h4>
          <p>{activeTab === 'courses' ? `강사: ${resource.instructor}` : `저자: ${resource.instructor}`}</p>
          <p>소요 시간: {resource.duration}</p>
          <p>평점: {resource.rating}</p>
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
