export default class LocalStorage {
  static setItem(key, item) {
    localStorage.setItem(key,JSON.stringify(item))
  }

  static getItem(key) {
    const item = localStorage.getItem(key)
    return JSON.parse(item)
  }

  static remove(key) {
    localStorage.removeItem(key)
  }
}