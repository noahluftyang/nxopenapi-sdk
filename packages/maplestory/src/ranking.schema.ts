import z from "zod";

export type OverallRanking = z.infer<typeof OverallRanking>;
export const OverallRanking = z.object({
  ranking: z
    .array(
      z.object({
        date: z.string().optional(),
        ranking: z.number().optional(),
        character_name: z.string().optional(),
        world_name: z.string().optional(),
        class_name: z.string().optional(),
        sub_class_name: z.string().optional(),
        character_level: z.number().optional(),
        character_exp: z.number().optional(),
        character_popularity: z.number().optional(),
        character_guildname: z.string().optional(),
      }),
    )
    .optional(),
});

export type UnionRanking = z.infer<typeof UnionRanking>;
export const UnionRanking = z.object({
  ranking: z
    .array(
      z.object({
        date: z.string().optional(),
        ranking: z.number().optional(),
        character_name: z.string().optional(),
        world_name: z.string().optional(),
        class_name: z.string().optional(),
        sub_class_name: z.string().optional(),
        union_level: z.number().optional(),
        union_power: z.number().optional(),
      }),
    )
    .optional(),
});

export type GuildRanking = z.infer<typeof GuildRanking>;
export const GuildRanking = z.object({
  ranking: z
    .array(
      z.object({
        date: z.string().optional(),
        ranking: z.number().optional(),
        guild_name: z.string().optional(),
        world_name: z.string().optional(),
        guild_level: z.number().optional(),
        guild_master_name: z.string().optional(),
        guild_mark: z.string().optional(),
        guild_point: z.number().optional(),
      }),
    )
    .optional(),
});

export type DojangRanking = z.infer<typeof DojangRanking>;
export const DojangRanking = z.object({
  ranking: z
    .array(
      z.object({
        date: z.string().optional(),
        ranking: z.number().optional(),
        character_name: z.string().optional(),
        world_name: z.string().optional(),
        class_name: z.string().optional(),
        sub_class_name: z.string().optional(),
        character_level: z.number().optional(),
        dojang_floor: z.number().optional(),
        dojang_time_record: z.number().optional(),
      }),
    )
    .optional(),
});

export type TheSeedRanking = z.infer<typeof TheSeedRanking>;
export const TheSeedRanking = z.object({
  ranking: z
    .array(
      z.object({
        date: z.string().optional(),
        ranking: z.number().optional(),
        character_name: z.string().optional(),
        world_name: z.string().optional(),
        class_name: z.string().optional(),
        sub_class_name: z.string().optional(),
        character_level: z.number().optional(),
        theseed_floor: z.number().optional(),
        theseed_time_record: z.number().optional(),
      }),
    )
    .optional(),
});

