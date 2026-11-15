import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * False during the server render and hydration, true afterwards. Unlike a
 * mount effect it causes no extra commit on client-side navigation.
 */
export default function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
