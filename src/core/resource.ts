// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SparkCRM } from '../client';

export abstract class APIResource {
  protected _client: SparkCRM;

  constructor(client: SparkCRM) {
    this._client = client;
  }
}
