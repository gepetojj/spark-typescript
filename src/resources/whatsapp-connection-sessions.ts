// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WhatsappConnectionSessions extends APIResource {
  /**
   * Cria uma sessão e devolve a URL hospedada no Spark para a pessoa concluir o
   * Embedded Signup da Meta. O resultado da conexão chega por webhook ou por GET
   * desta sessão.
   */
  create(
    body: WhatsappConnectionSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<WhatsappConnectionSessionCreateResponse> {
    return this._client.post('/v1/entrypoints/whatsapp/connection-sessions', { body, ...options });
  }

  /**
   * Consulta uma sessão de conexão da API oficial do WhatsApp.
   */
  retrieve(
    sessionID: string,
    options?: RequestOptions,
  ): APIPromise<WhatsappConnectionSessionRetrieveResponse> {
    return this._client.get(path`/v1/entrypoints/whatsapp/connection-sessions/${sessionID}`, options);
  }
}

export interface WhatsappConnectionSessionCreateResponse {
  expiresAt: string;

  sessionId: string;

  status: 'pending';

  url: string;
}

export interface WhatsappConnectionSessionRetrieveResponse {
  coexistence: boolean;

  entrypoint: WhatsappConnectionSessionRetrieveResponse.Entrypoint | null;

  expiresAt: string;

  message: string | null;

  reason: 'expired' | 'token_exchange_failed' | 'phone_in_use' | 'funnel_not_found' | null;

  returnUrl: string | null;

  sessionId: string;

  status: 'pending' | 'completed' | 'failed' | 'expired';
}

export namespace WhatsappConnectionSessionRetrieveResponse {
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

export interface WhatsappConnectionSessionCreateParams {
  /**
   * Quando verdadeiro, abre o fluxo de coexistência com o WhatsApp Business App. O
   * padrão é o Embedded Signup da API oficial.
   */
  coexistence?: boolean;

  /**
   * ID do funil. Informe junto com funnelStepId para garantir que a etapa pertence a
   * esse funil.
   */
  funnelId?: string;

  /**
   * Etapa em que os contatos deste número entram. Omita para não vincular um funil.
   */
  funnelStepId?: string;

  /**
   * URL https para onde a pessoa volta depois de conectar o número.
   */
  returnUrl?: string;
}

export declare namespace WhatsappConnectionSessions {
  export {
    type WhatsappConnectionSessionCreateResponse as WhatsappConnectionSessionCreateResponse,
    type WhatsappConnectionSessionRetrieveResponse as WhatsappConnectionSessionRetrieveResponse,
    type WhatsappConnectionSessionCreateParams as WhatsappConnectionSessionCreateParams,
  };
}
