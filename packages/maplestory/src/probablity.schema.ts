import z from 'zod';

export type User = z.infer<typeof User>;
export const User = z.object({
  ouid: z.string().optional(),
});

export type StarforceHistory = z.infer<typeof StarforceHistory>;
export const StarforceHistory = z.object({
  count: z.number().optional(),
  next_cursor: z.string().optional(),
  starforce_history: z
    .array(
      z.object({
        id: z.string().optional(),
        item_upgrade_result: z.string().optional(),
        before_starforce_count: z.number().optional(),
        after_starforce_count: z.number().optional(),
        starcatch_result: z.string().optional(),
        superior_item_flag: z.string().optional(),
        destroy_defence: z.string().optional(),
        chance_time: z.string().optional(),
        event_field_flag: z.string().optional(),
        upgrade_item: z.string().optional(),
        protect_shield: z.string().optional(),
        bonus_stat_upgrade: z.string().optional(),
        character_name: z.string().optional(),
        world_name: z.string().optional(),
        target_item: z.string().optional(),
        date_create: z.string().optional(),
        starforce_event_list: z
          .array(
            z.object({
              success_rate: z.string().optional(),
              cost_discount_rate: z.string().optional(),
              plus_value: z.string().optional(),
              starforce_event_range: z.string().optional(),
            }),
          )
          .optional(),
      }),
    )
    .optional(),
});

export type CubeHistory = z.infer<typeof CubeHistory>;
export const CubeHistory = z.object({
  count: z.number().optional(),
  next_cursor: z.string().optional(),
  cube_history: z
    .array(
      z.object({
        id: z.string().optional(),
        character_name: z.string().optional(),
        date_create: z.string().optional(),
        cube_type: z.string().optional(),
        item_upgrade_result: z.string().optional(),
        miracle_time_flag: z.string().optional(),
        item_equipment_part: z.string().optional(),
        item_level: z.number().optional(),
        target_item: z.string().optional(),
        potential_option_grade: z.string().optional(),
        additional_potential_option_grade: z.string().optional(),
        upgrade_guarantee: z.boolean().optional(),
        upgrade_guarantee_count: z.number().optional(),
        before_potential_option: z
          .array(
            z.object({
              value: z.string().optional(),
              grade: z.string().optional(),
            }),
          )
          .optional(),
        before_additional_potential_option: z
          .array(
            z.object({
              value: z.string().optional(),
              grade: z.string().optional(),
            }),
          )
          .optional(),
        after_potential_option: z
          .array(
            z.object({
              value: z.string().optional(),
              grade: z.string().optional(),
            }),
          )
          .optional(),
        after_additional_potential_option: z
          .array(
            z.object({
              value: z.string().optional(),
              grade: z.string().optional(),
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

export type get_Maplestorylegacyouid = typeof get_Maplestorylegacyouid;
export const get_Maplestorylegacyouid = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/legacy/ouid'),
  parameters: z.object({
    header: z.object({
      'x-nxopen-legacy-api-key': z.string(),
    }),
  }),
  response: User,
};

export type get_Maplestoryv1ouid = typeof get_Maplestoryv1ouid;
export const get_Maplestoryv1ouid = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/ouid'),
  parameters: z.object({
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: User,
};

export type get_Get_meta = typeof get_Get_meta;
export const get_Get_meta = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/history/starforce'),
  parameters: z.object({
    query: z.object({
      count: z.string(),
      date: z.string(),
      cursor: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: StarforceHistory,
};

export type get_Maplestory_get_cube_histories = typeof get_Maplestory_get_cube_histories;
export const get_Maplestory_get_cube_histories = {
  method: z.literal('GET'),
  path: z.literal('/maplestory/v1/history/cube'),
  parameters: z.object({
    query: z.object({
      count: z.number(),
      date: z.string(),
      cursor: z.string(),
    }),
    header: z.object({
      'x-nxopen-api-key': z.string(),
    }),
  }),
  response: CubeHistory,
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    '/maplestory/legacy/ouid': get_Maplestorylegacyouid,
    '/maplestory/v1/ouid': get_Maplestoryv1ouid,
    '/maplestory/v1/history/starforce': get_Get_meta,
    '/maplestory/v1/history/cube': get_Maplestory_get_cube_histories,
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
