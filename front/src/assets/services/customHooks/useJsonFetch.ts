import { useEffect, useRef, useState } from 'react';

export type ErrorStatus = {
  status: boolean;
  errorText?: string;
};

export enum RequestMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type OptionsMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type OptionsTypes = {
  method: RequestMethods;
  body?: string;
};

export type ReturnUseJsonType<T> = {
  data?: T;
  isLoading: boolean;
  hasError: ErrorStatus;
};

export default function useJsonFetch<T>(
  url: string,
  options: OptionsTypes = { method: RequestMethods.GET }
): ReturnUseJsonType<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState<ErrorStatus>({ status: false });
  const timestampRef = useRef<number>();

  useEffect(() => {
    (async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          setError({
            status: true,
            errorText: 'Неизвестная ошибка при ответе сервера',
          });
          throw new Error(response.statusText);
        }
        if (!/^20./.test(`${response.status}`)) {
          setError({
            status: true,
            errorText: response.statusText,
          });
        }

        const json = await response.json();
        if (!json) {
          setError({
            status: true,
            errorText: response.statusText,
          });
        }
        if (timestampRef.current === timestamp) {
          setData(json);
        }
      } catch (e) {
        console.log(e),
          setError({
            status: true,
            errorText: 'Ошибка сервера',
          });
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, isLoading, hasError };
}
