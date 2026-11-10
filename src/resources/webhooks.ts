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

export interface EntrypointsWhatsappConnectedWebhook {
  data: EntrypointsWhatsappConnectedWebhook.Data;

  event: 'entrypoints.whatsapp.connected';
}

export namespace EntrypointsWhatsappConnectedWebhook {
  export interface Data {
    entrypoint: Data.Entrypoint;

    occurredAt: string;

    sessionId: string;

    tenantId: string;
  }

  export namespace Data {
    export interface Entrypoint {
      id: string;

      displayPhone: string | null;

      funnelId: string | null;

      funnelStepId: string | null;

      isCoexistence: boolean;

      name: string | null;

      phoneNumberId: string;

      wabaId: string;
    }
  }
}

export interface EntrypointsWhatsappConnectedWebhookPayload {
  entrypoint: EntrypointsWhatsappConnectedWebhookPayload.Entrypoint;

  occurredAt: string;

  sessionId: string;

  tenantId: string;
}

export namespace EntrypointsWhatsappConnectedWebhookPayload {
  export interface Entrypoint {
    id: string;

    displayPhone: string | null;

    funnelId: string | null;

    funnelStepId: string | null;

    isCoexistence: boolean;

    name: string | null;

    phoneNumberId: string;

    wabaId: string;
  }
}

export interface EntrypointsWhatsappConnectionFailedWebhook {
  data: EntrypointsWhatsappConnectionFailedWebhook.Data;

  event: 'entrypoints.whatsapp.connection_failed';
}

export namespace EntrypointsWhatsappConnectionFailedWebhook {
  export interface Data {
    occurredAt: string;

    reason: 'expired' | 'token_exchange_failed' | 'phone_in_use' | 'funnel_not_found' | 'phone_not_found';

    sessionId: string;

    status: 'failed' | 'expired';

    tenantId: string;
  }
}

export interface EntrypointsWhatsappConnectionFailedWebhookPayload {
  occurredAt: string;

  reason: 'expired' | 'token_exchange_failed' | 'phone_in_use' | 'funnel_not_found' | 'phone_not_found';

  sessionId: string;

  status: 'failed' | 'expired';

  tenantId: string;
}

export interface MessageTemplatesCategoryUpdatedWebhook {
  data: MessageTemplatesCategoryUpdatedWebhook.Data;

  event: 'message_templates.category_updated';
}

export namespace MessageTemplatesCategoryUpdatedWebhook {
  export interface Data {
    occurredAt: string;

    previousCategory: string | null;

    template: Data.Template;

    tenantId: string;
  }

  export namespace Data {
    export interface Template {
      id: string;

      body: string | null;

      buttons: Array<Template.Button>;

      category: string | null;

      /**
       * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
       * campanha.
       */
      commonVariables: Array<Template.CommonVariable>;

      createdAt: string;

      description: string | null;

      footer: string | null;

      header: Template.UnionMember0 | Template.UnionMember1 | null;

      isOfficial: boolean;

      items: Array<Template.Item>;

      language: string | null;

      metaRejectedReason: string | null;

      metaTemplateName: string | null;

      metaTemplateStatus: string | null;

      name: string;

      updatedAt: string;

      variables: Array<Template.Variable>;
    }

    export namespace Template {
      export interface Button {
        text: string;

        type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

        phone_number?: string;

        url?: string;
      }

      export interface CommonVariable {
        /**
         * Chave da variável (ex.: var1, var2).
         */
        key: string;

        label?: string;

        required?: boolean;
      }

      export interface UnionMember0 {
        format: 'TEXT';

        text: string;
      }

      export interface UnionMember1 {
        format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

        mediaId: string;
      }

      export interface Item {
        id: string;

        mediaId: string | null;

        order: number;

        text: string | null;

        type: string;
      }

      export interface Variable {
        example: string;

        index: number;

        kind: 'common' | 'lead';

        title: string;

