// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Charges extends APIResource {
  /**
   * Cria a cobrança na conta Asaas da organização e, com `sendMessage` (padrão),
   * manda ao lead a descrição, o valor, o Pix copia e cola e o link. O CPF ou CNPJ é
   * pedido só na primeira cobrança do contato. Fora da janela de 24 h a cobrança é
   * criada e a resposta traz `messageSent: false`. Com `externalId`, repetir a
   * chamada devolve a cobrança já criada com 200, sem outro Pix nem outra mensagem.
   */
  create(
    chatID: string,
    body: ChargeCreateParams,
    options?: RequestOptions,
  ): APIPromise<ChargeCreateResponse> {
    return this._client.post(path`/v1/chats/${chatID}/charges`, { body, ...options });
  }

  /**
   * Consulta uma cobrança
   */
  retrieve(chargeID: string, options?: RequestOptions): APIPromise<ChargeRetrieveResponse> {
    return this._client.get(path`/v1/charges/${chargeID}`, options);
  }

  /**
   * Retorna as cobranças mais recentes primeiro.
   */
  list(chatID: string, options?: RequestOptions): APIPromise<ChargeListResponse> {
    return this._client.get(path`/v1/chats/${chatID}/charges`, options);
  }

  /**
   * Apaga a cobrança no Asaas. Só vale para cobranças pendentes ou vencidas.
   */
  cancel(chargeID: string, options?: RequestOptions): APIPromise<ChargeCancelResponse> {
    return this._client.post(path`/v1/charges/${chargeID}/cancel`, options);
  }
}

export interface ChargeCreateResponse {
  charge: ChargeCreateResponse.Charge;

  /**
   * Falso quando o `externalId` já existia e a cobrança devolvida é a original.
   */
  created: boolean;

  /**
   * Se a mensagem da cobrança foi enviada ao lead. Falso com `sendMessage: false` ou
   * fora da janela de 24 h. Na repetição, diz se a mensagem da primeira chamada
   * saiu.
   */
  messageSent: boolean;
}

export namespace ChargeCreateResponse {
  export interface Charge {
    id: string;

    /**
     * Valor cobrado, em reais.
     */
    amount: number;

    chatId: string;

    createdAt: string;

    description: string;

    /**
     * Vencimento (`YYYY-MM-DD`).
     */
    dueDate: string;

    externalId: string | null;

    /**
     * Link da fatura no Asaas.
     */
    invoiceUrl: string;

    paidAmount: number | null;

    paidAt: string | null;

    /**
     * Pix copia e cola. Vazio quando a conta Asaas não tem chave Pix: use
     * `invoiceUrl`.
     */
    pixPayload: string;

    refundedAmount: number | null;

    /**
     * Venda criada quando a cobrança foi paga.
     */
    saleId: string | null;

    /**
     * Situação da cobrança: `pending` (em aberto), `overdue` (vencida), `paid`,
     * `cancelled`, `refunded` (estorno total) ou `partially_refunded`.
     */
    status: 'pending' | 'paid' | 'overdue' | 'cancelled' | 'refunded' | 'partially_refunded';
  }
}

export interface ChargeRetrieveResponse {
  id: string;

  /**
   * Valor cobrado, em reais.
   */
  amount: number;

  chatId: string;

  createdAt: string;

  description: string;

  /**
   * Vencimento (`YYYY-MM-DD`).
   */
  dueDate: string;

  externalId: string | null;

  /**
   * Link da fatura no Asaas.
   */
  invoiceUrl: string;

  paidAmount: number | null;

  paidAt: string | null;

  /**
   * Pix copia e cola. Vazio quando a conta Asaas não tem chave Pix: use
   * `invoiceUrl`.
   */
  pixPayload: string;

  refundedAmount: number | null;

  /**
   * Venda criada quando a cobrança foi paga.
   */
  saleId: string | null;

