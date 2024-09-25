import React, { useEffect, useState } from 'react';
import { IEvent } from '../../store/commonTypes';
import { BACKEND_URL } from '../../data';

const Event: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }

      const res = await fetch(BACKEND_URL + `/event/list`, requestOptions);
      const result = await res.json();
      return result.eventList;
    }

    fetchData().then(res => setEvents(res));
  }, []);

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
