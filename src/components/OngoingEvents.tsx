import React from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

const events: Event[] = [
  { id: 1, title: '웹 개발 워크숍', date: '2023-10-01', description: '초보자를 위한 웹 개발 기초 워크숍입니다.' },
  { id: 2, title: '데이터 분석 세미나', date: '2023-10-05', description: '실전 데이터 분석 기법을 배워보세요.' },
  { id: 3, title: '프로그래밍 대회', date: '2023-10-10', description: '팀을 이루어 다양한 문제를 풀어보는 대회입니다.' },
];

const OngoingEvents: React.FC = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4 text-center">진행 중인 이벤트</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {events.map((event) => (
          <div key={event.id} className="w-64 border p-3 rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">날짜: {event.date}</p>
            <p className="text-gray-500">{event.description}</p>
            <button className="mt-2 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              참여하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingEvents;
