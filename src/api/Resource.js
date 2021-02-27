import RequestStatus from './RequestStatus';

function getPath(resourceUrl) {
  return resourceUrl.split('v2')[1];
}

function notAsked() {
  return { status: RequestStatus.NOT_ASKED, data: null };
}

function loading() {
  return { status: RequestStatus.LOADING, data: null };
}

function success(data) {
  return { status: RequestStatus.SUCCESS, data: data };
}

function failure(error) {
  return { status: RequestStatus.FAILURE, data: error };
}

const Resource = { getPath, notAsked, loading, success, failure };

export default Resource;
