// TODO: id 값을 통해서 그룹 정보를 얻는 GET API

import { groupData, groupDataList } from "@/data/groupData";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  const { id } = params;

  const target = groupDataList.find((group) => {
    console.log("aaa", group.id, id)
    return group.id === Number(id)
  }); 
  
  if (target) {
    return NextResponse.json(target);
  }
  
  return NextResponse.json({error: "데이터가 없습니다."}, {
    status: 404
  });
}
