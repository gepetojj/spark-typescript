// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Webhooks extends APIResource {}

export interface ChatsCreatedWebhook {
  data: ChatsCreatedWebhookPayload;

  event: 'chats.created';
}

export interface ChatsCreatedWebhookPayload {
  chatId: string;

  occurredAt: string;

  platform: 'whatsapp' | 'whatsapp_lite' | 'instagram' | 'telegram';

  tenantId: string;

  entrypointId?: string;
}

export interface MessagesReceivedWebhook {
  data: MessagesReceivedWebhookPayload;

  event: 'messages.received';
}

export interface MessagesReceivedWebhookPayload {
  chatId: string;

  message: MessagesReceivedWebhookPayload.Message;

  occurredAt: string;

  tenantId: string;
}

export namespace MessagesReceivedWebhookPayload {
  export interface Message {
    id: string;

    createdAt: string;

    isOfficialTemplate: boolean;

    sender: Message.Sender;

    status: string;

    templateCharged: boolean;

    type: string;

    forward?: Message.Forward | null;

    instagram?: Message.UnionMember0 | Message.UnionMember1 | Message.UnionMember2 | null;

    location?: Message.Location | null;

    media?: Message.Media | null;

    replyToId?: string | null;

    templateComponents?: { [key: string]: unknown } | null;

    text?: string | null;

    transcription?: string | null;
  }

  export namespace Message {
    export interface Sender {
      id: string | null;

      isParticipant: boolean;

      name: string;

      avatarUrl?: string | null;
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

    export interface Location {
      latitude: number;

      longitude: number;

      address?: string;

      name?: string;

      url?: string;
    }

    export interface Media {
      id: string;

      mimeType: string;

      type: 'image' | 'audio' | 'video' | 'document';

      url: string;
    }
  }
}

export interface MessagesSentWebhook {
  data: MessagesSentWebhookPayload;

  event: 'messages.sent';
}

export interface MessagesSentWebhookPayload {
  chatId: string;

  message: MessagesSentWebhookPayload.Message;

  occurredAt: string;

  tenantId: string;

  source?:
    | 'public_api'
    | 'user'
    | 'automation'
    | 'campaign'
    | 'addon'
    | 'integration'
    | 'business_hours'
    | 'system';
}

export namespace MessagesSentWebhookPayload {
  export interface Message {
    id: string;

    createdAt: string;

    isOfficialTemplate: boolean;

    sender: Message.Sender;

    status: string;

    templateCharged: boolean;

    type: string;

    forward?: Message.Forward | null;

    instagram?: Message.UnionMember0 | Message.UnionMember1 | Message.UnionMember2 | null;

    location?: Message.Location | null;

    media?: Message.Media | null;

    replyToId?: string | null;

    templateComponents?: { [key: string]: unknown } | null;

    text?: string | null;

    transcription?: string | null;
  }

  export namespace Message {
    export interface Sender {
      id: string | null;

      isParticipant: boolean;

      name: string;

      avatarUrl?: string | null;
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

    export interface Location {
      latitude: number;

      longitude: number;

      address?: string;

      name?: string;

      url?: string;
    }

    export interface Media {
      id: string;

      mimeType: string;

      type: 'image' | 'audio' | 'video' | 'document';

      url: string;
    }
  }
}

export declare namespace Webhooks {
  export {
    type ChatsCreatedWebhook as ChatsCreatedWebhook,
    type ChatsCreatedWebhookPayload as ChatsCreatedWebhookPayload,
    type MessagesReceivedWebhook as MessagesReceivedWebhook,
    type MessagesReceivedWebhookPayload as MessagesReceivedWebhookPayload,
    type MessagesSentWebhook as MessagesSentWebhook,
    type MessagesSentWebhookPayload as MessagesSentWebhookPayload,
  };
}
