import React from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

const jobs: Job[] = [
  { id: 1, title: '프론트엔드 개발자', company: 'ABC 주식회사', location: '서울' },
  { id: 2, title: '백엔드 개발자', company: 'XYZ 주식회사', location: '부산' },
  { id: 3, title: 'UI/UX 디자이너', company: '테크 스타트업', location: '서울' },
  { id: 4, title: '데이터 분석가', company: '데이터 솔루션', location: '대전' },
  { id: 5, title: 'DevOps 엔지니어', company: '클라우드 서비스', location: '제주' },
];

const JobList: React.FC = () => {
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
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