  /**
   * Situação da cobrança: `pending` (em aberto), `overdue` (vencida), `paid`,
   * `cancelled`, `refunded` (estorno total) ou `partially_refunded`.
   */
  status: 'pending' | 'paid' | 'overdue' | 'cancelled' | 'refunded' | 'partially_refunded';
}

export interface ChargeListResponse {
  records: Array<ChargeListResponse.Record>;
}

export namespace ChargeListResponse {
  export interface Record {
    id: string;

    /**
     * Valor cobrado, em reais.
     */
    amount: number;

    chatId: string;

    createdAt: string;

    description: string;

    /**
     * Vencimento (`YYYY-MM-DD`).
     */
    dueDate: string;

    externalId: string | null;

    /**
     * Link da fatura no Asaas.
     */
    invoiceUrl: string;

    paidAmount: number | null;

    paidAt: string | null;

    /**
     * Pix copia e cola. Vazio quando a conta Asaas não tem chave Pix: use
     * `invoiceUrl`.
     */
    pixPayload: string;

    refundedAmount: number | null;

    /**
     * Venda criada quando a cobrança foi paga.
     */
    saleId: string | null;

    /**
     * Situação da cobrança: `pending` (em aberto), `overdue` (vencida), `paid`,
     * `cancelled`, `refunded` (estorno total) ou `partially_refunded`.
     */
    status: 'pending' | 'paid' | 'overdue' | 'cancelled' | 'refunded' | 'partially_refunded';
  }
}

export interface ChargeCancelResponse {
  id: string;

  /**
   * Valor cobrado, em reais.
   */
  amount: number;

  chatId: string;

  createdAt: string;

  description: string;

  /**
   * Vencimento (`YYYY-MM-DD`).
   */
  dueDate: string;

  externalId: string | null;

  /**
   * Link da fatura no Asaas.
   */
  invoiceUrl: string;

  paidAmount: number | null;

  paidAt: string | null;

  /**
   * Pix copia e cola. Vazio quando a conta Asaas não tem chave Pix: use
   * `invoiceUrl`.
   */
  pixPayload: string;

  refundedAmount: number | null;

  /**
   * Venda criada quando a cobrança foi paga.
   */
  saleId: string | null;

  /**
   * Situação da cobrança: `pending` (em aberto), `overdue` (vencida), `paid`,
   * `cancelled`, `refunded` (estorno total) ou `partially_refunded`.
   */
  status: 'pending' | 'paid' | 'overdue' | 'cancelled' | 'refunded' | 'partially_refunded';
}

export interface ChargeCreateParams {
  /**
   * Valor em reais, com até 2 casas decimais.
   */
  amount: number;

  /**
   * Descrição que o lead vê na cobrança.
   */
  description: string;

  /**
   * Vencimento (`YYYY-MM-DD`), hoje ou depois.
   */
  dueDate: string;

  /**
   * Seu identificador da cobrança (1 a 128 caracteres), único na organização.
   * Repetir a chamada com o mesmo valor devolve a cobrança já criada, sem outro Pix
   * nem outra mensagem.
   */
  externalId?: string;

  /**
   * Venda pendente da conversa que este pagamento confirma, em vez de criar outra.
   */
  pendingSaleId?: string;

  /**
   * Se verdadeiro (padrão), manda a cobrança e, depois do pagamento, o agradecimento
   * ao lead. Falso só cria a cobrança.
   */
  sendMessage?: boolean;

  /**
   * CPF ou CNPJ de quem paga. Obrigatório na primeira cobrança do contato; as
   * seguintes reaproveitam o documento.
   */
  taxId?: string;
}

export declare namespace Charges {
  export {
    type ChargeCreateResponse as ChargeCreateResponse,
    type ChargeRetrieveResponse as ChargeRetrieveResponse,
    type ChargeListResponse as ChargeListResponse,
    type ChargeCancelResponse as ChargeCancelResponse,
    type ChargeCreateParams as ChargeCreateParams,
  };
}
