import { MessageType } from "../modules/chat/models/type";


export interface IServerResponse {
    statusCode: number,
    message: string,
    data: any
}

export interface IUser {
    id: string;
    username: string;
    firstName: string;
    imageUrl: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    isActive: boolean;
}

export interface IConversation {
    id: string;
    name: string;
    participants: IUser[];
    messages: IMessage[];
}

export interface IMatch {
    id: string;
    user1: string;
    user2: string;
}

export interface IMessage {
    id?: string;
    text?: string;
    audio?: File;
    image?: File;
    type?: MessageType;
    userId?: string;
    conversationId?: string;
    createdAt?: string;
    conversation?: IConversation
}