// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Chats extends APIResource {
  /**
   * Retorna as mensagens mais recentes primeiro.
   */
  listMessages(
    chatID: string,
    query: ChatListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChatListMessagesResponse> {
    return this._client.get(path`/v1/messaging/chats/${chatID}`, { query, ...options });
  }

  /**
   * Envie texto e/ou referências a mídias previamente carregadas via upload. Áudio:
   * use apenas `audioId` (sem texto nem outras mídias).
   */
  sendMessage(chatID: string, body: ChatSendMessageParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/messaging/chats/${chatID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ChatListMessagesResponse {
  records: Array<ChatListMessagesResponse.Record>;

  nextCursor?: string;
}

export namespace ChatListMessagesResponse {
  export interface Record {
    id: string;

    createdAt: string;

    isOfficialTemplate: boolean;

    sender: Record.Sender;

    status: string;

    templateCharged: boolean;

    type: string;

    ad?: Record.Ad | null;

    forward?: Record.Forward | null;

    instagram?: Record.UnionMember0 | Record.UnionMember1 | Record.UnionMember2 | null;

    media?: Record.Media | null;

    replyToId?: string | null;

    templateComponents?: { [key: string]: unknown } | null;

    text?: string | null;

    transcription?: string | null;
  }

  export namespace Record {
    export interface Sender {
      id: string | null;

      isParticipant: boolean;

      name: string;

      avatarUrl?: string | null;
    }

    export interface Ad {
      id: string;

      type: 'ad' | 'post';

      url: string;

      headline?: string;
    }

    export interface Forward {
      displayName: string;

      type: string;

      date?: number;
    }

    export interface UnionMember0 {
      commentId: string;

      kind: 'comment';

      mediaId: string;

      parentCommentId?: string;
    }

    export interface UnionMember1 {
      kind: 'comment_reply';

      parentCommentId: string;
    }

    export interface UnionMember2 {
      kind: 'private_reply';

      parentCommentId: string;
    }

    export interface Media {
      id: string;

      mimeType: string;

      type: 'image' | 'audio' | 'video' | 'document';

      url: string;
    }
  }
}

export interface ChatListMessagesParams {
  /**
   * Cursor da página seguinte (mensagens mais antigas).
   */
  cursor?: unknown;

  /**
   * Tamanho da página (1-50; padrão 20).
   */
  limit?: unknown;
}

export interface ChatSendMessageParams {
  audioId?: string;

  delay?: number;

  instagramDelivery?: 'dm' | 'comment_reply' | 'private_reply';

  instagramSourceMessageId?: string;

  mediaIds?: Array<string>;

  replyToId?: string;

  text?: string;
}

export declare namespace Chats {
  export {
    type ChatListMessagesResponse as ChatListMessagesResponse,
    type ChatListMessagesParams as ChatListMessagesParams,
    type ChatSendMessageParams as ChatSendMessageParams,
  };
}