        source?:
          | 'chat.name'
          | 'chat.contact'
          | 'chat.birthday'
          | 'lead.name'
          | 'lead.contact'
          | 'lead.display_contact'
          | (string & {});
      }
    }
  }
}

export interface MessageTemplatesCategoryUpdatedWebhookPayload {
  occurredAt: string;

  previousCategory: string | null;

  template: MessageTemplatesCategoryUpdatedWebhookPayload.Template;

  tenantId: string;
}

export namespace MessageTemplatesCategoryUpdatedWebhookPayload {
  export interface Template {
    id: string;

    body: string | null;

    buttons: Array<Template.Button>;

    category: string | null;

    /**
     * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
     * campanha.
     */
    commonVariables: Array<Template.CommonVariable>;

    createdAt: string;

    description: string | null;

    footer: string | null;

    header: Template.UnionMember0 | Template.UnionMember1 | null;

    isOfficial: boolean;

    items: Array<Template.Item>;

    language: string | null;

    metaRejectedReason: string | null;

    metaTemplateName: string | null;

    metaTemplateStatus: string | null;

    name: string;

    updatedAt: string;

    variables: Array<Template.Variable>;
  }

  export namespace Template {
    export interface Button {
      text: string;

      type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

      phone_number?: string;

      url?: string;
    }

    export interface CommonVariable {
      /**
       * Chave da variável (ex.: var1, var2).
       */
      key: string;

      label?: string;

      required?: boolean;
    }

    export interface UnionMember0 {
      format: 'TEXT';

      text: string;
    }

    export interface UnionMember1 {
      format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

      mediaId: string;
    }

    export interface Item {
      id: string;

      mediaId: string | null;

      order: number;

      text: string | null;

      type: string;
    }

    export interface Variable {
      example: string;

      index: number;

      kind: 'common' | 'lead';

      title: string;

      source?:
        | 'chat.name'
        | 'chat.contact'
        | 'chat.birthday'
        | 'lead.name'
        | 'lead.contact'
        | 'lead.display_contact'
        | (string & {});
    }
  }
}

export interface MessageTemplatesCreatedWebhook {
  data: MessageTemplatesCreatedWebhook.Data;

  event: 'message_templates.created';
}

export namespace MessageTemplatesCreatedWebhook {
  export interface Data {
    occurredAt: string;

    template: Data.Template;

    tenantId: string;
  }

  export namespace Data {
    export interface Template {
      id: string;

      body: string | null;

      buttons: Array<Template.Button>;

      category: string | null;

      /**
       * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
       * campanha.
       */
      commonVariables: Array<Template.CommonVariable>;

      createdAt: string;

      description: string | null;

      footer: string | null;

      header: Template.UnionMember0 | Template.UnionMember1 | null;

      isOfficial: boolean;

      items: Array<Template.Item>;

      language: string | null;

      metaRejectedReason: string | null;

      metaTemplateName: string | null;

      metaTemplateStatus: string | null;

      name: string;

      updatedAt: string;

      variables: Array<Template.Variable>;
    }

    export namespace Template {
      export interface Button {
        text: string;

        type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

        phone_number?: string;

        url?: string;
      }

      export interface CommonVariable {
        /**
         * Chave da variável (ex.: var1, var2).
         */
        key: string;

        label?: string;

        required?: boolean;
      }

      export interface UnionMember0 {
        format: 'TEXT';

        text: string;
      }

      export interface UnionMember1 {
        format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

        mediaId: string;
      }

      export interface Item {
        id: string;

        mediaId: string | null;

        order: number;

        text: string | null;

        type: string;
      }

      export interface Variable {
        example: string;

        index: number;

        kind: 'common' | 'lead';

        title: string;

        source?:
          | 'chat.name'
          | 'chat.contact'
          | 'chat.birthday'
          | 'lead.name'
          | 'lead.contact'
          | 'lead.display_contact'
          | (string & {});
      }
    }
  }
}

export interface MessageTemplatesCreatedWebhookPayload {
  occurredAt: string;

  template: MessageTemplatesCreatedWebhookPayload.Template;

  tenantId: string;
}

