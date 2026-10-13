// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MessageTemplates extends APIResource {
  /**
   * Cria um modelo interno ou um modelo oficial de campanha na Meta.
   */
  create(
    body: MessageTemplateCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessageTemplateCreateResponse> {
    return this._client.post('/v1/message-templates', { body, ...options });
  }

  /**
   * Inclui variáveis manuais (commonVariables) necessárias ao iniciar campanhas.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessageTemplateRetrieveResponse> {
    return this._client.get(path`/v1/message-templates/${id}`, options);
  }

  /**
   * Edita o rótulo interno ou o conteúdo. Alterar o conteúdo de um modelo oficial
   * aprovado ou rejeitado devolve o modelo para análise.
   */
  update(
    id: string,
    body: MessageTemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MessageTemplateUpdateResponse> {
    return this._client.patch(path`/v1/message-templates/${id}`, { body, ...options });
  }

  /**
   * Lista templates disponíveis para uso em campanhas e envios individuais.
   */
  list(options?: RequestOptions): APIPromise<MessageTemplateListResponse> {
    return this._client.get('/v1/message-templates', options);
  }

  /**
   * Remove o modelo no Spark. Se for oficial, também remove esse idioma na Meta.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/message-templates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MessageTemplateCreateResponse {
  id: string;

  body: string | null;

  buttons: Array<MessageTemplateCreateResponse.Button>;

  category: string | null;

  /**
   * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
   * campanha.
   */
  commonVariables: Array<MessageTemplateCreateResponse.CommonVariable>;

  createdAt: string;

  description: string | null;

  footer: string | null;

  header: MessageTemplateCreateResponse.UnionMember0 | MessageTemplateCreateResponse.UnionMember1 | null;

  isOfficial: boolean;

  items: Array<MessageTemplateCreateResponse.Item>;

  language: string | null;

  metaRejectedReason: string | null;

  metaTemplateName: string | null;

  metaTemplateStatus: string | null;

  name: string;

  updatedAt: string;

  variables: Array<MessageTemplateCreateResponse.Variable>;
}

export namespace MessageTemplateCreateResponse {
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

    source?: string;
  }
}

export interface MessageTemplateRetrieveResponse {
  id: string;

  body: string | null;

  buttons: Array<MessageTemplateRetrieveResponse.Button>;

  category: string | null;

  /**
   * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
   * campanha.
   */
  commonVariables: Array<MessageTemplateRetrieveResponse.CommonVariable>;

  createdAt: string;

  description: string | null;

  footer: string | null;

  header: MessageTemplateRetrieveResponse.UnionMember0 | MessageTemplateRetrieveResponse.UnionMember1 | null;

  isOfficial: boolean;

  items: Array<MessageTemplateRetrieveResponse.Item>;

  language: string | null;

  metaRejectedReason: string | null;

  metaTemplateName: string | null;

  metaTemplateStatus: string | null;

  name: string;

  updatedAt: string;

  variables: Array<MessageTemplateRetrieveResponse.Variable>;
}

export namespace MessageTemplateRetrieveResponse {
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

    source?: string;
  }
}

export interface MessageTemplateUpdateResponse {
  id: string;

  body: string | null;

  buttons: Array<MessageTemplateUpdateResponse.Button>;

  category: string | null;

  /**
   * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
   * campanha.
   */
  commonVariables: Array<MessageTemplateUpdateResponse.CommonVariable>;

  createdAt: string;

  description: string | null;

  footer: string | null;

  header: MessageTemplateUpdateResponse.UnionMember0 | MessageTemplateUpdateResponse.UnionMember1 | null;

  isOfficial: boolean;

  items: Array<MessageTemplateUpdateResponse.Item>;

  language: string | null;

  metaRejectedReason: string | null;

  metaTemplateName: string | null;

  metaTemplateStatus: string | null;

  name: string;

  updatedAt: string;

