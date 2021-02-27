function Cache() {
  let cache;

  async function createCache() {
    return await caches.open('cache');
  }

  return {
    init: async function () {
      if (!cache) {
        cache = await createCache();
      }
    },

    add: function (url, response) {
      cache.add(url, response);
    },

    put: function (url, response) {
      cache.put(url, response);
    },

    match: function (url) {
      return cache.match(url);
    }
  };
}

export default Cache();
