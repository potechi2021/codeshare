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
export const createCommentTable = /* GraphQL */ `
  mutation CreateCommentTable(
    $input: CreateCommentTableInput!
    $condition: ModelCommentTableConditionInput
  ) {
    createCommentTable(input: $input, condition: $condition) {
      id
      FileID
      Comment
      UserID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const updateCommentTable = /* GraphQL */ `
  mutation UpdateCommentTable(
    $input: UpdateCommentTableInput!
    $condition: ModelCommentTableConditionInput
  ) {
    updateCommentTable(input: $input, condition: $condition) {
      id
      FileID
      Comment
      UserID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const deleteCommentTable = /* GraphQL */ `
  mutation DeleteCommentTable(
    $input: DeleteCommentTableInput!
    $condition: ModelCommentTableConditionInput
  ) {
    deleteCommentTable(input: $input, condition: $condition) {
      id
      FileID
      Comment
      UserID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const createEmojiTable = /* GraphQL */ `
  mutation CreateEmojiTable(
    $input: CreateEmojiTableInput!
    $condition: ModelEmojiTableConditionInput
  ) {
    createEmojiTable(input: $input, condition: $condition) {
      id
      FileID
      Emoji
      UserID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const updateEmojiTable = /* GraphQL */ `
  mutation UpdateEmojiTable(
    $input: UpdateEmojiTableInput!
    $condition: ModelEmojiTableConditionInput
  ) {
    updateEmojiTable(input: $input, condition: $condition) {
      id
      FileID
      Emoji
      UserID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const deleteEmojiTable = /* GraphQL */ `
  mutation DeleteEmojiTable(
    $input: DeleteEmojiTableInput!
    $condition: ModelEmojiTableConditionInput
  ) {
    deleteEmojiTable(input: $input, condition: $condition) {
      id
      FileID
      Emoji
      UserID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
