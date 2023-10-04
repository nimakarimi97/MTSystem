import { computed, reactive, ref } from 'vue'
import axios from 'axios'

export function useFetch(url, config = {}) {
  const data = ref(null)
  const response = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetch = async () => {
    loading.value = true
    try {
      const result = await axios.request({
        url,
        ...config,
      })
      response.value = result
      data.value = result.data
    }
    catch (err) {
      error.value = err
    }
    finally {
      loading.value = false
    }
  }

  !config.skip && fetch()

  return { data, response, error, loading, fetch }
}

const cacheMap = reactive(new Map())

export function useFetchCache(key, url, config) {
  const info = useFetch(url, { skip: true, ...config })

  const update = () => cacheMap.set(key, info.response.value)
  const clear = () => cacheMap.set(key, undefined)
  const fetch = async () => {
    try {
      await info.fetch()
      update()
    }
    catch {
      clear()
    }
  }

  const response = computed(() => cacheMap.get(key))
  const data = computed(() => response.value?.data)

  if (response.value == null) 
    fetch()

  return {
    ...info, fetch, data, response, clear,
  }
}
