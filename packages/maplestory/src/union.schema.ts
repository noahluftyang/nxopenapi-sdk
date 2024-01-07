import z from 'zod';

export type Union = z.infer<typeof Union>;
export const Union = z.object({
  date: z.string().optional(),
  union_level: z.number().optional(),
  union_grade: z.string().optional(),
});

export type UnionRaider = z.infer<typeof UnionRaider>;
export const UnionRaider = z.object({
  date: z.string().optional(),
  union_raider_stat: z.array(z.string()).optional(),
  union_occupied_stat: z.array(z.string()).optional(),
  union_inner_stat: z
    .array(
      z.object({
        stat_field_id: z.string().optional(),
        stat_field_effect: z.string().optional(),
      }),
    )
    .optional(),
  union_block: z
    .array(
      z.object({
        block_type: z.string().optional(),
        block_class: z.string().optional(),
        block_level: z.string().optional(),
        block_control_point: z
          .object({
            x: z.number().optional(),
            y: z.number().optional(),
          })
          .optional(),
        block_position: z
          .array(
            z.object({
              x: z.number().optional(),
              y: z.number().optional(),
            }),
          )
          .optional(),
      }),
    )
    .optional(),
});

export type ErrorMessage = z.infer<typeof ErrorMessage>;
export const ErrorMessage = z.object({
  error: z
    .object({
      name: z.string().optional(),
      message: z.string().optional(),
    })
    .optional(),
});

export type get_Maplestory_get_union = typeof get_Maplestory_get_union;
export const get_Maplestory_get_union = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/user/union'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: Union,
};

export type get_Maplestory_get_union_raider = typeof get_Maplestory_get_union_raider;
export const get_Maplestory_get_union_raider = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/user/union-raider'),
  parameters: z.object({
    query: z.object({
      ocid: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: UnionRaider,
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    '/maplestory/v1/user/union': get_Maplestory_get_union,
    '/maplestory/v1/user/union-raider': get_Maplestory_get_union_raider,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod['get'];
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = 'post' | 'put' | 'patch' | 'delete';
export type Method = 'get' | 'head' | MutationMethod;

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  parameters?: TConfig['parameters'];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig['response'];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint['response']>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl = '';

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint['parameters']>>
  ): Promise<z.infer<TEndpoint['response']>> {
    return this.fetcher('get', this.baseUrl + path, params[0]) as Promise<
      z.infer<TEndpoint['response']>
    >;
  }
  // </ApiClient.get>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? '');
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
