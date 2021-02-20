function Cache() {
  let instance;

  async function createInstance() {
    return await caches.open('cache');
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
}

export default Cache();
// Don't be scared, we can export a value, a value can be a function ('Cache')
// or the result of the called function ('Cache()') 
