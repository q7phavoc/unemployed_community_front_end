import React, { useState } from 'react';

interface Group {
  id: number;
  name: string;
  description: string;
  participants: number;
}

interface Mentor {
  id: number;
  name: string;
  topic: string;
}

const groups: Group[] = [
  { id: 1, name: '서울 개발자 모임', description: '서울 지역의 개발자들이 모이는 소모임입니다.', participants: 15 },
  { id: 2, name: '부산 마케팅 소모임', description: '부산 지역의 마케팅 전문가들이 모입니다.', participants: 10 },
  { id: 3, name: '대전 디자인 소모임', description: '대전 지역의 디자이너들이 함께하는 모임입니다.', participants: 8 },
];

const mentors: Mentor[] = [
  { id: 1, name: '김지수', topic: '웹 개발' },
  { id: 2, name: '박영희', topic: '데이터 분석' },
  { id: 3, name: '최민수', topic: 'UX/UI 디자인' },
];

const Community: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('지역 소모임');

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">커뮤니티</h2>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          {['지역 소모임', '업종별 소모임', '멘토링 프로그램'].map((tab) => (
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

      {selectedTab === '지역 소모임' && (
        <div>
          <h3 className="font-semibold mb-2">소모임 리스트</h3>
          {groups.map((group) => (
            <div key={group.id} className="border p-3 mb-2 bg-white rounded shadow-sm">
              <h4 className="font-bold">{group.name}</h4>
              <p>{group.description}</p>
              <p>참여 인원: {group.participants}명</p>
              <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                참여 신청
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedTab === '업종별 소모임' && (
        <div>
          <h3 className="font-semibold mb-2">업종별 소모임 리스트</h3>
          {/* 여기에 업종별 소모임 데이터를 추가할 수 있습니다. */}
          <p>업종별 소모임 데이터가 없습니다.</p>
        </div>
      )}

      {selectedTab === '멘토링 프로그램' && (
        <div>
          <h3 className="font-semibold mb-2">멘토링 프로그램</h3>
          {mentors.map((mentor) => (
            <div key={mentor.id} className="border p-3 mb-2 bg-white rounded shadow-sm">
              <h4 className="font-bold">{mentor.name}</h4>
              <p>멘토링 주제: {mentor.topic}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                신청하기
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;
