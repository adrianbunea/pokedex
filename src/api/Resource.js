function getPath(resourceUrl) {
  return resourceUrl.split('v2')[1];
}

const Resource = { getPath };

export default Resource;