  variables: Array<MessageTemplateUpdateResponse.Variable>;
}

export namespace MessageTemplateUpdateResponse {
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

    source?: string;
  }
}

export interface MessageTemplateListResponse {
  templates: Array<MessageTemplateListResponse.Template>;
}

export namespace MessageTemplateListResponse {
  export interface Template {
    id: string;

    category: string | null;

    createdAt: string;

    description: string | null;

    isOfficial: boolean;

    language: string | null;

    metaRejectedReason: string | null;

    metaTemplateName: string | null;

    metaTemplateStatus: string | null;

    name: string;

    updatedAt: string;
  }
}

export type MessageTemplateCreateParams =
  | MessageTemplateCreateParams.Variant0
  | MessageTemplateCreateParams.Variant1;

export declare namespace MessageTemplateCreateParams {
  export interface Variant0 {
    body: string;

    category: 'MARKETING' | 'UTILITY';

    isOfficial: true;

    language: string;

    metaTemplateName: string;

    name: string;

    whatsappEntrypointId: string;

    buttons?: Array<Variant0.Button>;

    description?: string | null;

    footer?: string;

    header?: Variant0.UnionMember0 | Variant0.UnionMember1;

    variables?: Array<Variant0.Variable>;
  }

  export namespace Variant0 {
    export interface Button {
      text: string;

      type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

      phone_number?: string;

      url?: string;
    }

    export interface UnionMember0 {
      format: 'TEXT';

      text: string;
    }

    export interface UnionMember1 {
      format: 'IMAGE' | 'VIDEO' | 'DOCUMENT';

      mediaId: string;
    }

    export interface Variable {
      example: string;

      index: number;

      kind: 'common' | 'lead';

      title: string;

      source?: string;
    }
  }

  export interface Variant1 {
    isOfficial: false;

    items: Array<Variant1.Item>;

    name: string;

    description?: string | null;

    variables?: Array<Variant1.Variable>;
  }

  export namespace Variant1 {
    export interface Item {
      order: number;

      type: 'text' | 'image' | 'audio' | 'video' | 'document';

      mediaId?: string | null;

      text?: string | null;
    }

    export interface Variable {
      example: string;

      index: number;

      kind: 'common' | 'lead';

      title: string;

      source?: string;
    }
  }
}

export interface MessageTemplateUpdateParams {
  body?: string;

  buttons?: Array<MessageTemplateUpdateParams.Button>;

  category?: 'MARKETING' | 'UTILITY';

  description?: string | null;

  footer?: string | null;

  header?: MessageTemplateUpdateParams.UnionMember0 | MessageTemplateUpdateParams.UnionMember1 | null;

  items?: Array<MessageTemplateUpdateParams.Item>;

  language?: string;

  metaTemplateName?: string;

  name?: string;

  variables?: Array<MessageTemplateUpdateParams.Variable>;
}

export namespace MessageTemplateUpdateParams {
  export interface Button {
    text: string;

    type: 'QUICK_REPLY' | 'URL' | 'PHONE_NUMBER';

    phone_number?: string;

    url?: string;
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
    order: number;

    type: 'text' | 'image' | 'audio' | 'video' | 'document';

    mediaId?: string | null;

    text?: string | null;
  }

  export interface Variable {
    example: string;

    index: number;

    kind: 'common' | 'lead';

    title: string;

    source?: string;
  }
}

export declare namespace MessageTemplates {
  export {
    type MessageTemplateCreateResponse as MessageTemplateCreateResponse,
    type MessageTemplateRetrieveResponse as MessageTemplateRetrieveResponse,
    type MessageTemplateUpdateResponse as MessageTemplateUpdateResponse,
    type MessageTemplateListResponse as MessageTemplateListResponse,
    type MessageTemplateCreateParams as MessageTemplateCreateParams,
    type MessageTemplateUpdateParams as MessageTemplateUpdateParams,
  };
}
