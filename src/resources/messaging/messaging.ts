// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatsAPI from './chats';
import { ChatListMessagesParams, ChatListMessagesResponse, ChatSendMessageParams, Chats } from './chats';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';

export class Messaging extends APIResource {
  chats: ChatsAPI.Chats = new ChatsAPI.Chats(this._client);

  /**
   * Envia um ou mais arquivos. Use os IDs retornados ao enviar mensagens com mídia,
   * imagem, vídeo ou documento. Para áudio, envie um único arquivo de áudio.
   */
  uploadMedia(
    body: MessagingUploadMediaParams,
    options?: RequestOptions,
  ): APIPromise<MessagingUploadMediaResponse> {
    return this._client.post(
      '/v1/messaging/media',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type MessagingUploadMediaResponse = Array<
  MessagingUploadMediaResponse.UnionMember0 | MessagingUploadMediaResponse.UnionMember1
>;

export namespace MessagingUploadMediaResponse {
  export interface UnionMember0 {
    id: string;

    name: string;

    success: true;

    url: string;
  }

  export interface UnionMember1 {
    name: string;

    success: false;
  }
}

export interface MessagingUploadMediaParams {
  files: Array<Uploadable>;
}

Messaging.Chats = Chats;

export declare namespace Messaging {
  export {
    type MessagingUploadMediaResponse as MessagingUploadMediaResponse,
    type MessagingUploadMediaParams as MessagingUploadMediaParams,
  };

  export {
    Chats as Chats,
    type ChatListMessagesResponse as ChatListMessagesResponse,
    type ChatListMessagesParams as ChatListMessagesParams,
    type ChatSendMessageParams as ChatSendMessageParams,
  };
}
