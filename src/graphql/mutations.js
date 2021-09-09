/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClassTable = /* GraphQL */ `
  mutation CreateClassTable(
    $input: CreateClassTableInput!
    $condition: ModelClassTableConditionInput
  ) {
    createClassTable(input: $input, condition: $condition) {
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
export const deleteClassTable = /* GraphQL */ `
  mutation DeleteClassTable(
    $input: DeleteClassTableInput!
    $condition: ModelClassTableConditionInput
  ) {
    deleteClassTable(input: $input, condition: $condition) {
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
export const createRoomTable = /* GraphQL */ `
  mutation CreateRoomTable(
    $input: CreateRoomTableInput!
    $condition: ModelRoomTableConditionInput
  ) {
    createRoomTable(input: $input, condition: $condition) {
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
export const deleteRoomTable = /* GraphQL */ `
  mutation DeleteRoomTable(
    $input: DeleteRoomTableInput!
    $condition: ModelRoomTableConditionInput
  ) {
    deleteRoomTable(input: $input, condition: $condition) {
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
export const createFileTable = /* GraphQL */ `
  mutation CreateFileTable(
    $input: CreateFileTableInput!
    $condition: ModelFileTableConditionInput
  ) {
    createFileTable(input: $input, condition: $condition) {
      id
      UserID
      RoomID
      FileName
      Comment
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const updateFileTable = /* GraphQL */ `
  mutation UpdateFileTable(
    $input: UpdateFileTableInput!
    $condition: ModelFileTableConditionInput
  ) {
    updateFileTable(input: $input, condition: $condition) {
      id
      UserID
      RoomID
      FileName
      Comment
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const deleteFileTable = /* GraphQL */ `
  mutation DeleteFileTable(
    $input: DeleteFileTableInput!
    $condition: ModelFileTableConditionInput
  ) {
    deleteFileTable(input: $input, condition: $condition) {
      id
      UserID
      RoomID
      FileName
      Comment
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const createMyPageColum = /* GraphQL */ `
  mutation CreateMyPageColum(
    $input: CreateMyPageTableInput!
    $condition: ModelMyPageTableConditionInput
  ) {
    createMyPageColum(input: $input, condition: $condition) {
      id
      UserID
      ClassID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const updateMyPage = /* GraphQL */ `
  mutation UpdateMyPage(
    $input: UpdateMyPageTableInput!
    $condition: ModelMyPageTableConditionInput
  ) {
    updateMyPage(input: $input, condition: $condition) {
      id
      UserID
      ClassID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const deleteMyPageColum = /* GraphQL */ `
  mutation DeleteMyPageColum(
    $input: DeleteMyPageTableInput!
    $condition: ModelMyPageTableConditionInput
  ) {
    deleteMyPageColum(input: $input, condition: $condition) {
      id
      UserID
      ClassID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
