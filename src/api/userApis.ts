import { authAxiosInstance } from "@/app/api/auth/axiosInstance";
import { TeamList } from "@/types/userTypes";

export const getUserGroups = async () => {
  const response = await authAxiosInstance.get<TeamList>(`/user/groups`);
  return response.data;
}