export namespace MessageTemplatesCreatedWebhookPayload {
  export interface Template {
    id: string;

    body: string | null;

    buttons: Array<Template.Button>;

    category: string | null;

    /**
     * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
     * campanha.
     */
    commonVariables: Array<Template.CommonVariable>;

    createdAt: string;

    description: string | null;

    footer: string | null;

    header: Template.UnionMember0 | Template.UnionMember1 | null;

    isOfficial: boolean;

    items: Array<Template.Item>;

    language: string | null;

    metaRejectedReason: string | null;

    metaTemplateName: string | null;

    metaTemplateStatus: string | null;

    name: string;

    updatedAt: string;

    variables: Array<Template.Variable>;
  }

  export namespace Template {
    export interface Button {
      text: string;

      type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

      phone_number?: string;

      url?: string;
    }

    export interface CommonVariable {
      /**
       * Chave da variável (ex.: var1, var2).
       */
      key: string;

      label?: string;

      required?: boolean;
    }

    export interface UnionMember0 {
      format: 'TEXT';

      text: string;
    }

    export interface UnionMember1 {
      format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

      mediaId: string;
    }

    export interface Item {
      id: string;

      mediaId: string | null;

      order: number;

      text: string | null;

      type: string;
    }

    export interface Variable {
      example: string;

      index: number;

      kind: 'common' | 'lead';

      title: string;

      source?:
        | 'chat.name'
        | 'chat.contact'
        | 'chat.birthday'
        | 'lead.name'
        | 'lead.contact'
        | 'lead.display_contact'
        | (string & {});
    }
  }
}

export interface MessageTemplatesDeletedWebhook {
  data: MessageTemplatesDeletedWebhook.Data;

  event: 'message_templates.deleted';
}

export namespace MessageTemplatesDeletedWebhook {
  export interface Data {
    occurredAt: string;

    template: Data.Template;

    tenantId: string;
  }

  export namespace Data {
    export interface Template {
      id: string;

      body: string | null;

      buttons: Array<Template.Button>;

      category: string | null;

      /**
       * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
       * campanha.
       */
      commonVariables: Array<Template.CommonVariable>;

      createdAt: string;

      description: string | null;

      footer: string | null;

      header: Template.UnionMember0 | Template.UnionMember1 | null;

      isOfficial: boolean;

      items: Array<Template.Item>;

      language: string | null;

      metaRejectedReason: string | null;

      metaTemplateName: string | null;

      metaTemplateStatus: string | null;

      name: string;

      updatedAt: string;

      variables: Array<Template.Variable>;
    }

    export namespace Template {
      export interface Button {
        text: string;

        type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

        phone_number?: string;

        url?: string;
      }

      export interface CommonVariable {
        /**
         * Chave da variável (ex.: var1, var2).
         */
        key: string;

        label?: string;

        required?: boolean;
      }

      export interface UnionMember0 {
        format: 'TEXT';

        text: string;
      }

      export interface UnionMember1 {
        format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

        mediaId: string;
      }

      export interface Item {
        id: string;

        mediaId: string | null;

        order: number;

        text: string | null;

        type: string;
      }

      export interface Variable {
        example: string;

        index: number;

        kind: 'common' | 'lead';

        title: string;

        source?:
          | 'chat.name'
          | 'chat.contact'
          | 'chat.birthday'
          | 'lead.name'
          | 'lead.contact'
          | 'lead.display_contact'
          | (string & {});
      }
    }
  }
}

export interface MessageTemplatesDeletedWebhookPayload {
  occurredAt: string;

  template: MessageTemplatesDeletedWebhookPayload.Template;

  tenantId: string;
}

export namespace MessageTemplatesDeletedWebhookPayload {
  export interface Template {
    id: string;

    body: string | null;

    buttons: Array<Template.Button>;

    category: string | null;

    /**
     * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
     * campanha.
     */
    commonVariables: Array<Template.CommonVariable>;

    createdAt: string;

    description: string | null;

    footer: string | null;

