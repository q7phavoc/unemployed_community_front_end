import React, { useState } from 'react';

const Resume: React.FC = () => {
  const [template, setTemplate] = useState<string>('기본 템플릿');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    experience: '',
    certifications: '',
    introduction: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTemplateSelect = (selectedTemplate: string) => {
    setTemplate(selectedTemplate);
  };

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      {/* 상단 설명 */}
      <h2 className="text-xl font-bold mb-4">이력서/자기소개서 작성 가이드</h2>
      <p className="mb-4">이력서 작성에 필요한 다양한 정보와 템플릿을 선택하세요.</p>

      {/* 이력서 템플릿 선택 */}
      <h3 className="text-lg font-semibold mb-2">이력서 템플릿 선택</h3>
      <div className="flex space-x-4 mb-4">
        {['기본 템플릿', '전문가 템플릿', '창의적 템플릿'].map((temp) => (
          <button
            key={temp}
            onClick={() => handleTemplateSelect(temp)}
            className={`border rounded p-2 ${
              template === temp ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            {temp}
          </button>
        ))}
      </div>
      <p>선택한 템플릿: {template}</p>

      {/* 이력서 작성 섹션 */}
      <h3 className="text-lg font-semibold mt-4 mb-2">이력서 작성</h3>
      <form>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="이름을 입력하세요"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="이메일을 입력하세요"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="education">학력</label>
          <textarea
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="학력을 입력하세요"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="experience">경력</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="경력을 입력하세요"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="certifications">자격증</label>
          <textarea
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="자격증을 입력하세요"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1" htmlFor="introduction">자기소개</label>
          <textarea
            id="introduction"
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            className="border rounded w-full p-2"
            placeholder="자기소개를 입력하세요"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          미리보기
        </button>
      </form>
    </div>
  );
};

export default Resume;
