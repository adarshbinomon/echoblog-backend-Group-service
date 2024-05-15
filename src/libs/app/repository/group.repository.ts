import mongoose from "mongoose";
import { CommunityData, UserData } from "../../../utils/interface";
import community from "../../controller/community";
import { schema } from "../database";
const ObjectId = mongoose.Types.ObjectId;

const { Community, User } = schema;

export default {
  createCommunity: async (communityData: CommunityData) => {
    try {
      const data = { ...communityData, members: [communityData.createdBy] };
      const response = await schema.Community.create(data);

      if (response) {
        return {
          status: true,
          message: "Community created",
          community: response,
        };
      } else {
        return {
          status: false,
          message: "Failed to create community",
          community: response,
        };
      }
    } catch (error) {
      console.log("Error in createCommunity repository:", error);
      return {
        status: false,
        message: "Error in creating community",
      };
    }
  },

  getCommunityWithId: async (communityId: string) => {
    try {
      const community = await Community.findById(communityId);

      if (community) {
        return {
          status: true,
          message: "commuinity found",
          community: community,
        };
      } else return { status: false, message: "commuinity not found" };
    } catch (error) {
      console.log("errror in get community by id repository:", error);
      return { status: false, message: "commuinity not found" };
    }
  },
  getCommunityWithUsers: async (communityId: string) => {
    try {
      const community = await Community.findById(communityId).populate(
        "members"
      );

      if (community) {
        return {
          status: true,
          message: "commuinity found",
          community: community,
        };
      } else return { status: false, message: "commuinity not found" };
    } catch (error) {
      console.log("errror in get community by id repository:", error);
      return { status: false, message: "commuinity not found" };
    }
  },
  createUser: async (data: UserData) => {
    try {
      const userData = { ...data };

      const response = await schema.User.create(userData);

      if (response) {
        return { status: true, message: "user created sucessfully", response };
      } else {
        return { status: false, message: "user creation failed" };
      }
    } catch (error) {
      console.log(
        "Error in the creating user in the post service / repository ",
        error
      );
    }
  },

  updateUser: async (data: UserData) => {
    try {
      const response = await User.findByIdAndUpdate(data._id, data);
      return { status: true, updatedUser: response };
    } catch (error) {
      console.log(error);
      return { status: false, message: "update failed" };
    }
  },

  findAllCommunities: async (userId: string) => {
    try {
      const response = await Community.find({ members: { $ne: userId } });

      if (response) {
        return {
          status: true,
          message: "communities found!",
          communities: response,
        };
      } else {
        return { status: false, message: "communities not found" };
      }
    } catch (error) {
      console.log("error in find all communities repository", error);
      return { status: true, message: "communities not found" };
    }
  },

  joinCommunity: async (userId: string, communityId: string) => {
    try {
      const response = await Community.findByIdAndUpdate(
        communityId,
        { $push: { members: userId } },
        { new: true }
      );

      if (response) {
        return {
          status: true,
          message: "Join to community successful",
          community: response,
        };
      } else {
        return {
          status: false,
          message: "Join to community not successful",
        };
      }
    } catch (error) {
      console.log("Error in join community repository:", error);
      return {
        status: false,
        message: "Join to community not successful",
      };
    }
  },

  getUserCommunities: async (userId: string) => {
    try {
      const response = await Community.find({ members: userId });

      if (response) {
        return {
          status: true,
          message: "communities found",
          communities: response,
        };
      } else {
        return { status: false, message: "communities not found" };
      }
    } catch (error) {
      console.log("error in get user community group repository:", error);
      return { status: false, message: "communities not found" };
    }
  },

  editCommunitySettings: async (communityId: string, data: CommunityData) => {
    try {
      const response = await Community.findByIdAndUpdate(communityId, data);
      if (response) {
        return {
          status: true,
          message: "community edited",
          community: response,
        };
      } else {
        return { status: false, message: "community not edited" };
      }
    } catch (error) {
      console.log("errror in edit community repository:", error);
      return { status: false, message: "community not edited" };
    }
  },
  searchCommunity: async (regex: string) => {
    try {
      const communities = await Community.find({
        name: { $regex: new RegExp(`${regex}`, "i") },
      });

      if (communities) {
        return {
          status: true,
          message: "communities found",
          communities: communities,
        };
      } else {
        return { status: false, message: "communities not found" };
      }
    } catch (error) {
      console.log("error in search post repository:", error);
      return { status: true, message: "error in findinf communities" };
    }
  },
  removeMember: async (communityId: string, memberId: string) => {
    try {
      const response = await Community.findByIdAndUpdate(
        communityId,
        { $pull: { members: memberId } },
        { new: true, lean: true }
      );

      if (response) {
        return { status: true, message: "Member removed successfully" };
      } else {
        return { status: false, message: "Member not found or not removed" };
      }
    } catch (error) {
      console.log("Error in removeMember function:", error);
      return { status: false, message: "Error occurred while removing member" };
    }
  },

  makeAdmin: async (communityId: string, memberId: string) => {
    try {
      const response = await Community.findByIdAndUpdate(
        communityId,
        { $push: { admins: memberId } },
        { new: true }
      );

      if (response) {
        return { status: true, message: "admin added" };
      } else {
        return { status: false, message: "admin not added" };
      }
    } catch (error) {
      console.log("error in make admin repository:", error);
      return { status: false, message: "admin not added" };
    }
  },
};
