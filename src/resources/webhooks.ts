// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';

export class Webhooks extends APIResource {}

export interface ChatsCreatedWebhook {
  data: ChatsCreatedWebhook.Data;

  event: 'chats.created';
}

export namespace ChatsCreatedWebhook {
  export interface Data {
    chatId: string;

    occurredAt: string;

    platform: 'whatsapp' | 'whatsapp_lite' | 'instagram' | 'telegram';

    tenantId: string;

    entrypointId?: string;
  }
}

export interface ChatsCreatedWebhookPayload {
  chatId: string;

  occurredAt: string;

  platform: 'whatsapp' | 'whatsapp_lite' | 'instagram' | 'telegram';

  tenantId: string;

  entrypointId?: string;
}

export interface MessagesReceivedWebhook {
  data: MessagesReceivedWebhook.Data;

  event: 'messages.received';
}

export namespace MessagesReceivedWebhook {
  export interface Data {
    chat: Data.Chat;

    chatId: string;

    entrypointId: string;

    message: Data.Message;

    occurredAt: string;

    tenantId: string;
  }

  export namespace Data {
    export interface Chat {
      id: string;

      avatarUrl: string | null;

      createdAt: string;

      entrypointId: string;

      externalId: string | null;

      kind: 'dm' | 'group';

      name: string | null;

      platform: 'whatsapp' | 'whatsapp_lite' | 'instagram' | 'telegram';

      status: 'ongoing' | 'ignored' | 'completed';

      updatedAt: string;
    }

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

        fileName?: string | null;
      }
    }
  }
}

export interface MessagesReceivedWebhookPayload {
  chat: MessagesReceivedWebhookPayload.Chat;

  chatId: string;

  entrypointId: string;

  message: MessagesReceivedWebhookPayload.Message;

  occurredAt: string;

  tenantId: string;
}

export namespace MessagesReceivedWebhookPayload {
  export interface Chat {
    id: string;

    avatarUrl: string | null;

    createdAt: string;

    entrypointId: string;

    externalId: string | null;

    kind: 'dm' | 'group';

    name: string | null;

    platform: 'whatsapp' | 'whatsapp_lite' | 'instagram' | 'telegram';

    status: 'ongoing' | 'ignored' | 'completed';

    updatedAt: string;
  }

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

    export interface Media {
      id: string;

      mimeType: string;

      type: 'image' | 'audio' | 'video' | 'document';

      url: string;

      fileName?: string | null;
    }
  }
}

export interface MessagesSentWebhook {
  data: MessagesSentWebhook.Data;

  event: 'messages.sent';
}

export namespace MessagesSentWebhook {
  export interface Data {
    chat: Data.Chat;

    chatId: string;

    message: Data.Message;

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

  export namespace Data {
    export interface Chat {
      id: string;

      avatarUrl: string | null;

      createdAt: string;

      entrypointId: string;

      externalId: string | null;

      kind: 'dm' | 'group';

      name: string | null;

      platform: 'whatsapp' | 'whatsapp_lite' | 'instagram' | 'telegram';

      status: 'ongoing' | 'ignored' | 'completed';

      updatedAt: string;
    }

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

        fileName?: string | null;
      }
    }
  }
}

export interface MessagesSentWebhookPayload {
  chat: MessagesSentWebhookPayload.Chat;

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
  export interface Chat {
    id: string;

    avatarUrl: string | null;

    createdAt: string;

    entrypointId: string;

    externalId: string | null;

    kind: 'dm' | 'group';

    name: string | null;

    platform: 'whatsapp' | 'whatsapp_lite' | 'instagram' | 'telegram';

    status: 'ongoing' | 'ignored' | 'completed';

    updatedAt: string;
  }

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

    export interface Media {
      id: string;

      mimeType: string;

      type: 'image' | 'audio' | 'video' | 'document';

      url: string;

      fileName?: string | null;
    }
  }
}

export type SparkWebhookBody = MessagesReceivedWebhook | MessagesSentWebhook | ChatsCreatedWebhook;

export declare namespace Webhooks {
  export {
    type ChatsCreatedWebhook as ChatsCreatedWebhook,
    type ChatsCreatedWebhookPayload as ChatsCreatedWebhookPayload,
    type MessagesReceivedWebhook as MessagesReceivedWebhook,
    type MessagesReceivedWebhookPayload as MessagesReceivedWebhookPayload,
    type MessagesSentWebhook as MessagesSentWebhook,
    type MessagesSentWebhookPayload as MessagesSentWebhookPayload,
    type SparkWebhookBody as SparkWebhookBody,
  };
}
