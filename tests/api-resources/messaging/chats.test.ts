// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Spark from 'spark';

const client = new Spark({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chats', () => {
  // Mock server tests are disabled
  test.skip('listMessages', async () => {
    const responsePromise = client.messaging.chats.listMessages('chatId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.messaging.chats.listMessages(
        'chatId',
        {
          cursor: {},
          limit: {},
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Spark.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('sendMessage', async () => {
    const responsePromise = client.messaging.chats.sendMessage('chatId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
