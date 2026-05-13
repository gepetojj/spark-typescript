// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkCRM, { toFile } from 'spark';

const client = new SparkCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messaging', () => {
  // Mock server tests are disabled
  test.skip('uploadMedia: only required params', async () => {
    const responsePromise = client.messaging.uploadMedia({
      files: [await toFile(Buffer.from('Example data'), 'README.md')],
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
  test.skip('uploadMedia: required and optional params', async () => {
    const response = await client.messaging.uploadMedia({
      files: [await toFile(Buffer.from('Example data'), 'README.md')],
    });
  });
});
