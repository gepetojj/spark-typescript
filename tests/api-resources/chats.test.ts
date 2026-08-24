// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkCRM from 'sparkcrm';

const client = new SparkCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chats', () => {
  // Mock server tests are disabled
  test.skip('upsert: only required params', async () => {
    const responsePromise = client.chats.upsert({ entrypointId: 'entrypointId', phone: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upsert: required and optional params', async () => {
    const response = await client.chats.upsert({
      entrypointId: 'entrypointId',
      phone: 'xxx',
      name: 'x',
      triggerAutomations: true,
    });
  });

  // Mock server tests are disabled
  test.skip('upsertBatch: only required params', async () => {
    const responsePromise = client.chats.upsertBatch({
      batch: [{ phone: 'xxx' }],
      entrypointId: 'entrypointId',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('upsertBatch: required and optional params', async () => {
    const response = await client.chats.upsertBatch({
      batch: [{ phone: 'xxx', name: 'x' }],
      entrypointId: 'entrypointId',
      triggerAutomations: true,
    });
  });
});
