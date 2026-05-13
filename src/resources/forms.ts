// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Forms extends APIResource {
  /**
   * Obtém definição de um formulário
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FormRetrieveResponse> {
    return this._client.get(path`/v1/forms/${id}`, options);
  }

  /**
   * Consulta independente da definição completa: retorna apenas origens HTTPS
   * permitidas para incorporar o formulário (e telas de erro) em iframe. Não exige
   * formulário ativo.
   */
  retrieveEmbedFramePolicy(
    id: string,
    options?: RequestOptions,
  ): APIPromise<FormRetrieveEmbedFramePolicyResponse> {
    return this._client.get(path`/v1/forms/${id}/embed-frame-policy`, options);
  }

  /**
   * Envia resposta a um formulário
   */
  submitResponse(
    id: string,
    body: FormSubmitResponseParams,
    options?: RequestOptions,
  ): APIPromise<FormSubmitResponseResponse> {
    return this._client.post(path`/v1/forms/${id}/submit`, { body, ...options });
  }
}

export interface FormRetrieveResponse {
  form: FormRetrieveResponse.Form;
}

export namespace FormRetrieveResponse {
  export interface Form {
    id: string;

    description: string | null;

    flow: Form.Flow;

    iframeEmbedAllowedOrigins: Array<string>;

    name: string;
  }

  export namespace Form {
    export interface Flow {
      connections: Array<Flow.Connection>;

      nodes: Array<Flow.UnionMember0 | Flow.UnionMember1 | Flow.UnionMember2 | Flow.UnionMember3>;

      schemaVersion: 1;
    }

    export namespace Flow {
      export interface Connection {
        sourceNodeId: string;

        targetNodeId: string;

        branch?: Connection.Branch;

        label?: string;
      }

      export namespace Connection {
        export interface Branch {
          match?: 'any' | 'all';

          optionIds?: Array<string>;
        }
      }

      export interface UnionMember0 {
        id: string;

        title: string;

        type: 'start';
      }

      export interface UnionMember1 {
        id: string;

        title: string;

        type: 'end';
      }

      export interface UnionMember2 {
        id: string;

        contact: UnionMember2.Contact;

        title: string;

        type: 'contact_capture';
      }

      export namespace UnionMember2 {
        export interface Contact {
          nameFieldLabel: string;

          phoneFieldLabel: string;

          submitButtonLabel: string;
        }
      }

      export interface UnionMember3 {
        id: string;

        question: UnionMember3.Question;

        questionKey: string;

        title: string;

        type: 'question';
      }

      export namespace UnionMember3 {
        export interface Question {
          answerKind: 'single_choice' | 'multiple_choice';

          options: Array<Question.Option>;

          prompt: string;
        }

        export namespace Question {
          export interface Option {
            id: string;

            label: string;
          }
        }
      }
    }
  }
}

export interface FormRetrieveEmbedFramePolicyResponse {
  iframeEmbedAllowedOrigins: Array<string>;
}

export interface FormSubmitResponseResponse {
  outcomes: Array<FormSubmitResponseResponse.Outcome>;

  submissionId: string;
}

export namespace FormSubmitResponseResponse {
  export interface Outcome {
    chatId: string;

    leadId: string;

    platform: 'whatsapp' | 'whatsapp_lite';
  }
}

export interface FormSubmitResponseParams {
  name: string;

  phone: string;

  answers?: Array<FormSubmitResponseParams.Answer>;
}

export namespace FormSubmitResponseParams {
  export interface Answer {
    questionKey: string;

    value: string | Array<string>;
  }
}

export declare namespace Forms {
  export {
    type FormRetrieveResponse as FormRetrieveResponse,
    type FormRetrieveEmbedFramePolicyResponse as FormRetrieveEmbedFramePolicyResponse,
    type FormSubmitResponseResponse as FormSubmitResponseResponse,
    type FormSubmitResponseParams as FormSubmitResponseParams,
  };
}
