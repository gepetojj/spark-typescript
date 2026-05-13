// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Spark } from '../client';

export abstract class APIResource {
  protected _client: Spark;

  constructor(client: Spark) {
    this._client = client;
  }
}
