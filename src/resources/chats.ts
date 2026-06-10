// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Chats extends APIResource {
  /**
   * Cria ou atualiza uma conversa direta (DM) com um contato. A plataforma é
   * inferida pelo entrypointId (apenas WhatsApp e WhatsApp Lite). O telefone é
   * normalizado automaticamente para o padrão E.164. Se o lead ainda não existir,
   * ele é criado nesta requisição. Se o chat já existir para o mesmo entrypoint e
   * telefone, atualiza o nome do chat quando informado.
   */
  upsert(body: ChatUpsertParams, options?: RequestOptions): APIPromise<ChatUpsertResponse> {
    return this._client.post('/v1/chats', { body, ...options });
  }
}

export interface ChatUpsertResponse {
  /**
   * ID do chat no Spark.
   */
  chatId: string;

  /**
   * ID do lead vinculado ao chat (criado nesta requisição ou já existente).
   */
  leadId: string;
}

export interface ChatUpsertParams {
  /**
   * ID do ponto de entrada (canal) no Spark. A plataforma é inferida automaticamente
   * (WhatsApp ou WhatsApp Lite).
   */
  entrypointId: string;

  /**
   * Telefone do contato em qualquer formato comum. Será normalizado para o padrão
   * E.164 da plataforma (ex.: 5511999999999).
   */
  phone: string;

  /**
   * Nome exibido no chat (conversa DM). Se omitido, o chat é criado sem nome
   * personalizado. Ao reutilizar um chat existente, atualiza o nome quando
   * informado.
   */
  name?: string;

  /**
   * Se verdadeiro (padrão), dispara automações ao criar um novo lead ou chat.
   */
  triggerAutomations?: boolean;
}

export declare namespace Chats {
  export { type ChatUpsertResponse as ChatUpsertResponse, type ChatUpsertParams as ChatUpsertParams };
}
