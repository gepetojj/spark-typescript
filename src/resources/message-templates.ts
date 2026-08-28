// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MessageTemplates extends APIResource {
  /**
   * Inclui variáveis manuais (commonVariables) necessárias ao iniciar campanhas.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessageTemplateRetrieveResponse> {
    return this._client.get(path`/v1/message-templates/${id}`, options);
  }

  /**
   * Lista templates disponíveis para uso em campanhas e envios individuais.
   */
  list(options?: RequestOptions): APIPromise<MessageTemplateListResponse> {
    return this._client.get('/v1/message-templates', options);
  }
}

export interface MessageTemplateRetrieveResponse {
  id: string;

  /**
   * Variáveis manuais que devem ser informadas em commonVariables ao iniciar uma
   * campanha.
   */
  commonVariables: Array<MessageTemplateRetrieveResponse.CommonVariable>;

  createdAt: string;

  description: string | null;

  isOfficial: boolean;

  items: Array<MessageTemplateRetrieveResponse.Item>;

  metaTemplateStatus: string | null;

  name: string;

  updatedAt: string;
}

export namespace MessageTemplateRetrieveResponse {
  export interface CommonVariable {
    /**
     * Chave da variável (ex.: var1, var2).
     */
    key: string;

    label?: string;

    required?: boolean;
  }

  export interface Item {
    id: string;

    mediaId: string | null;

    order: number;

    text: string | null;

    type: string;
  }
}

export interface MessageTemplateListResponse {
  templates: Array<MessageTemplateListResponse.Template>;
}

export namespace MessageTemplateListResponse {
  export interface Template {
    id: string;

    createdAt: string;

    description: string | null;

    isOfficial: boolean;

    metaTemplateStatus: string | null;

    name: string;

    updatedAt: string;
  }
}

export declare namespace MessageTemplates {
  export {
    type MessageTemplateRetrieveResponse as MessageTemplateRetrieveResponse,
    type MessageTemplateListResponse as MessageTemplateListResponse,
  };
}
