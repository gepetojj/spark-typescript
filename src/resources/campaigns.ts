// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Campaigns extends APIResource {
  /**
   * Cria uma campanha em rascunho. Use POST /v1/campaigns/{id}/start para iniciar o
   * disparo.
   */
  create(body: CampaignCreateParams, options?: RequestOptions): APIPromise<CampaignCreateResponse> {
    return this._client.post('/v1/campaigns', { body, ...options });
  }

  /**
   * Detalhes da campanha
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignRetrieveResponse> {
    return this._client.get(path`/v1/campaigns/${id}`, options);
  }

  /**
   * Listar campanhas
   */
  list(options?: RequestOptions): APIPromise<CampaignListResponse> {
    return this._client.get('/v1/campaigns', options);
  }

  /**
   * Cancelar campanha em andamento
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/v1/campaigns/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retorna campos, operadores e formatos de valor aceitos nos filtros de campanha.
   */
  getFilterSchema(options?: RequestOptions): APIPromise<CampaignGetFilterSchemaResponse> {
    return this._client.get('/v1/campaigns/filters/schema', options);
  }

  /**
   * Calcula quantos chats corresponderiam aos filtros informados, sem criar
   * campanha.
   */
  previewAudience(
    body: CampaignPreviewAudienceParams,
    options?: RequestOptions,
  ): APIPromise<CampaignPreviewAudienceResponse> {
    return this._client.post('/v1/campaigns/audience-preview', { body, ...options });
  }

  /**
   * Progresso de uma execução
   */
  retrieveExecution(
    executionID: string,
    params: CampaignRetrieveExecutionParams,
    options?: RequestOptions,
  ): APIPromise<CampaignRetrieveExecutionResponse> {
    const { id } = params;
    return this._client.get(path`/v1/campaigns/${id}/executions/${executionID}`, options);
  }

  /**
   * Inicia o disparo para o público-alvo configurado. Informe commonVariables se o
   * template exigir variáveis manuais.
   */
  start(id: string, body: CampaignStartParams, options?: RequestOptions): APIPromise<CampaignStartResponse> {
    return this._client.post(path`/v1/campaigns/${id}/start`, { body, ...options });
  }
}

export interface CampaignCreateResponse {
  campaignId: string;

  status: 'draft';
}

export interface CampaignRetrieveResponse {
  id: string;

  cadence: number;

  description: string | null;

  executions: Array<CampaignRetrieveResponse.Execution>;

  name: string;

  /**
   * Canal de envio da campanha. Define compatibilidade com templates oficiais e
   * limites de cadência.
   */
  platform: 'whatsapp_lite' | 'whatsapp' | 'instagram';

  status: 'draft' | 'processing' | 'completed' | 'canceled' | 'failed';

  templateId: string | null;
}

export namespace CampaignRetrieveResponse {
  export interface Execution {
    id: string;

    completedAt: string | null;

    failedCount: number;

    sentCount: number;

    startedAt: string | null;

    status: 'draft' | 'processing' | 'completed' | 'canceled' | 'failed';

    targetCount: number;
  }
}

export interface CampaignListResponse {
  campaigns: Array<CampaignListResponse.Campaign>;
}

export namespace CampaignListResponse {
  export interface Campaign {
    id: string;

    cadence: number;

    description: string | null;

    name: string;

    /**
     * Canal de envio da campanha. Define compatibilidade com templates oficiais e
     * limites de cadência.
     */
    platform: 'whatsapp_lite' | 'whatsapp' | 'instagram';

    status: 'draft' | 'processing' | 'completed' | 'canceled' | 'failed';

    templateId: string | null;
  }
}

export interface CampaignGetFilterSchemaResponse {
  combinationRules: CampaignGetFilterSchemaResponse.CombinationRules;

  fields: Array<CampaignGetFilterSchemaResponse.Field>;
}

export namespace CampaignGetFilterSchemaResponse {
  export interface CombinationRules {
    betweenGroups: string;

    description: string;

    groupCombinator: string;
  }

  export interface Field {
    description: string;

    field: string;

    operators: Array<string>;

    type: string;

    valueFormat: string;
  }
}

export interface CampaignPreviewAudienceResponse {
  /**
   * Quantidade estimada de chats que receberiam o disparo.
   */
  estimatedCount: number;
}

export interface CampaignRetrieveExecutionResponse {
  id: string;

  failedCount: number;

  progress: number;

  sentCount: number;

  status: 'draft' | 'processing' | 'completed' | 'canceled' | 'failed';

  targetCount: number;
}

export interface CampaignStartResponse {
  executionId: string;

  status: 'processing';
}

export interface CampaignCreateParams {
  /**
   * Mensagens por minuto (cadência). Ex.: 10 envia até 10 mensagens por minuto.
   */
  cadence: number;

  /**
   * Nome único da campanha dentro da organização.
   */
  name: string;

  /**
   * Canal de envio da campanha. Define compatibilidade com templates oficiais e
   * limites de cadência.
   */
  platform: 'whatsapp_lite' | 'whatsapp' | 'instagram';

  /**
   * ID semântico do modelo de mensagem cadastrado no Spark.
   */
  templateId: string;

  /**
   * Descrição opcional da campanha.
   */
  description?: string;

  /**
   * Grupos de filtros de público-alvo. Grupos são combinados com AND.
   */
  filters?: Array<CampaignCreateParams.Filter>;
}

export namespace CampaignCreateParams {
  export interface Filter {
    /**
     * Combina as condições dentro deste grupo.
     */
    combinator: 'and' | 'or';

