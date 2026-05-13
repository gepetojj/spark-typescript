// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkCRM from 'sparkcrm';

const client = new SparkCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource forms', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.forms.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveEmbedFramePolicy', async () => {
    const responsePromise = client.forms.retrieveEmbedFramePolicy('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submitResponse: only required params', async () => {
    const responsePromise = client.forms.submitResponse('id', { name: 'x', phone: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submitResponse: required and optional params', async () => {
    const response = await client.forms.submitResponse('id', {
      name: 'x',
      phone: 'xxx',
      answers: [{ questionKey: 'x', value: 'string' }],
    });
  });
});
