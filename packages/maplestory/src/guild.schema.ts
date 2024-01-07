import z from 'zod';

export type Guild = z.infer<typeof Guild>;
export const Guild = z.object({
  oguild_id: z.string().optional(),
});

export type GuildBasic = z.infer<typeof GuildBasic>;
export const GuildBasic = z.object({
  date: z.string().optional(),
  world_name: z.string().optional(),
  guild_name: z.string().optional(),
  guild_level: z.number().optional(),
  guild_fame: z.number().optional(),
  guild_point: z.number().optional(),
  guild_master_name: z.string().optional(),
  guild_member_count: z.number().optional(),
  guild_member: z.array(z.string()).optional(),
  guild_skill: z
    .array(
      z.object({
        skill_name: z.string().optional(),
        skill_description: z.string().optional(),
        skill_level: z.number().optional(),
        skill_effect: z.string().optional(),
        skill_icon: z.string().optional(),
      }),
    )
    .optional(),
  guild_noblesse_skill: z
    .array(
      z.object({
        skill_name: z.string().optional(),
        skill_description: z.string().optional(),
        skill_level: z.number().optional(),
        skill_effect: z.string().optional(),
        skill_icon: z.string().optional(),
      }),
    )
    .optional(),
  guild_mark: z.string().optional(),
  guild_mark_custom: z.string().optional(),
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

export type get_Maplestory_get_oguild_id = typeof get_Maplestory_get_oguild_id;
export const get_Maplestory_get_oguild_id = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/guild/id'),
  parameters: z.object({
    query: z.object({
      guild_name: z.string(),
      world_name: z.union([
        z.literal('스카니아'),
        z.literal('베라'),
        z.literal('루나'),
        z.literal('제니스'),
        z.literal('크로아'),
        z.literal('유니온'),
        z.literal('엘리시움'),
        z.literal('이노시스'),
        z.literal('레드'),
        z.literal('오로라'),
        z.literal('아케인'),
        z.literal('노바'),
        z.literal('리부트'),
        z.literal('리부트2'),
        z.literal('버닝'),
        z.literal('버닝2'),
        z.literal('버닝3'),
      ]),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: Guild,
};

export type get_Maplestory_get_guild_basic = typeof get_Maplestory_get_guild_basic;
export const get_Maplestory_get_guild_basic = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/guild/basic'),
  parameters: z.object({
    query: z.object({
      oguild_id: z.string(),
      date: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: GuildBasic,
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    '/maplestory/v1/guild/id': get_Maplestory_get_oguild_id,
    '/maplestory/v1/guild/basic': get_Maplestory_get_guild_basic,
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
