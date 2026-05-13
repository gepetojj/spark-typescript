// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Entrypoints extends APIResource {
  /**
   * Obtém um entrypoint por ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EntrypointRetrieveResponse> {
    return this._client.get(path`/v1/entrypoints/${id}`, options);
  }

  /**
   * Lista todos os entrypoints configurados.
   */
  list(
    query: EntrypointListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntrypointListResponse> {
    return this._client.get('/v1/entrypoints', { query, ...options });
  }
}

export interface EntrypointRetrieveResponse {
  entrypoint:
    | EntrypointRetrieveResponse.UnionMember0
    | EntrypointRetrieveResponse.UnionMember1
    | EntrypointRetrieveResponse.UnionMember2
    | EntrypointRetrieveResponse.UnionMember3;
}

export namespace EntrypointRetrieveResponse {
  export interface UnionMember0 {
    id: string;

    displayName: string | null;

    funnelStepId: string | null;

    isCoexistence: boolean;

    name: string | null;

    platform: 'whatsapp';
  }

  export interface UnionMember1 {
    id: string;

    displayName: string | null;

    funnelStepId: string | null;

    name: string | null;

    platform: 'whatsapp_lite';

    state: 'connected' | 'disconnected' | 'restarting' | 'unknown';
  }

  export interface UnionMember2 {
    id: string;

    funnelStepId: string | null;

    name: string | null;

    platform: 'instagram';
  }

  export interface UnionMember3 {
    id: string;

    displayName: string | null;

    funnelStepId: string | null;

    name: string | null;

    platform: 'telegram';
  }
}

export interface EntrypointListResponse {
  entrypoints: Array<EntrypointListResponse.Entrypoint>;
}

export namespace EntrypointListResponse {
  export interface Entrypoint {
    id: string;

    funnelStepId: string | null;

    name: string | null;

    platform: 'whatsapp' | 'whatsapp_lite' | 'instagram' | 'telegram';

    displayName?: string | null;

    state?: 'connected' | 'disconnected' | 'restarting' | 'unknown';
  }
}

export interface EntrypointListParams {
  /**
   * Filtrar por plataforma
   */
  platform?: 'whatsapp' | 'whatsapp_lite' | 'instagram' | 'telegram';
}

export declare namespace Entrypoints {
  export {
    type EntrypointRetrieveResponse as EntrypointRetrieveResponse,
    type EntrypointListResponse as EntrypointListResponse,
    type EntrypointListParams as EntrypointListParams,
  };
}
