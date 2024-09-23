import React from 'react';

interface Event {
  id: number;
  name: string;
  description: string;
  participants: number;
  timeLeft: string; // 예: "2일 남음"
}

const events: Event[] = [
  { id: 1, name: '웹 개발 워크숍', description: '초보자를 위한 웹 개발 기초 워크숍입니다.', participants: 30, timeLeft: '3일 남음' },
  { id: 2, name: '데이터 분석 세미나', description: '실전 데이터 분석 기법을 배워보세요.', participants: 25, timeLeft: '5일 남음' },
  { id: 3, name: '프로그래밍 대회', description: '팀을 이루어 다양한 문제를 풀어보는 대회입니다.', participants: 15, timeLeft: '1일 남음' },
];

const Event: React.FC = () => {
  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">현재 진행 중인 이벤트</h2>
      <div className="mb-4">
        <div className="bg-blue-200 p-4 rounded-lg text-center">
          <h3 className="text-lg font-bold">웹 개발 워크숍 배너</h3>
          <p>초보자를 위한 웹 개발 기초 워크숍입니다. 지금 바로 참여하세요!</p>
        </div>
      </div>
      <h3 className="font-semibold mb-2">이벤트 목록</h3>
      {events.map((event) => (
        <div key={event.id} className="border p-3 mb-2 bg-white rounded shadow-sm">
          <h4 className="font-bold">{event.name}</h4>
          <p>{event.description}</p>
          <p>참여 인원: {event.participants}명</p>
          <p>남은 시간: {event.timeLeft}</p>
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            참여하기
          </button>
        </div>
      ))}
    </div>
  );
};

export default Event;
