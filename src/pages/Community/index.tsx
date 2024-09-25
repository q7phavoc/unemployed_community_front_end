import React, {useEffect, useState} from 'react'
import { BACKEND_URL, COMMUNITY_CATEGORY } from '../../data'
import { IGroup } from '../../store/commonTypes';

const Community: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('지역 소모임')
  const [groups, setGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }

      const params = `category=${selectedTab}`;
      const queryString = new URLSearchParams(params).toString();

      const res = await fetch(BACKEND_URL + `/community/list?${queryString}`, requestOptions);
      const result = await res.json();
      return result.communityList;
    }

    fetchData().then(res => setGroups(res));
  }, [selectedTab]);

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">커뮤니티</h2>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          {COMMUNITY_CATEGORY.map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded ${
                selectedTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {selectedTab === '지역 소모임' && (
        <div>
          <h3 className="font-semibold mb-2">소모임 리스트</h3>
          {groups.map(group => (
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
          {groups.map(group => (
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

      {selectedTab === '멘토링 프로그램' && (
        <div>
          <h3 className="font-semibold mb-2">멘토링 프로그램</h3>
          {groups.map(mentor => (
            <div key={mentor.id} className="border p-3 mb-2 bg-white rounded shadow-sm">
              <h4 className="font-bold">{mentor.name}</h4>
              <p>멘토링 주제: {mentor.description}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                신청하기
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Community
