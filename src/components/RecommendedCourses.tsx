import React from 'react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
}

const courses: Course[] = [
  { id: 1, title: 'React 완벽 가이드', instructor: '이준호', duration: '10시간' },
  { id: 2, title: 'Python으로 데이터 분석하기', instructor: '김영희', duration: '12시간' },
  { id: 3, title: 'Node.js 기초', instructor: '박철수', duration: '8시간' },
  { id: 4, title: '자기계발: 성장하는 습관', instructor: '최지우', duration: '5시간' },
  { id: 5, title: '효과적인 시간 관리법', instructor: '홍길동', duration: '3시간' },
];

const RecommendedCourses: React.FC = () => {
  return (
    <div className="p-5 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">추천 교육 콘텐츠</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {courses.map((course) => (
          <div key={course.id} className="w-64 border p-3 rounded-md bg-white shadow-sm">
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-gray-600">강사: {course.instructor}</p>
            <p className="text-gray-500">소요 시간: {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;
