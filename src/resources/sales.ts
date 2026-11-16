// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Sales extends APIResource {
  /**
   * Registra no chat uma venda que aconteceu em outro sistema (loja virtual, ERP,
   * outro meio de pagamento). Por padrão a venda entra `pending` e vai para a
   * aprovação do gestor; com `status: "confirmed"` entra confirmada e conta na
   * receita na hora. O `externalId` é obrigatório: repetir a chamada com o mesmo
   * valor devolve a venda já registrada com 200, sem mudar nada.
   */
  create(chatID: string, body: SaleCreateParams, options?: RequestOptions): APIPromise<SaleCreateResponse> {
    return this._client.post(path`/v1/chats/${chatID}/sales`, { body, ...options });
  }

  /**
   * Consulta uma venda
   */
  retrieve(saleID: string, options?: RequestOptions): APIPromise<SaleRetrieveResponse> {
    return this._client.get(path`/v1/sales/${saleID}`, options);
  }

  /**
   * Vendas de todas as origens, da data de venda mais recente para a mais antiga.
   * Para a próxima página, envie o `nextCursor` recebido em `cursor`; sem
   * `nextCursor`, não há mais vendas.
   */
  list(
    query: SaleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleListResponse> {
    return this._client.get('/v1/sales', { query, ...options });
  }
}

export interface SaleCreateResponse {
  /**
   * Falso quando o `externalId` já existia e a venda devolvida é a original.
   */
  created: boolean;

  sale: SaleCreateResponse.Sale;
}

export namespace SaleCreateResponse {
  export interface Sale {
    id: string;

    amount: number;

    chatId: string;

    createdAt: string;

    currency: string;

    externalId: string | null;

    saleDate: string;

    /**
     * Origem: `manual` (equipe), `payment` (cobrança paga), `receipt` (comprovante),
     * `api` ou `ecommerce` (loja virtual, recuperação de carrinho).
     */
    source: 'manual' | 'payment' | 'receipt' | 'api' | 'ecommerce';

    /**
     * `pending` (aguarda aprovação do gestor), `confirmed`, `cancelled` ou `reversed`
     * (pagamento estornado).
     */
    status: 'pending' | 'confirmed' | 'cancelled' | 'reversed';
  }
}

export interface SaleRetrieveResponse {
  id: string;

  amount: number;

  chatId: string;

  createdAt: string;

  currency: string;

  externalId: string | null;

  saleDate: string;

  /**
   * Origem: `manual` (equipe), `payment` (cobrança paga), `receipt` (comprovante),
   * `api` ou `ecommerce` (loja virtual, recuperação de carrinho).
   */
  source: 'manual' | 'payment' | 'receipt' | 'api' | 'ecommerce';

  /**
   * `pending` (aguarda aprovação do gestor), `confirmed`, `cancelled` ou `reversed`
   * (pagamento estornado).
   */
  status: 'pending' | 'confirmed' | 'cancelled' | 'reversed';
}

export interface SaleListResponse {
  records: Array<SaleListResponse.Record>;

  nextCursor?: string;
}

export namespace SaleListResponse {
  export interface Record {
    id: string;

    amount: number;

    chatId: string;

    createdAt: string;

    currency: string;

    externalId: string | null;

    saleDate: string;

    /**
     * Origem: `manual` (equipe), `payment` (cobrança paga), `receipt` (comprovante),
     * `api` ou `ecommerce` (loja virtual, recuperação de carrinho).
     */
    source: 'manual' | 'payment' | 'receipt' | 'api' | 'ecommerce';

    /**
     * `pending` (aguarda aprovação do gestor), `confirmed`, `cancelled` ou `reversed`
     * (pagamento estornado).
     */
    status: 'pending' | 'confirmed' | 'cancelled' | 'reversed';
  }
}

export interface SaleCreateParams {
  /**
   * Valor da venda, com até 2 casas decimais.
   */
  amount: number;

  /**
   * Seu identificador da venda (1 a 128 caracteres), único na organização. Repetir a
   * chamada com o mesmo valor devolve a venda já registrada, sem mudar nada.
   */
  externalId: string;

  /**
   * Data da venda em ISO 8601 (`YYYY-MM-DD` ou data e hora com fuso).
   */
  saleDate: (string & {}) | (string & {});

  /**
   * Observação interna; não volta nas respostas da API.
   */
  note?: string;

  /**
   * `pending` (padrão) vai para aprovação do gestor; `confirmed` entra confirmada na
   * hora.
   */
  status?: 'pending' | 'confirmed';
}

export interface SaleListParams {
  /**
   * Só as vendas deste chat.
   */
  chatId?: string;

  /**
   * `nextCursor` da página anterior.
   */
  cursor?: string;

  /**
   * Data da venda a partir de (ISO 8601).
   */
  from?: string;

  /**
   * Tamanho da página (1-50; padrão 20).
   */
  limit?: number;

  source?: 'manual' | 'payment' | 'receipt' | 'api' | 'ecommerce';

  status?: 'pending' | 'confirmed' | 'cancelled' | 'reversed';

  /**
   * Data da venda até (ISO 8601). Só a data (`YYYY-MM-DD`) inclui o dia inteiro, em
   * UTC.
   */
  to?: string;
}

export declare namespace Sales {
  export {
    type SaleCreateResponse as SaleCreateResponse,
    type SaleRetrieveResponse as SaleRetrieveResponse,
    type SaleListResponse as SaleListResponse,
    type SaleCreateParams as SaleCreateParams,
    type SaleListParams as SaleListParams,
  };
}
