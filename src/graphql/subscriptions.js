/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClassTable = /* GraphQL */ `
  subscription OnCreateClassTable {
    onCreateClassTable {
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
  subscription OnDeleteClassTable {
    onDeleteClassTable {
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
  subscription OnCreateRoomTable {
    onCreateRoomTable {
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
  subscription OnDeleteRoomTable {
    onDeleteRoomTable {
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
  subscription OnCreateFileTable {
    onCreateFileTable {
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
export const onUpdateFileTable = /* GraphQL */ `
  subscription OnUpdateFileTable {
    onUpdateFileTable {
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
export const onDeleteFileTable = /* GraphQL */ `
  subscription OnDeleteFileTable {
    onDeleteFileTable {
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
export const onCreateMyPageTable = /* GraphQL */ `
  subscription OnCreateMyPageTable {
    onCreateMyPageTable {
      id
      UserID
      ClassID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onUpdateMyPageTable = /* GraphQL */ `
  subscription OnUpdateMyPageTable {
    onUpdateMyPageTable {
      id
      UserID
      ClassID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onDeleteMyPageTable = /* GraphQL */ `
  subscription OnDeleteMyPageTable {
    onDeleteMyPageTable {
      id
      UserID
      ClassID
      createdAt
      updatedAt
      ownerUserID
    }
  }
`;
export const onCreateCommentTable = /* GraphQL */ `
  subscription OnCreateCommentTable {
    onCreateCommentTable {
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
export const onUpdateCommentTable = /* GraphQL */ `
  subscription OnUpdateCommentTable {
    onUpdateCommentTable {
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
export const onDeleteCommentTable = /* GraphQL */ `
  subscription OnDeleteCommentTable {
    onDeleteCommentTable {
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
export const onCreateEmojiTable = /* GraphQL */ `
  subscription OnCreateEmojiTable {
    onCreateEmojiTable {
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
export const onUpdateEmojiTable = /* GraphQL */ `
  subscription OnUpdateEmojiTable {
    onUpdateEmojiTable {
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
export const onDeleteEmojiTable = /* GraphQL */ `
  subscription OnDeleteEmojiTable {
    onDeleteEmojiTable {
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
