import React, { useEffect, useState } from 'react';
import { BACKEND_URL } from '../data';
import { IBoard } from '../store/commonTypes';

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<IBoard[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }

      const res = await fetch(BACKEND_URL + '/board/list', requestOptions);
      const result = await res.json();
      return result.boards;
    }

    fetchData().then(res => setJobs(res));
  }, []);
  
  return (
    <div className="p-5 bg-gray-100">
      <div className='flex justify-between'>
        <div></div>
        <h2 className="text-xl font-bold mb-4 text-center">최신 채용 정보</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          더보기
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="w-64 border p-3 rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.contents}</p>
            <p className="text-gray-500">{job.contents2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