    header: Template.UnionMember0 | Template.UnionMember1 | null;

    isOfficial: boolean;

    items: Array<Template.Item>;

    language: string | null;

    metaRejectedReason: string | null;

    metaTemplateName: string | null;

    metaTemplateStatus: string | null;

    name: string;

    updatedAt: string;

    variables: Array<Template.Variable>;
  }

  export namespace Template {
    export interface Button {
      text: string;

      type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

      phone_number?: string;

      url?: string;
    }

    export interface CommonVariable {
      /**
       * Chave da variável (ex.: var1, var2).
       */
      key: string;

      label?: string;

      required?: boolean;
    }

    export interface UnionMember0 {
      format: 'TEXT';

      text: string;
    }

    export interface UnionMember1 {
      format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

      mediaId: string;
    }

    export interface Item {
      id: string;

      mediaId: string | null;

      order: number;

      text: string | null;

      type: string;
    }

    export interface Variable {
      example: string;

      index: number;

      kind: 'common' | 'lead';

      title: string;

      source?:
        | 'chat.name'
        | 'chat.contact'
        | 'chat.birthday'
        | 'lead.name'
        | 'lead.contact'
        | 'lead.display_contact'
        | (string & {});
    }
  }
}

export interface MessageTemplatesStatusUpdatedWebhook {
  data: MessageTemplatesStatusUpdatedWebhook.Data;

  event: 'message_templates.status_updated';
}

export namespace MessageTemplatesStatusUpdatedWebhook {
  export interface Data {
    occurredAt: string;

    previousStatus: string | null;

    template: Data.Template;

    tenantId: string;
  }

  export namespace Data {
    export interface Template {
      id: string;

      body: string | null;

      buttons: Array<Template.Button>;

      category: string | null;

      /**
       * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
       * campanha.
       */
      commonVariables: Array<Template.CommonVariable>;

      createdAt: string;

      description: string | null;

      footer: string | null;

      header: Template.UnionMember0 | Template.UnionMember1 | null;

      isOfficial: boolean;

      items: Array<Template.Item>;

      language: string | null;

      metaRejectedReason: string | null;

      metaTemplateName: string | null;

      metaTemplateStatus: string | null;

      name: string;

      updatedAt: string;

      variables: Array<Template.Variable>;
    }

    export namespace Template {
      export interface Button {
        text: string;

        type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

        phone_number?: string;

        url?: string;
      }

      export interface CommonVariable {
        /**
         * Chave da variável (ex.: var1, var2).
         */
        key: string;

        label?: string;

        required?: boolean;
      }

      export interface UnionMember0 {
        format: 'TEXT';

        text: string;
      }

      export interface UnionMember1 {
        format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

        mediaId: string;
      }

      export interface Item {
        id: string;

        mediaId: string | null;

        order: number;

        text: string | null;

        type: string;
      }

      export interface Variable {
        example: string;

        index: number;

        kind: 'common' | 'lead';

        title: string;

        source?:
          | 'chat.name'
          | 'chat.contact'
          | 'chat.birthday'
          | 'lead.name'
          | 'lead.contact'
          | 'lead.display_contact'
          | (string & {});
      }
    }
  }
}

export interface MessageTemplatesStatusUpdatedWebhookPayload {
  occurredAt: string;

  previousStatus: string | null;

  template: MessageTemplatesStatusUpdatedWebhookPayload.Template;

  tenantId: string;
}

export namespace MessageTemplatesStatusUpdatedWebhookPayload {
  export interface Template {
    id: string;

    body: string | null;

    buttons: Array<Template.Button>;

    category: string | null;

    /**
     * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
     * campanha.
     */
    commonVariables: Array<Template.CommonVariable>;

    createdAt: string;

    description: string | null;

    footer: string | null;

    header: Template.UnionMember0 | Template.UnionMember1 | null;

    isOfficial: boolean;

    items: Array<Template.Item>;

    language: string | null;

    metaRejectedReason: string | null;

    metaTemplateName: string | null;

    metaTemplateStatus: string | null;

