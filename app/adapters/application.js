import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',

  handleResponse: function(status, headers, payload) {
    if (status === 422  && payload.error) {
            
      return new DS.InvalidError([
        {
          source: { pointer: 'data/attributes/message' },
          detail: payload.error
        }
      ]);
    }

    return this._super(...arguments);
  },
});
