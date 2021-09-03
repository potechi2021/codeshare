/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClassTable = /* GraphQL */ `
  subscription OnCreateClassTable($ownerUserID: String!) {
    onCreateClassTable(ownerUserID: $ownerUserID) {
      id
      OwnerUserID
      ClassName
      Comment
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onDeleteClassTable = /* GraphQL */ `
  subscription OnDeleteClassTable($ownerUserID: String!) {
    onDeleteClassTable(ownerUserID: $ownerUserID) {
      id
      OwnerUserID
      ClassName
      Comment
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onCreateRoomTable = /* GraphQL */ `
  subscription OnCreateRoomTable($ownerUserID: String!) {
    onCreateRoomTable(ownerUserID: $ownerUserID) {
      id
      OwnerUserID
      RoomName
      Comment
      ClassID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onDeleteRoomTable = /* GraphQL */ `
  subscription OnDeleteRoomTable($ownerUserID: String!) {
    onDeleteRoomTable(ownerUserID: $ownerUserID) {
      id
      OwnerUserID
      RoomName
      Comment
      ClassID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onCreateFileTable = /* GraphQL */ `
  subscription OnCreateFileTable($ownerUserID: String!) {
    onCreateFileTable(ownerUserID: $ownerUserID) {
      id
      UserID
      FileName
      Comment
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onUpdateFileTable = /* GraphQL */ `
  subscription OnUpdateFileTable($ownerUserID: String!) {
    onUpdateFileTable(ownerUserID: $ownerUserID) {
      id
      UserID
      FileName
      Comment
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onDeleteFileTable = /* GraphQL */ `
  subscription OnDeleteFileTable($ownerUserID: String!) {
    onDeleteFileTable(ownerUserID: $ownerUserID) {
      id
      UserID
      FileName
      Comment
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onCreateMyPageTable = /* GraphQL */ `
  subscription OnCreateMyPageTable($UserID: String!) {
    onCreateMyPageTable(UserID: $UserID) {
      id
      UserID
      ClassID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMyPageTable = /* GraphQL */ `
  subscription OnUpdateMyPageTable($UserID: String!) {
    onUpdateMyPageTable(UserID: $UserID) {
      id
      UserID
      ClassID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMyPageTable = /* GraphQL */ `
  subscription OnDeleteMyPageTable($UserID: String!) {
    onDeleteMyPageTable(UserID: $UserID) {
      id
      UserID
      ClassID
      createdAt
      updatedAt
    }
  }
`;
