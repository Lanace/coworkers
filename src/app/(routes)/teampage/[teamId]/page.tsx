'use client';

import TeamSetting from '@/components/pages/teampage/teamSetting/TeamSetting';
import TasksList from '@/components/pages/teampage/taskList/TasksList';
import TaskReport from '@/components/pages/teampage/taskReport/TaskReport';
import MemberList from '@/components/pages/teampage/memberList/MemberList';
import { getGroupData } from '@/apis/GroupApis';
import { useEffect, useState } from 'react';
import { Team } from '@/types/Group';
import { useRouter } from 'next/navigation';

export default function Page(props: { params: { teamId: string } }) {
  const { params } = props;
  const { teamId: teamIdString } = params;
  const teamId = Number(teamIdString);
  const router = useRouter();

  const [team, setTeam] = useState<Team | undefined>(undefined);

  // const { data: team, isFetching } = useQuery({
  //   queryKey: ['team', 1],
  //   queryFn: getGroupData,
  // });

  useEffect(() => {
    // TODO: API 호출해서 tema 정보 설정
    if (teamId) {
      getGroupData(teamId)
        .then(setTeam)
        .catch((error) => {
          // TODO:
          router.push('/404');
        });
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 py-6">
      <TeamSetting />
      <div className="flex flex-col gap-12">
        <TasksList />
        <TaskReport />
        <MemberList />
      </div>
    </div>
  );
}
