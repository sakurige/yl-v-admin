class Storage {
  static instance: Storage;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Storage();
    return this.instance;
  }

  setItem(key: string, value: any) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string) {
    const value = localStorage.getItem(key);
    if (value === null) {
      console.log("Key 不存在");
      return false;
    } else {
      return value;
    }
  }
}

export default Storage.getInstance();
