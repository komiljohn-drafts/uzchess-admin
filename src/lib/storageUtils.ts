export const setStorageItem = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("Error saving to local storage", e)
  }
}

export const getStorageItem = <T>(
  key: string,
  defaultValue?: T
): T | undefined => {
  try {
    const serializedValue = localStorage.getItem(key)
    if (serializedValue === null) {
      return defaultValue ?? undefined
    }
    return JSON.parse(serializedValue) as T
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("Error reading from local storage", e)
    return defaultValue ?? undefined
  }
}
