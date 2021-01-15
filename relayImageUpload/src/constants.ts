import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  UploadableMap,
  Variables,
  CacheConfig,
  QueryResponseCache,
  GraphQLResponse,
} from "relay-runtime";

const getRequestBodyWithUploadables = (
  request: RequestParameters,
  variables: Variables,
  uploadables: UploadableMap
) => {
  let formData = new FormData();

  formData.append("query", request.text);
  formData.append("variables", JSON.stringify(variables));
  Object.keys(uploadables).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
      formData.append(key, uploadables[key]);
    }
  });
  return formData;
};

const getRequestBodyWithoutUplodables = (
  request: RequestParameters,
  variables: Variables
) =>
  JSON.stringify({
    query: request.text,
    variables,
  });

const getRequestBody = (
  request: RequestParameters,
  variables: Variables,
  uploadables: UploadableMap | null | undefined
) => {
  if (uploadables) {
    return getRequestBodyWithUploadables(request, variables, uploadables);
  }
  return getRequestBodyWithoutUplodables(request, variables);
};

const GRAPHQL_URL = "http://localhost:5000/graphql";

async function fetchGraphQL(
  request: RequestParameters,
  variables: Variables,
  _cacheConfig: CacheConfig,
  uploadables?: UploadableMap | null | undefined
): Promise<GraphQLResponse> {
  const body = getRequestBody(request, variables, uploadables);
  const headers = {
    ...(uploadables
      ? { Accept: "*/*" }
      : { Accept: "application/json", "Content-type": "application/json" }),
  };
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    credentials: "same-origin",
    headers,
    body,
  });
  const result = await response.json();
  return result;
}

enum operationKind {
  MUTATION = "mutation",
  QUERY = "query",
}

export const isMutation = (request: RequestParameters): boolean =>
  request.operationKind === operationKind.MUTATION;

export const isQuery = (request: RequestParameters): boolean =>
  request.operationKind === operationKind.QUERY;

export const forceFetch = (cacheConfig: CacheConfig): boolean =>
  !!(cacheConfig && cacheConfig.force);

const oneMinute = 60 * 1000;

const queryResponseCache = new QueryResponseCache({
  size: 250,
  ttl: oneMinute,
});

const cacheHandler: FetchFunction = async (
  request,
  variables,
  cacheConfig,
  uploadables
) => {
  const queryID = request.text || "";

  if (isMutation(request)) {
    queryResponseCache.clear();
    const mutationResult = await fetchGraphQL(
      request,
      variables,
      cacheConfig,
      uploadables
    );

    return mutationResult;
  }

  const fromCache = queryResponseCache.get(queryID, variables);

  if (isQuery(request) && fromCache !== null && !forceFetch(cacheConfig))
    return fromCache;

  const fromServer = await fetchGraphQL(
    request,
    variables,
    cacheConfig,
    uploadables
  );

  if (fromServer) queryResponseCache.set(queryID, variables, fromServer);

  return fromServer;
};

export const network = Network.create(cacheHandler);

export const relayStore = new Store(new RecordSource(), {
  gcReleaseBufferSize: 1,
});

export let environment = new Environment({ network, store: relayStore });

export const resetStore = () => {
  queryResponseCache.clear();
  environment = new Environment({ network, store: relayStore });
};
