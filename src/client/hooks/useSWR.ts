import useOgSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(async (res) => res.json())

export function useSWR<T>(url: string) {
  return useOgSWR<T>(url, fetcher)
}
