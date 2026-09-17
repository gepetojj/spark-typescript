// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Marca a mensagem recebida como lida, sem iniciar o indicador de digitação.
   */
  markAsRead(messageID: string, params: MessageMarkAsReadParams, options?: RequestOptions): APIPromise<void> {
    const { chatId } = params;
    return this._client.post(path`/v1/messaging/chats/${chatId}/messages/${messageID}/read`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Marca a mensagem recebida como lida e inicia o indicador de digitação.
   */
  markAsReadAndType(
    messageID: string,
    params: MessageMarkAsReadAndTypeParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { chatId } = params;
    return this._client.post(path`/v1/messaging/chats/${chatId}/messages/${messageID}/read-and-type`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MessageMarkAsReadParams {
  /**
   * ID do chat no Spark
   */
  chatId: string;
}

export interface MessageMarkAsReadAndTypeParams {
  /**
   * ID do chat no Spark
   */
  chatId: string;
}

export declare namespace Messages {
  export {
    type MessageMarkAsReadParams as MessageMarkAsReadParams,
    type MessageMarkAsReadAndTypeParams as MessageMarkAsReadAndTypeParams,
  };
}
