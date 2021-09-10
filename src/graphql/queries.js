/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClassTable = /* GraphQL */ `
  query GetClassTable($id: ID!) {
    getClassTable(id: $id) {
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
export const listClassTables = /* GraphQL */ `
  query ListClassTables(
    $filter: ModelClassTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        OwnerUserID
        ClassName
        Comment
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const getRoomTable = /* GraphQL */ `
  query GetRoomTable($id: ID!) {
    getRoomTable(id: $id) {
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
export const listRoomTables = /* GraphQL */ `
  query ListRoomTables(
    $filter: ModelRoomTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoomTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        OwnerUserID
        RoomName
        Comment
        ClassID
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const getFileTable = /* GraphQL */ `
  query GetFileTable($id: ID!) {
    getFileTable(id: $id) {
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
export const listFileTables = /* GraphQL */ `
  query ListFileTables(
    $filter: ModelFileTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserID
        RoomID
        FileName
        Comment
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const getMyPageTable = /* GraphQL */ `
  query GetMyPageTable($id: ID!) {
    getMyPageTable(id: $id) {
      id
      UserID
      ClassID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const listMyPageTables = /* GraphQL */ `
  query ListMyPageTables(
    $filter: ModelMyPageTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyPageTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserID
        ClassID
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const getCommentTable = /* GraphQL */ `
  query GetCommentTable($id: ID!) {
    getCommentTable(id: $id) {
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
export const listCommentTables = /* GraphQL */ `
  query ListCommentTables(
    $filter: ModelCommentTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FileID
        Comment
        UserID
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const getEmojiTable = /* GraphQL */ `
  query GetEmojiTable($id: ID!) {
    getEmojiTable(id: $id) {
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
export const listEmojiTables = /* GraphQL */ `
  query ListEmojiTables(
    $filter: ModelEmojiTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmojiTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FileID
        Emoji
        UserID
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const showClassByOwner = /* GraphQL */ `
  query ShowClassByOwner(
    $OwnerUserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelClassTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    showClassByOwner(
      OwnerUserID: $OwnerUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        OwnerUserID
        ClassName
        Comment
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const showByOwner = /* GraphQL */ `
  query ShowByOwner(
    $OwnerUserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRoomTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    showByOwner(
      OwnerUserID: $OwnerUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        OwnerUserID
        RoomName
        Comment
        ClassID
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const showFileByOwner = /* GraphQL */ `
  query ShowFileByOwner(
    $UserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelFileTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    showFileByOwner(
      UserID: $UserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        UserID
        RoomID
        FileName
        Comment
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const showFileByRoom = /* GraphQL */ `
  query ShowFileByRoom(
    $RoomID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelFileTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    showFileByRoom(
      RoomID: $RoomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        UserID
        RoomID
        FileName
        Comment
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const showMyPage = /* GraphQL */ `
  query ShowMyPage(
    $UserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMyPageTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    showMyPage(
      UserID: $UserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        UserID
        ClassID
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const showCommentByFileId = /* GraphQL */ `
  query ShowCommentByFileId(
    $FileID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommentTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    showCommentByFileID(
      FileID: $FileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        FileID
        Comment
        UserID
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
export const showEmojiByFileId = /* GraphQL */ `
  query ShowEmojiByFileId(
    $FileID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEmojiTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    showEmojiByFileID(
      FileID: $FileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        FileID
        Emoji
        UserID
        createdAt
        updatedAt
        ownerUserID
      }
      nextToken
    }
  }
`;