export type AchievementRanking = z.infer<typeof AchievementRanking>;
export const AchievementRanking = z.object({
  ranking: z
    .array(
      z.object({
        date: z.string().optional(),
        ranking: z.number().optional(),
        character_name: z.string().optional(),
        world_name: z.string().optional(),
        class_name: z.string().optional(),
        sub_class_name: z.string().optional(),
        trophy_grade: z.string().optional(),
        trophy_score: z.number().optional(),
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

export type get_Get_overall_ranking = typeof get_Get_overall_ranking;
export const get_Get_overall_ranking = {
  method: z.literal("GET"),
  path: z.literal("/maplestory/v1/ranking/overall"),
  parameters: z.object({
    query: z.object({
      date: z.string(),
      world_name: z.union([
        z.literal("스카니아"),
        z.literal("베라"),
        z.literal("루나"),
        z.literal("제니스"),
        z.literal("크로아"),
        z.literal("유니온"),
        z.literal("엘리시움"),
        z.literal("이노시스"),
        z.literal("레드"),
        z.literal("오로라"),
        z.literal("아케인"),
        z.literal("노바"),
        z.literal("리부트"),
        z.literal("리부트2"),
        z.literal("버닝"),
        z.literal("버닝2"),
        z.literal("버닝3"),
      ]),
      world_type: z.number(),
      class: z.union([
        z.literal("초보자-전체 전직"),
        z.literal("전사-전체 전직"),
        z.literal("전사-검사"),
        z.literal("전사-파이터"),
        z.literal("전사-페이지"),
        z.literal("전사-스피어맨"),
        z.literal("전사-크루세이더"),
        z.literal("전사-나이트"),
        z.literal("전사-버서커"),
        z.literal("전사-히어로"),
        z.literal("전사-팔라딘"),
        z.literal("전사-다크나이트"),
        z.literal("마법사-전체 전직"),
        z.literal("마법사-매지션"),
        z.literal("마법사-위자드(불,독)"),
        z.literal("마법사-위자드(썬,콜)"),
        z.literal("마법사-클레릭"),
        z.literal("마법사-메이지(불,독)"),
        z.literal("마법사-메이지(썬,콜)"),
        z.literal("마법사-프리스트"),
        z.literal("마법사-아크메이지(불,독)"),
        z.literal("마법사-아크메이지(썬,콜)"),
        z.literal("마법사-비숍"),
        z.literal("궁수-전체 전직"),
        z.literal("궁수-아처"),
        z.literal("궁수-헌터"),
        z.literal("궁수-사수"),
        z.literal("궁수-레인저"),
        z.literal("궁수-저격수"),
        z.literal("궁수-보우마스터"),
        z.literal("궁수-신궁"),
        z.literal("궁수-아처(패스파인더)"),
        z.literal("궁수-에인션트아처"),
        z.literal("궁수-체이서"),
        z.literal("궁수-패스파인더"),
        z.literal("도적-전체 전직"),
        z.literal("도적-로그"),
        z.literal("도적-어쌔신"),
        z.literal("도적-시프"),
        z.literal("도적-허밋"),
        z.literal("도적-시프마스터"),
        z.literal("도적-나이트로드"),
        z.literal("도적-섀도어"),
        z.literal("도적-세미듀어러"),
        z.literal("도적-듀어러"),
        z.literal("도적-듀얼마스터"),
        z.literal("도적-슬래셔"),
        z.literal("도적-듀얼블레이더"),
        z.literal("해적-전체 전직"),
        z.literal("해적-해적"),
        z.literal("해적-인파이터"),
        z.literal("해적-건슬링거"),
        z.literal("해적-캐논슈터"),
        z.literal("해적-버커니어"),
        z.literal("해적-발키리"),
        z.literal("해적-캐논블래스터"),
        z.literal("해적-바이퍼"),
        z.literal("해적-캡틴"),
        z.literal("해적-캐논마스터"),
        z.literal("기사단-전체 전직"),
        z.literal("기사단-노블레스"),
        z.literal("기사단-소울마스터"),
        z.literal("기사단-플레임위자드"),
        z.literal("기사단-윈드브레이커"),
        z.literal("기사단-나이트워커"),
        z.literal("기사단-스트라이커"),
        z.literal("기사단-미하일"),
        z.literal("아란-전체 전직"),
        z.literal("에반-전체 전직"),
        z.literal("레지스탕스-전체 전직"),
        z.literal("레지스탕스-시티즌"),
        z.literal("레지스탕스-배틀메이지"),
        z.literal("레지스탕스-와일드헌터"),
        z.literal("레지스탕스-메카닉"),
        z.literal("레지스탕스-데몬슬레이어"),
        z.literal("레지스탕스-데몬어벤져"),
        z.literal("레지스탕스-제논"),
        z.literal("레지스탕스-블래스터"),
        z.literal("메르세데스-전체 전직"),
        z.literal("팬텀-전체 전직"),
        z.literal("루미너스-전체 전직"),
        z.literal("카이저-전체 전직"),
        z.literal("엔젤릭버스터-전체 전직"),
        z.literal("초월자-전체 전직"),
        z.literal("초월자-제로"),
        z.literal("은월-전체 전직"),
        z.literal("프렌즈 월드-전체 전직"),
        z.literal("프렌즈 월드-키네시스"),
        z.literal("카데나-전체 전직"),
        z.literal("일리움-전체 전직"),
        z.literal("아크-전체 전직"),
        z.literal("호영-전체 전직"),
        z.literal("아델-전체 전직"),
        z.literal("카인-전체 전직"),
        z.literal("라라-전체 전직"),
        z.literal("칼리-전체 전직"),
      ]),
      ocid: z.string(),
      page: z.number(),
    }),
    header: z.object({
      "x-nxopen-api-key": z.string(),
    }),
  }),
  response: OverallRanking,
};

export type get_Get_union_ranking = typeof get_Get_union_ranking;
export const get_Get_union_ranking = {
  method: z.literal("GET"),
  path: z.literal("/maplestory/v1/ranking/union"),
  parameters: z.object({
    query: z.object({
      date: z.string(),
      world_name: z.union([
        z.literal("스카니아"),
        z.literal("베라"),
        z.literal("루나"),
        z.literal("제니스"),
        z.literal("크로아"),
        z.literal("유니온"),
        z.literal("엘리시움"),
        z.literal("이노시스"),
        z.literal("레드"),
        z.literal("오로라"),
        z.literal("아케인"),
        z.literal("노바"),
        z.literal("리부트"),
        z.literal("리부트2"),
      ]),
      ocid: z.string(),
      page: z.number(),
    }),
    header: z.object({
      "x-nxopen-api-key": z.string(),
    }),
  }),
  response: UnionRanking,
};

export type get_Get_guild_ranking = typeof get_Get_guild_ranking;
export const get_Get_guild_ranking = {
  method: z.literal("GET"),
  path: z.literal("/maplestory/v1/ranking/guild"),
  parameters: z.object({
    query: z.object({
      date: z.string(),
      world_name: z.union([
        z.literal("스카니아"),
        z.literal("베라"),
        z.literal("루나"),
        z.literal("제니스"),
        z.literal("크로아"),
        z.literal("유니온"),
        z.literal("엘리시움"),
        z.literal("이노시스"),
        z.literal("레드"),
        z.literal("오로라"),
        z.literal("아케인"),
        z.literal("노바"),
        z.literal("리부트"),
        z.literal("리부트2"),
        z.literal("버닝"),
        z.literal("버닝2"),
        z.literal("버닝3"),
      ]),
      ranking_type: z.number(),
      guild_name: z.string(),
      page: z.number(),
    }),
    header: z.object({
      "x-nxopen-api-key": z.string(),
    }),
  }),
  response: GuildRanking,
};

export type get_Get_dojang_ranking = typeof get_Get_dojang_ranking;
export const get_Get_dojang_ranking = {
  method: z.literal("GET"),
  path: z.literal("/maplestory/v1/ranking/dojang"),
  parameters: z.object({
    query: z.object({
      date: z.string(),
      world_name: z.union([
        z.literal("스카니아"),
        z.literal("베라"),
        z.literal("루나"),
        z.literal("제니스"),
        z.literal("크로아"),
        z.literal("유니온"),
        z.literal("엘리시움"),
        z.literal("이노시스"),
        z.literal("레드"),
        z.literal("오로라"),
        z.literal("아케인"),
        z.literal("노바"),
        z.literal("리부트"),
        z.literal("리부트2"),
        z.literal("버닝"),
        z.literal("버닝2"),
        z.literal("버닝3"),
      ]),
      difficulty: z.number(),
      class: z.union([
        z.literal("초보자-전체 전직"),
        z.literal("전사-전체 전직"),
        z.literal("전사-검사"),
        z.literal("전사-파이터"),
        z.literal("전사-페이지"),
        z.literal("전사-스피어맨"),
        z.literal("전사-크루세이더"),
        z.literal("전사-나이트"),
        z.literal("전사-버서커"),
        z.literal("전사-히어로"),
        z.literal("전사-팔라딘"),
        z.literal("전사-다크나이트"),
        z.literal("마법사-전체 전직"),
        z.literal("마법사-매지션"),
        z.literal("마법사-위자드(불,독)"),
        z.literal("마법사-위자드(썬,콜)"),
        z.literal("마법사-클레릭"),
        z.literal("마법사-메이지(불,독)"),
        z.literal("마법사-메이지(썬,콜)"),
        z.literal("마법사-프리스트"),
        z.literal("마법사-아크메이지(불,독)"),
        z.literal("마법사-아크메이지(썬,콜)"),
        z.literal("마법사-비숍"),
        z.literal("궁수-전체 전직"),
        z.literal("궁수-아처"),
        z.literal("궁수-헌터"),
        z.literal("궁수-사수"),
        z.literal("궁수-레인저"),
        z.literal("궁수-저격수"),
        z.literal("궁수-보우마스터"),
        z.literal("궁수-신궁"),
        z.literal("궁수-아처(패스파인더)"),
        z.literal("궁수-에인션트아처"),
        z.literal("궁수-체이서"),
        z.literal("궁수-패스파인더"),
        z.literal("도적-전체 전직"),
        z.literal("도적-로그"),
        z.literal("도적-어쌔신"),
        z.literal("도적-시프"),
        z.literal("도적-허밋"),
        z.literal("도적-시프마스터"),
        z.literal("도적-나이트로드"),
        z.literal("도적-섀도어"),
        z.literal("도적-세미듀어러"),
        z.literal("도적-듀어러"),
        z.literal("도적-듀얼마스터"),
        z.literal("도적-슬래셔"),
        z.literal("도적-듀얼블레이더"),
        z.literal("해적-전체 전직"),
        z.literal("해적-해적"),
        z.literal("해적-인파이터"),
        z.literal("해적-건슬링거"),
        z.literal("해적-캐논슈터"),
        z.literal("해적-버커니어"),
        z.literal("해적-발키리"),
        z.literal("해적-캐논블래스터"),
        z.literal("해적-바이퍼"),
        z.literal("해적-캡틴"),
        z.literal("해적-캐논마스터"),
        z.literal("기사단-전체 전직"),
        z.literal("기사단-노블레스"),
        z.literal("기사단-소울마스터"),
        z.literal("기사단-플레임위자드"),
        z.literal("기사단-윈드브레이커"),
        z.literal("기사단-나이트워커"),
        z.literal("기사단-스트라이커"),
        z.literal("기사단-미하일"),
        z.literal("아란-전체 전직"),
        z.literal("에반-전체 전직"),
        z.literal("레지스탕스-전체 전직"),
        z.literal("레지스탕스-시티즌"),
        z.literal("레지스탕스-배틀메이지"),
        z.literal("레지스탕스-와일드헌터"),
        z.literal("레지스탕스-메카닉"),
        z.literal("레지스탕스-데몬슬레이어"),
        z.literal("레지스탕스-데몬어벤져"),
        z.literal("레지스탕스-제논"),
        z.literal("레지스탕스-블래스터"),
        z.literal("메르세데스-전체 전직"),
        z.literal("팬텀-전체 전직"),
        z.literal("루미너스-전체 전직"),
        z.literal("카이저-전체 전직"),
        z.literal("엔젤릭버스터-전체 전직"),
        z.literal("초월자-전체 전직"),
        z.literal("초월자-제로"),
        z.literal("은월-전체 전직"),
        z.literal("프렌즈 월드-전체 전직"),
        z.literal("프렌즈 월드-키네시스"),
        z.literal("카데나-전체 전직"),
        z.literal("일리움-전체 전직"),
        z.literal("아크-전체 전직"),
        z.literal("호영-전체 전직"),
        z.literal("아델-전체 전직"),
        z.literal("카인-전체 전직"),
        z.literal("라라-전체 전직"),
        z.literal("칼리-전체 전직"),
      ]),
      ocid: z.string(),
      page: z.number(),
    }),
    header: z.object({
      "x-nxopen-api-key": z.string(),
    }),
  }),
  response: DojangRanking,
};

export type get_Get_theseed_ranking = typeof get_Get_theseed_ranking;
export const get_Get_theseed_ranking = {
  method: z.literal("GET"),
  path: z.literal("/maplestory/v1/ranking/theseed"),
  parameters: z.object({
    query: z.object({
      date: z.string(),
      world_name: z.union([
        z.literal("스카니아"),
        z.literal("베라"),
        z.literal("루나"),
        z.literal("제니스"),
        z.literal("크로아"),
        z.literal("유니온"),
        z.literal("엘리시움"),
        z.literal("이노시스"),
        z.literal("레드"),
        z.literal("오로라"),
        z.literal("아케인"),
        z.literal("노바"),
        z.literal("리부트"),
        z.literal("리부트2"),
        z.literal("버닝"),
        z.literal("버닝2"),
        z.literal("버닝3"),
      ]),
      ocid: z.string(),
      page: z.number(),
    }),
    header: z.object({
      "x-nxopen-api-key": z.string(),
    }),
  }),
  response: TheSeedRanking,
};

export type get_Get_achv_ranking = typeof get_Get_achv_ranking;
export const get_Get_achv_ranking = {
  method: z.literal("GET"),
  path: z.literal("/maplestory/v1/ranking/achievement"),
  parameters: z.object({
    query: z.object({
      date: z.string(),
      ocid: z.string(),
      page: z.number(),
    }),
    header: z.object({
      "x-nxopen-api-key": z.string(),
    }),
  }),
  response: AchievementRanking,
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    "/maplestory/v1/ranking/overall": get_Get_overall_ranking,
    "/maplestory/v1/ranking/union": get_Get_union_ranking,
    "/maplestory/v1/ranking/guild": get_Get_guild_ranking,
    "/maplestory/v1/ranking/dojang": get_Get_dojang_ranking,
    "/maplestory/v1/ranking/theseed": get_Get_theseed_ranking,
    "/maplestory/v1/ranking/achievement": get_Get_achv_ranking,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"];
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | MutationMethod;

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint["response"]>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.get>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
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
