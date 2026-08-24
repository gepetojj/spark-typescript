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

  /**
   * Recebe vários contatos para o mesmo ponto de entrada e enfileira a criação ou
   * atualização em background. Diferente do upsert individual, esta operação não
   * retorna IDs de chat ou lead. A plataforma é inferida pelo entrypointId (apenas
   * WhatsApp e WhatsApp Lite). Telefones inválidos e limites de plano são tratados
   * item a item durante o processamento.
   */
  upsertBatch(body: ChatUpsertBatchParams, options?: RequestOptions): APIPromise<ChatUpsertBatchResponse> {
    return this._client.post('/v1/chats/batch', { body, ...options });
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

export interface ChatUpsertBatchResponse {
  /**
   * Quantidade de itens enfileirados para upsert em background.
   */
  queued: number;
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

export interface ChatUpsertBatchParams {
  /**
   * Lista de conversas DM a criar ou atualizar. O processamento ocorre em background
   * e a resposta não inclui IDs dos chats ou leads.
   */
  batch: Array<ChatUpsertBatchParams.Batch>;

  /**
   * ID do ponto de entrada (canal) no Spark. A plataforma é inferida automaticamente
   * (WhatsApp ou WhatsApp Lite).
   */
  entrypointId: string;

  /**
   * Se verdadeiro (padrão), dispara automações ao criar um novo lead ou chat.
   */
  triggerAutomations?: boolean;
}

export namespace ChatUpsertBatchParams {
  export interface Batch {
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
  }
}

export declare namespace Chats {
  export {
    type ChatUpsertResponse as ChatUpsertResponse,
    type ChatUpsertBatchResponse as ChatUpsertBatchResponse,
    type ChatUpsertParams as ChatUpsertParams,
    type ChatUpsertBatchParams as ChatUpsertBatchParams,
  };
}
