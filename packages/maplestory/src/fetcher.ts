type RequestHeaders = Record<string, string>;

interface RequestOptions<Output> extends RequestInit {
  headers?: RequestHeaders;
  parser?: (data: unknown) => Output;
  searchParams?: Record<string, number | string>;
  url: string;
}

export class Fetcher {
  constructor(private baseUrl: string, private baseHeaders: RequestHeaders) {}

  static create({ baseHeaders, baseUrl }: { baseHeaders: RequestHeaders; baseUrl: string }) {
    return new Fetcher(baseUrl, baseHeaders);
  }

  async request<Output = unknown>({
    headers: _headers,
    parser,
    searchParams: _searchParams,
    url,
    ...options
  }: RequestOptions<Output>) {
    const searchParams =
      _searchParams != null
        ? `?${new URLSearchParams(
            Object.fromEntries(
              Object.entries(_searchParams).map((key, value) => [key, value.toString()]),
            ),
          ).toString()}`
        : '';
    const endpoint = new URL(`${url}${searchParams}`, this.baseUrl);
    const headers = new Headers({
      ...this.baseHeaders,
      ..._headers,
    });

    const response = await fetch(endpoint, { ...options, headers });

    if (!response.ok) {
      throw new Error('ERROR');
    }

    const data = await response.json();

    if (parser != null) {
      return parser(data);
    }

    return data as Output;
  }

  get<Output = unknown>(options: Omit<RequestOptions<Output>, 'method'>) {
    return this.request<Output>({ ...options, method: 'get' });
  }
}