    name: string;

    updatedAt: string;

    variables: Array<Template.Variable>;
  }

  export namespace Template {
    export interface Button {
      text: string;

      type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

      phone_number?: string;

      url?: string;
    }

    export interface CommonVariable {
      /**
       * Chave da variável (ex.: var1, var2).
       */
      key: string;

      label?: string;

      required?: boolean;
    }

    export interface UnionMember0 {
      format: 'TEXT';

      text: string;
    }

    export interface UnionMember1 {
      format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

      mediaId: string;
    }

    export interface Item {
      id: string;

      mediaId: string | null;

      order: number;

      text: string | null;

      type: string;
    }

    export interface Variable {
      example: string;

      index: number;

      kind: 'common' | 'lead';

      title: string;

      source?:
        | 'chat.name'
        | 'chat.contact'
        | 'chat.birthday'
        | 'lead.name'
        | 'lead.contact'
        | 'lead.display_contact'
        | (string & {});
    }
  }
}

export interface MessageTemplatesUpdatedWebhook {
  data: MessageTemplatesUpdatedWebhook.Data;

  event: 'message_templates.updated';
}

export namespace MessageTemplatesUpdatedWebhook {
  export interface Data {
    occurredAt: string;

    template: Data.Template;

    tenantId: string;
  }

  export namespace Data {
    export interface Template {
      id: string;

      body: string | null;

      buttons: Array<Template.Button>;

      category: string | null;

      /**
       * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
       * campanha.
       */
      commonVariables: Array<Template.CommonVariable>;

      createdAt: string;

      description: string | null;

      footer: string | null;

      header: Template.UnionMember0 | Template.UnionMember1 | null;

      isOfficial: boolean;

      items: Array<Template.Item>;

      language: string | null;

      metaRejectedReason: string | null;

      metaTemplateName: string | null;

      metaTemplateStatus: string | null;

      name: string;

      updatedAt: string;

      variables: Array<Template.Variable>;
    }

    export namespace Template {
      export interface Button {
        text: string;

        type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

        phone_number?: string;

        url?: string;
      }

      export interface CommonVariable {
        /**
         * Chave da variável (ex.: var1, var2).
         */
        key: string;

        label?: string;

        required?: boolean;
      }

      export interface UnionMember0 {
        format: 'TEXT';

        text: string;
      }

      export interface UnionMember1 {
        format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

        mediaId: string;
      }

      export interface Item {
        id: string;

        mediaId: string | null;

        order: number;

        text: string | null;

        type: string;
      }

      export interface Variable {
        example: string;

        index: number;

        kind: 'common' | 'lead';

        title: string;

        source?:
          | 'chat.name'
          | 'chat.contact'
          | 'chat.birthday'
          | 'lead.name'
          | 'lead.contact'
          | 'lead.display_contact'
          | (string & {});
      }
    }
  }
}

export interface MessageTemplatesUpdatedWebhookPayload {
  occurredAt: string;

  template: MessageTemplatesUpdatedWebhookPayload.Template;

  tenantId: string;
}

export namespace MessageTemplatesUpdatedWebhookPayload {
  export interface Template {
    id: string;

    body: string | null;

    buttons: Array<Template.Button>;

    category: string | null;

    /**
     * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
     * campanha.
     */
    commonVariables: Array<Template.CommonVariable>;

    createdAt: string;

    description: string | null;

    footer: string | null;

    header: Template.UnionMember0 | Template.UnionMember1 | null;

    isOfficial: boolean;

    items: Array<Template.Item>;

    language: string | null;

    metaRejectedReason: string | null;

    metaTemplateName: string | null;

    metaTemplateStatus: string | null;

    name: string;

    updatedAt: string;

    variables: Array<Template.Variable>;
  }

  export namespace Template {
    export interface Button {
      text: string;

      type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

      phone_number?: string;

      url?: string;
    }

    export interface CommonVariable {
      /**
       * Chave da variável (ex.: var1, var2).
       */
      key: string;

      label?: string;

      required?: boolean;
    }

