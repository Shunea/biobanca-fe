export type Meta = {
  HttpStatusCode: number;
  HttpStatusMessage: string;
  message: string;
  serverTime: string;
};

export type CommonEntity = {
  id: number;
  deletedAt: Date;
  createdAt: Date;
  lastInteractedAt: Date;
  lastInteractedUserId: string;
};
