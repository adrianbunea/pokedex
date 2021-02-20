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