    export interface UnionMember0 {
      format: 'TEXT';

      text: string;
    }

    export interface UnionMember1 {
      format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

      mediaId: string;
    }

    export interface Item {
      id: string;

      mediaId: string | null;

      order: number;

      text: string | null;

      type: string;
    }

    export interface Variable {
      example: string;

      index: number;

      kind: 'common' | 'lead';

      title: string;

      source?:
        | 'chat.name'
        | 'chat.contact'
        | 'chat.birthday'
        | 'lead.name'
        | 'lead.contact'
        | 'lead.display_contact'
        | (string & {});
    }
  }
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
      | 'business_app'
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
    | 'business_app'
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

export type SparkWebhookBody =
  | MessagesReceivedWebhook
  | MessagesSentWebhook
  | ChatsCreatedWebhook
  | EntrypointsWhatsappConnectedWebhook
  | EntrypointsWhatsappConnectionFailedWebhook
  | SparkWebhookBody.SparkWebhookBodyEntrypointsWhatsappHistorySynced
  | MessageTemplatesCreatedWebhook
  | MessageTemplatesUpdatedWebhook
  | MessageTemplatesDeletedWebhook
  | MessageTemplatesStatusUpdatedWebhook
  | MessageTemplatesCategoryUpdatedWebhook;

export namespace SparkWebhookBody {
  export interface SparkWebhookBodyEntrypointsWhatsappHistorySynced {
    data: SparkWebhookBodyEntrypointsWhatsappHistorySynced.Data;

    event: 'entrypoints.whatsapp.history_synced';
  }

  export namespace SparkWebhookBodyEntrypointsWhatsappHistorySynced {
    export interface Data {
      entrypointId: string;

      importedChats: number;

      importedMessages: number;

      occurredAt: string;

      tenantId: string;
    }
  }
}

export declare namespace Webhooks {
  export {
    type ChatsCreatedWebhook as ChatsCreatedWebhook,
    type ChatsCreatedWebhookPayload as ChatsCreatedWebhookPayload,
    type EntrypointsWhatsappConnectedWebhook as EntrypointsWhatsappConnectedWebhook,
    type EntrypointsWhatsappConnectedWebhookPayload as EntrypointsWhatsappConnectedWebhookPayload,
    type EntrypointsWhatsappConnectionFailedWebhook as EntrypointsWhatsappConnectionFailedWebhook,
    type EntrypointsWhatsappConnectionFailedWebhookPayload as EntrypointsWhatsappConnectionFailedWebhookPayload,
    type MessageTemplatesCategoryUpdatedWebhook as MessageTemplatesCategoryUpdatedWebhook,
    type MessageTemplatesCategoryUpdatedWebhookPayload as MessageTemplatesCategoryUpdatedWebhookPayload,
    type MessageTemplatesCreatedWebhook as MessageTemplatesCreatedWebhook,
    type MessageTemplatesCreatedWebhookPayload as MessageTemplatesCreatedWebhookPayload,
    type MessageTemplatesDeletedWebhook as MessageTemplatesDeletedWebhook,
    type MessageTemplatesDeletedWebhookPayload as MessageTemplatesDeletedWebhookPayload,
    type MessageTemplatesStatusUpdatedWebhook as MessageTemplatesStatusUpdatedWebhook,
    type MessageTemplatesStatusUpdatedWebhookPayload as MessageTemplatesStatusUpdatedWebhookPayload,
    type MessageTemplatesUpdatedWebhook as MessageTemplatesUpdatedWebhook,
    type MessageTemplatesUpdatedWebhookPayload as MessageTemplatesUpdatedWebhookPayload,
    type MessagesReceivedWebhook as MessagesReceivedWebhook,
    type MessagesReceivedWebhookPayload as MessagesReceivedWebhookPayload,
    type MessagesSentWebhook as MessagesSentWebhook,
    type MessagesSentWebhookPayload as MessagesSentWebhookPayload,
    type SparkWebhookBody as SparkWebhookBody,
  };
}
