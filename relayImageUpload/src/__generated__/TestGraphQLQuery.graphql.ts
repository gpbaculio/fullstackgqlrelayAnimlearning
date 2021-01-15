/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TestGraphQLQueryVariables = {};
export type TestGraphQLQueryResponse = {
    readonly test: string | null;
};
export type TestGraphQLQuery = {
    readonly response: TestGraphQLQueryResponse;
    readonly variables: TestGraphQLQueryVariables;
};



/*
query TestGraphQLQuery {
  test
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "test",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TestGraphQLQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TestGraphQLQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3bb70d5559e1fe543f30bdbb721b9778",
    "id": null,
    "metadata": {},
    "name": "TestGraphQLQuery",
    "operationKind": "query",
    "text": "query TestGraphQLQuery {\n  test\n}\n"
  }
};
})();
(node as any).hash = '68f129f4c0bc3ca7fad70f757ead1d07';
export default node;
