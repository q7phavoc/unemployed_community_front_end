import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const userInfo = {
    name: '홍길동',
    interests: '웹 개발, 데이터 과학',
    desiredJob: '프론트엔드 개발자',
    resumeFile: '이력서.pdf',
    savedJobs: [
      { id: 1, title: '웹 개발자', company: 'ABC 주식회사' },
      { id: 2, title: '데이터 분석가', company: 'XYZ 주식회사' },
    ],
    joinedGroups: [
      { id: 1, name: '서울 개발자 모임' },
      { id: 2, name: '프론트엔드 멘토링' },
    ],
    activities: [
      { id: 1, type: '게시글', content: 'React 기초 강의 작성' },
      { id: 2, type: '댓글', content: '취업 정보 관련 댓글 작성' },
      { id: 3, type: '이벤트', content: '웹 개발 워크숍 참여' },
    ],
  };

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      {/* 상단 프로필 섹션 */}
      <div className="flex items-center mb-6">
        <img
          src="https://via.placeholder.com/100" // 프로필 사진 URL
          alt="프로필 사진"
          className="w-24 h-24 rounded-full border-2 border-blue-600"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{userInfo.name}</h2>
          <p>관심 분야: {userInfo.interests}</p>
          <p>희망 직종: {userInfo.desiredJob}</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            프로필 수정
          </button>
        </div>
      </div>

      {/* 중앙 섹션 */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">내 이력서</h3>
        <p>{userInfo.resumeFile}</p>
        <Link to={'/resume'}>
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            수정하기
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">관심 공고</h3>
        <ul>
          {userInfo.savedJobs.map(job => (
            <li key={job.id} className="border p-2 mb-2 bg-white rounded shadow-sm">
              {job.title} - {job.company}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">참여 소모임/멘토링</h3>
        <ul>
          {userInfo.joinedGroups.map(group => (
            <li key={group.id} className="border p-2 mb-2 bg-white rounded shadow-sm">
              {group.name}
            </li>
          ))}
        </ul>
      </div>

      {/* 하단 섹션 */}
      <div>
        <h3 className="text-lg font-semibold mb-2">활동 내역</h3>
        <ul>
          {userInfo.activities.map(activity => (
            <li key={activity.id} className="border p-2 mb-2 bg-white rounded shadow-sm">
              {activity.type}: {activity.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
