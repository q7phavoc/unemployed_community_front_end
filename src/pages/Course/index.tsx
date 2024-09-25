import React, { useEffect, useState } from 'react';
import { BACKEND_URL, COURSE_CATEGORY } from '../../data';
import { ICourse } from '../../store/commonTypes';

const Course: React.FC = () => {
  const [activeTab, setActiveTab] = useState(COURSE_CATEGORY[0]);
  const [resources, setResources] = useState<ICourse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }

      const params = `category=${activeTab}`;
      const queryString = new URLSearchParams(params).toString();

      const res = await fetch(BACKEND_URL + `/course/list?${queryString}`, requestOptions);
      const result = await res.json();
      return result.courseList;
    }

    fetchData().then(res => setResources(res));
  }, [activeTab]);

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">교육 자료</h2>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          {COURSE_CATEGORY.map(tab => (
            <button
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">{activeTab}</h3>
        {resources.map(resource => (
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
