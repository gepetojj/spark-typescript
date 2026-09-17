// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SparkCRM from 'sparkcrm';

const client = new SparkCRM({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Mock server tests are disabled
  test.skip('markAsRead: only required params', async () => {
    const responsePromise = client.messaging.chats.messages.markAsRead('messageId', { chatId: 'chatId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('markAsRead: required and optional params', async () => {
    const response = await client.messaging.chats.messages.markAsRead('messageId', { chatId: 'chatId' });
  });

  // Mock server tests are disabled
  test.skip('markAsReadAndType: only required params', async () => {
    const responsePromise = client.messaging.chats.messages.markAsReadAndType('messageId', {
      chatId: 'chatId',
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
  test.skip('markAsReadAndType: required and optional params', async () => {
    const response = await client.messaging.chats.messages.markAsReadAndType('messageId', {
      chatId: 'chatId',
    });
  });
});
