/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ImageUploadInput = {
    fileName: string;
    clientMutationId?: string | null;
};
export type ImageUploadGraphQLMutationVariables = {
    input: ImageUploadInput;
};
export type ImageUploadGraphQLMutationResponse = {
    readonly imageUpload: {
        readonly image: boolean | null;
        readonly clientMutationId: string | null;
    } | null;
};
export type ImageUploadGraphQLMutation = {
    readonly response: ImageUploadGraphQLMutationResponse;
    readonly variables: ImageUploadGraphQLMutationVariables;
};



/*
mutation ImageUploadGraphQLMutation(
  $input: ImageUploadInput!
) {
  imageUpload(input: $input) {
    image
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ImageUploadPayload",
    "kind": "LinkedField",
    "name": "imageUpload",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ImageUploadGraphQLMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ImageUploadGraphQLMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b6a2fbfdf35c09bb11b0385f12e67b73",
    "id": null,
    "metadata": {},
    "name": "ImageUploadGraphQLMutation",
    "operationKind": "mutation",
    "text": "mutation ImageUploadGraphQLMutation(\n  $input: ImageUploadInput!\n) {\n  imageUpload(input: $input) {\n    image\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = '742f918e48fbfb67ad05dbb3e54f78d5';
export default node;
