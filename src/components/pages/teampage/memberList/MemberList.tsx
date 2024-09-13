'use client';

import { groupData } from '@/data/groupData';
import MemberCard from './MemberCard';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Team } from '@/types/Group';
import { getGroupData } from '@/apis/GroupApis';

export default function MemberList() {
  const [team, setTeam] = useState<Team | undefined>(undefined);

  // const { data: team, isFetching } = useQuery({
  //   queryKey: ['team', 1],
  //   queryFn: getGroupData,
  // });

  useEffect(() => {
    // TODO: API 호출해서 tema 정보 설정
    getGroupData(1).then(setTeam);
  }, []);

  const membersCount = team?.members.length;

  return (
    <div className="flex flex-col gap-[26px]">
      <div className="flex flex-row justify-between">
        <span className="text-lg-medium flex flex-row gap-2">
          멤버
          <span className="text-lg-regular text-text-default">
            ({membersCount?.toLocaleString() || '-'}명)
          </span>
        </span>
        {/* 관리자일 때 */}
        <button className="text-md-regular text-brand-primary">
          + 새로운 멤버 추가하기
        </button>
      </div>
      <div className="grid w-full grid-flow-row grid-cols-2 place-items-stretch gap-4 md:grid-cols-3 lg:grid-cols-3">
        {team?.members.map((member) => (
          <MemberCard member={member} key={member.userId} />
        ))}
      </div>
    </div>
  );
}
