import { groupData } from "@/data/groupData";
import { Team } from "@/types/Group";
import axios from "axios";

export const getGroupData = async (teamId: number) => {
  return (await axios.get(`http://localhost:3000/api/group/${teamId}`)).data;
  // return new Promise<Team>((resolve) => {
  //   setTimeout(() => {
  //     resolve(groupData)
  //   }, 5000);
  // });
};