    statements: Array<Filter.Statement>;
  }

  export namespace Filter {
    export interface Statement {
      /**
       * Campo do chat usado na condição. Consulte GET /v1/campaigns/filters/schema para
       * detalhes.
       */
      field:
        | 'chat.platform'
        | 'chat.status'
        | 'chat.monetization'
        | 'chat.entrypointId'
        | 'chat.funnelStepId'
        | 'chat.trackingLinkId'
        | 'chat.isGroupChat'
        | 'chat.isAnswered'
        | 'chat.needsHumanAttention'
        | 'chat.attentionReason'
        | 'chat.tagIds'
        | 'chat.assignedUserId'
        | 'chat.virtual.participants-count'
        | 'chat.virtual.dm-participant.contact'
        | 'chat.virtual.dm-participant.birthDate'
        | 'chat.virtual.lastMessageAt'
        | 'chat.virtual.lastUpdateAt';

      /**
       * Operador de comparação. Deve ser compatível com o tipo do campo.
       */
      operator:
        | 'equals'
        | 'not-equals'
        | 'contains'
        | 'not-contains'
        | 'in'
        | 'not-in'
        | 'exists'
        | 'not-exists'
        | 'starts-with'
        | 'ends-with'
        | 'not-starts-with'
        | 'not-ends-with'
        | 'greater-than'
        | 'less-than'
        | 'greater-than-or-equal'
        | 'less-than-or-equal'
        | 'between'
        | 'not-between'
        | 'has-any'
        | 'has-all'
        | 'has-none';

      /**
       * Valor principal da condição. Datas em ISO 8601. IDs semânticos como string ou
       * array de strings.
       */
      value?:
        | string
        | number
        | boolean
        | (string & {})
        | Array<string>
        | Array<number>
        | Array<boolean>
        | Array<string>;

      /**
       * Segundo valor para operadores between/not-between ou intervalos.
       */
      value2?:
        | string
        | number
        | boolean
        | (string & {})
        | Array<string>
        | Array<number>
        | Array<boolean>
        | Array<string>;
    }
  }
}

export interface CampaignPreviewAudienceParams {
  /**
   * Grupos de filtros de público-alvo. Para restringir por canal, inclua
   * chat.platform.
   */
  filters?: Array<CampaignPreviewAudienceParams.Filter>;
}

export namespace CampaignPreviewAudienceParams {
  export interface Filter {
    /**
     * Combina as condições dentro deste grupo.
     */
    combinator: 'and' | 'or';

    statements: Array<Filter.Statement>;
  }

  export namespace Filter {
    export interface Statement {
      /**
       * Campo do chat usado na condição. Consulte GET /v1/campaigns/filters/schema para
       * detalhes.
       */
      field:
        | 'chat.platform'
        | 'chat.status'
        | 'chat.monetization'
        | 'chat.entrypointId'
        | 'chat.funnelStepId'
        | 'chat.trackingLinkId'
        | 'chat.isGroupChat'
        | 'chat.isAnswered'
        | 'chat.needsHumanAttention'
        | 'chat.attentionReason'
        | 'chat.tagIds'
        | 'chat.assignedUserId'
        | 'chat.virtual.participants-count'
        | 'chat.virtual.dm-participant.contact'
        | 'chat.virtual.dm-participant.birthDate'
        | 'chat.virtual.lastMessageAt'
        | 'chat.virtual.lastUpdateAt';

      /**
       * Operador de comparação. Deve ser compatível com o tipo do campo.
       */
      operator:
        | 'equals'
        | 'not-equals'
        | 'contains'
        | 'not-contains'
        | 'in'
        | 'not-in'
        | 'exists'
        | 'not-exists'
        | 'starts-with'
        | 'ends-with'
        | 'not-starts-with'
        | 'not-ends-with'
        | 'greater-than'
        | 'less-than'
        | 'greater-than-or-equal'
        | 'less-than-or-equal'
        | 'between'
        | 'not-between'
        | 'has-any'
        | 'has-all'
        | 'has-none';

      /**
       * Valor principal da condição. Datas em ISO 8601. IDs semânticos como string ou
       * array de strings.
       */
      value?:
        | string
        | number
        | boolean
        | (string & {})
        | Array<string>
        | Array<number>
        | Array<boolean>
        | Array<string>;

      /**
       * Segundo valor para operadores between/not-between ou intervalos.
       */
      value2?:
        | string
        | number
        | boolean
        | (string & {})
        | Array<string>
        | Array<number>
        | Array<boolean>
        | Array<string>;
    }
  }
}

export interface CampaignRetrieveExecutionParams {
  /**
   * ID da campanha
   */
  id: string;
}

export interface CampaignStartParams {
  /**
   * Valores das variáveis manuais do template (var1, var2, …) compartilhados por
   * todos os destinatários.
   */
  commonVariables?: { [key: string]: string };
}

export declare namespace Campaigns {
  export {
    type CampaignCreateResponse as CampaignCreateResponse,
    type CampaignRetrieveResponse as CampaignRetrieveResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignGetFilterSchemaResponse as CampaignGetFilterSchemaResponse,
    type CampaignPreviewAudienceResponse as CampaignPreviewAudienceResponse,
    type CampaignRetrieveExecutionResponse as CampaignRetrieveExecutionResponse,
    type CampaignStartResponse as CampaignStartResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignPreviewAudienceParams as CampaignPreviewAudienceParams,
    type CampaignRetrieveExecutionParams as CampaignRetrieveExecutionParams,
    type CampaignStartParams as CampaignStartParams,
  };
}
