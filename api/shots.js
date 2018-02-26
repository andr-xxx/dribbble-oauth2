const AbstractApi = require('./abstract');

module.exports = class ShotsApi extends AbstractApi {
  getAll() {
    return this.request('get', `user/shots`);
  }

  get(id) {
    return this.request('get', `shots/${id}`);
  }

  create(settings) {
    return this.request('post', `shots`, settings);
  }

  update(id, settings) {
    return this.request('put', `shots/${id}`, settings);
  }

  delete(id) {
    return this.request('delete', `shots/${id}`);
  }
};