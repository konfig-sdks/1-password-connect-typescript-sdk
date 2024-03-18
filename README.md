<div align="center">

[![Visit 1password](./header.png)](https://1password.com)

# [1password](https://1password.com)<a id="1password"></a>

REST API interface for 1Password Connect.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`onepasswordconnect.activity.getApiRequests`](#onepasswordconnectactivitygetapirequests)
  * [`onepasswordconnect.files.getAllFilesInsideItem`](#onepasswordconnectfilesgetallfilesinsideitem)
  * [`onepasswordconnect.files.getContent`](#onepasswordconnectfilesgetcontent)
  * [`onepasswordconnect.files.getFileDetails`](#onepasswordconnectfilesgetfiledetails)
  * [`onepasswordconnect.health.checkLiveness`](#onepasswordconnecthealthcheckliveness)
  * [`onepasswordconnect.health.serverStateCheck`](#onepasswordconnecthealthserverstatecheck)
  * [`onepasswordconnect.items.createNewItem`](#onepasswordconnectitemscreatenewitem)
  * [`onepasswordconnect.items.deleteItemById`](#onepasswordconnectitemsdeleteitembyid)
  * [`onepasswordconnect.items.getAll`](#onepasswordconnectitemsgetall)
  * [`onepasswordconnect.items.getDetailsById`](#onepasswordconnectitemsgetdetailsbyid)
  * [`onepasswordconnect.items.updateItemDetails`](#onepasswordconnectitemsupdateitemdetails)
  * [`onepasswordconnect.items.updateSubsetAttributes`](#onepasswordconnectitemsupdatesubsetattributes)
  * [`onepasswordconnect.metrics.queryServerMetrics`](#onepasswordconnectmetricsqueryservermetrics)
  * [`onepasswordconnect.vaults.getDetails`](#onepasswordconnectvaultsgetdetails)
  * [`onepasswordconnect.vaults.listAll`](#onepasswordconnectvaultslistall)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=1Password&serviceName=Connect&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { OnePasswordConnect } from "1-password-connect-typescript-sdk";

const onepasswordconnect = new OnePasswordConnect({
  // Defining the base path is optional and defaults to http://localhost:8080/v1
  // basePath: "http://localhost:8080/v1",
  accessToken: "ACCESS_TOKEN",
});

const getApiRequestsResponse = await onepasswordconnect.activity.getApiRequests(
  {
    limit: 10,
    offset: 50,
  }
);

console.log(getApiRequestsResponse);
```

## Reference<a id="reference"></a>


### `onepasswordconnect.activity.getApiRequests`<a id="onepasswordconnectactivitygetapirequests"></a>

Retrieve a list of API Requests that have been made.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getApiRequestsResponse = await onepasswordconnect.activity.getApiRequests(
  {
    limit: 10,
    offset: 50,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

How many API Events should be retrieved in a single request.

##### offset: `number`<a id="offset-number"></a>

How far into the collection of API Events should the response start

#### 🔄 Return<a id="🔄-return"></a>

[APIRequest](./models/apirequest.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/activity` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.files.getAllFilesInsideItem`<a id="onepasswordconnectfilesgetallfilesinsideitem"></a>

Get all the files inside an Item

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllFilesInsideItemResponse =
  await onepasswordconnect.files.getAllFilesInsideItem({
    vaultUuid: "vaultUuid_example",
    itemUuid: "itemUuid_example",
    inlineFiles: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Vault to fetch Items from

##### itemUuid: `string`<a id="itemuuid-string"></a>

The UUID of the Item to fetch files from

##### inlineFiles: `boolean`<a id="inlinefiles-boolean"></a>

Tells server to return the base64-encoded file contents in the response.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}/items/{itemUuid}/files` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.files.getContent`<a id="onepasswordconnectfilesgetcontent"></a>

Get the content of a File

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentResponse = await onepasswordconnect.files.getContent({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Vault the item is in

##### itemUuid: `string`<a id="itemuuid-string"></a>

The UUID of the Item the File is in

##### fileUuid: `string`<a id="fileuuid-string"></a>

UUID of the file to get content from

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}/content` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.files.getFileDetails`<a id="onepasswordconnectfilesgetfiledetails"></a>

Get the details of a File

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileDetailsResponse = await onepasswordconnect.files.getFileDetails({
  vaultUuid: "vaultUuid_example",
  itemUuid: "itemUuid_example",
  fileUuid: "fileUuid_example",
  inlineFiles: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Vault to fetch Item from

##### itemUuid: `string`<a id="itemuuid-string"></a>

The UUID of the Item to fetch File from

##### fileUuid: `string`<a id="fileuuid-string"></a>

The UUID of the File to fetch

##### inlineFiles: `boolean`<a id="inlinefiles-boolean"></a>

Tells server to return the base64-encoded file contents in the response.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.health.checkLiveness`<a id="onepasswordconnecthealthcheckliveness"></a>

Ping the server for liveness

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkLivenessResponse = await onepasswordconnect.health.checkLiveness();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/heartbeat` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.health.serverStateCheck`<a id="onepasswordconnecthealthserverstatecheck"></a>

Get state of the server and its dependencies.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const serverStateCheckResponse =
  await onepasswordconnect.health.serverStateCheck();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthServerStateCheckResponse](./models/health-server-state-check-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.items.createNewItem`<a id="onepasswordconnectitemscreatenewitem"></a>

Create a new Item

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewItemResponse = await onepasswordconnect.items.createNewItem({
  vaultUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
  vault: {
    id: "w8q6zgckec0l3o4gi7xhk0jcy0",
  },
  category: "LOGIN",
  urls: [
    {
      href: "href_example",
    },
  ],
  favorite: false,
  state: "ARCHIVED",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Vault to create an Item in

##### tags: `string`[]<a id="tags-string"></a>

##### title: `string`<a id="title-string"></a>

##### version: `number`<a id="version-number"></a>

##### id: `string`<a id="id-string"></a>

##### vault: [`ItemVault`](./models/item-vault.ts)<a id="vault-itemvaultmodelsitem-vaultts"></a>

##### category: `string`<a id="category-string"></a>

##### urls: [`ItemUrlsInner`](./models/item-urls-inner.ts)[]<a id="urls-itemurlsinnermodelsitem-urls-innerts"></a>

##### favorite: `boolean`<a id="favorite-boolean"></a>

##### state: `string`<a id="state-string"></a>

##### createdAt: `string`<a id="createdat-string"></a>

##### updatedAt: `string`<a id="updatedat-string"></a>

##### lastEditedBy: `string`<a id="lasteditedby-string"></a>

##### sections: [`FullItemAllOfSections`](./models/full-item-all-of-sections.ts)[]<a id="sections-fullitemallofsectionsmodelsfull-item-all-of-sectionsts"></a>

##### fields: [`Field`](./models/field.ts)[]<a id="fields-fieldmodelsfieldts"></a>

##### files: `any`<a id="files-any"></a>
             [`any`](./models/any.ts)[]

#### 🔄 Return<a id="🔄-return"></a>

[FullItem](./models/full-item.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}/items` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.items.deleteItemById`<a id="onepasswordconnectitemsdeleteitembyid"></a>

Delete an Item

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteItemByIdResponse = await onepasswordconnect.items.deleteItemById({
  vaultUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
  itemUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Vault the item is in

##### itemUuid: `string`<a id="itemuuid-string"></a>

The UUID of the Item to update

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}/items/{itemUuid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.items.getAll`<a id="onepasswordconnectitemsgetall"></a>

Get all items for inside a Vault

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await onepasswordconnect.items.getAll({
  vaultUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
  filter: 'title eq "Some Item Name"',
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Vault to fetch Items from

##### filter: `string`<a id="filter-string"></a>

Filter the Item collection based on Item name using SCIM eq filter

#### 🔄 Return<a id="🔄-return"></a>

[Item](./models/item.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.items.getDetailsById`<a id="onepasswordconnectitemsgetdetailsbyid"></a>

Get the details of an Item

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsByIdResponse = await onepasswordconnect.items.getDetailsById({
  vaultUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
  itemUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Vault to fetch Item from

##### itemUuid: `string`<a id="itemuuid-string"></a>

The UUID of the Item to fetch

#### 🔄 Return<a id="🔄-return"></a>

[FullItem](./models/full-item.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}/items/{itemUuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.items.updateItemDetails`<a id="onepasswordconnectitemsupdateitemdetails"></a>

Update an Item

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateItemDetailsResponse =
  await onepasswordconnect.items.updateItemDetails({
    vaultUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
    itemUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
    vault: {
      id: "w8q6zgckec0l3o4gi7xhk0jcy0",
    },
    category: "LOGIN",
    urls: [
      {
        href: "href_example",
      },
    ],
    favorite: false,
    state: "ARCHIVED",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Item\'s Vault

##### itemUuid: `string`<a id="itemuuid-string"></a>

The UUID of the Item to update

##### tags: `string`[]<a id="tags-string"></a>

##### title: `string`<a id="title-string"></a>

##### version: `number`<a id="version-number"></a>

##### id: `string`<a id="id-string"></a>

##### vault: [`ItemVault`](./models/item-vault.ts)<a id="vault-itemvaultmodelsitem-vaultts"></a>

##### category: `string`<a id="category-string"></a>

##### urls: [`ItemUrlsInner`](./models/item-urls-inner.ts)[]<a id="urls-itemurlsinnermodelsitem-urls-innerts"></a>

##### favorite: `boolean`<a id="favorite-boolean"></a>

##### state: `string`<a id="state-string"></a>

##### createdAt: `string`<a id="createdat-string"></a>

##### updatedAt: `string`<a id="updatedat-string"></a>

##### lastEditedBy: `string`<a id="lasteditedby-string"></a>

##### sections: [`FullItemAllOfSections`](./models/full-item-all-of-sections.ts)[]<a id="sections-fullitemallofsectionsmodelsfull-item-all-of-sectionsts"></a>

##### fields: [`Field`](./models/field.ts)[]<a id="fields-fieldmodelsfieldts"></a>

##### files: `any`<a id="files-any"></a>
             [`any`](./models/any.ts)[]

#### 🔄 Return<a id="🔄-return"></a>

[FullItem](./models/full-item.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}/items/{itemUuid}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.items.updateSubsetAttributes`<a id="onepasswordconnectitemsupdatesubsetattributes"></a>

Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.

When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSubsetAttributesResponse =
  await onepasswordconnect.items.updateSubsetAttributes({
    vaultUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
    itemUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
    requestBody: [
      {
        op: "replace",
        path: "/",
        value: {
          tags: ["tag1", "tag2"],
          title: "New Title",
          favorite: true,
          "...": "Any attr from FullItem schema",
        },
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Vault the item is in

##### itemUuid: `string`<a id="itemuuid-string"></a>

The UUID of the Item to update

##### requestBody: [`PatchInner`](./models/patch-inner.ts)[]<a id="requestbody-patchinnermodelspatch-innerts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FullItem](./models/full-item.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}/items/{itemUuid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.metrics.queryServerMetrics`<a id="onepasswordconnectmetricsqueryservermetrics"></a>

See Prometheus documentation for a complete data model.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryServerMetricsResponse =
  await onepasswordconnect.metrics.queryServerMetrics();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.vaults.getDetails`<a id="onepasswordconnectvaultsgetdetails"></a>

Get Vault details and metadata

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await onepasswordconnect.vaults.getDetails({
  vaultUuid: "w8q6zgckec0l3o4gi7xhk0jcy0",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vaultUuid: `string`<a id="vaultuuid-string"></a>

The UUID of the Vault to fetch Items from

#### 🔄 Return<a id="🔄-return"></a>

[Vault](./models/vault.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults/{vaultUuid}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `onepasswordconnect.vaults.listAll`<a id="onepasswordconnectvaultslistall"></a>

Get all Vaults

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await onepasswordconnect.vaults.listAll({
  filter: 'name eq "Some Vault Name"',
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filter: `string`<a id="filter-string"></a>

Filter the Vault collection based on Vault name using SCIM eq filter

#### 🔄 Return<a id="🔄-return"></a>

[Vault](./models/vault.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vaults` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
