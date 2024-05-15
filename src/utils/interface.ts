export interface CommunityData {
  name: string;
  about: string;
  createdBy: string
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  uid?: string;
  profilePicture?: string;
  isGoogle?: boolean;
  _id?: string;
}

export interface dataForKafka {
  userId: string
  communityId: string
}