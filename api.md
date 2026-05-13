# Entrypoints

Types:

- <code><a href="./src/resources/entrypoints.ts">EntrypointRetrieveResponse</a></code>
- <code><a href="./src/resources/entrypoints.ts">EntrypointListResponse</a></code>

Methods:

- <code title="get /v1/entrypoints/{id}">client.entrypoints.<a href="./src/resources/entrypoints.ts">retrieve</a>(id) -> EntrypointRetrieveResponse</code>
- <code title="get /v1/entrypoints">client.entrypoints.<a href="./src/resources/entrypoints.ts">list</a>({ ...params }) -> EntrypointListResponse</code>

# Forms

Types:

- <code><a href="./src/resources/forms.ts">FormRetrieveResponse</a></code>
- <code><a href="./src/resources/forms.ts">FormRetrieveEmbedFramePolicyResponse</a></code>
- <code><a href="./src/resources/forms.ts">FormSubmitResponseResponse</a></code>

Methods:

- <code title="get /v1/forms/{id}">client.forms.<a href="./src/resources/forms.ts">retrieve</a>(id) -> FormRetrieveResponse</code>
- <code title="get /v1/forms/{id}/embed-frame-policy">client.forms.<a href="./src/resources/forms.ts">retrieveEmbedFramePolicy</a>(id) -> FormRetrieveEmbedFramePolicyResponse</code>
- <code title="post /v1/forms/{id}/submit">client.forms.<a href="./src/resources/forms.ts">submitResponse</a>(id, { ...params }) -> FormSubmitResponseResponse</code>

# Messaging

Types:

- <code><a href="./src/resources/messaging/messaging.ts">MessagingUploadMediaResponse</a></code>

Methods:

- <code title="post /v1/messaging/media">client.messaging.<a href="./src/resources/messaging/messaging.ts">uploadMedia</a>({ ...params }) -> MessagingUploadMediaResponse</code>

## Chats

Types:

- <code><a href="./src/resources/messaging/chats.ts">ChatListMessagesResponse</a></code>

Methods:

- <code title="get /v1/messaging/chats/{chatId}">client.messaging.chats.<a href="./src/resources/messaging/chats.ts">listMessages</a>(chatID, { ...params }) -> ChatListMessagesResponse</code>
- <code title="post /v1/messaging/chats/{chatId}">client.messaging.chats.<a href="./src/resources/messaging/chats.ts">sendMessage</a>(chatID, { ...params }) -> void</code>
