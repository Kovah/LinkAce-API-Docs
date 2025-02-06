const perform = async (z, bundle) => {
  const options = {
    url: `${bundle.authData.base_url}/api/v2/tags`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.api_token}`,
      'X-BASE-URL': bundle.authData.base_url,
    },
    params: {
      api_token: bundle.authData.api_token,
      base_url: bundle.authData.base_url,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    return response.json.data;
  });
};

module.exports = {
  key: 'new_tag_added',
  noun: 'Tag',
  display: {
    label: 'New Tag Added',
    description: 'Triggers when a new Tag was added to LinkAce.',
    hidden: false,
  },
  operation: {
    perform: perform,
    canPaginate: true,
    sample: {
      id: 169,
      user_id: 1,
      name: 'inspiration',
      visibility: 1,
      created_at: '2021-08-08T21:14:25.000000Z',
      updated_at: '2021-08-08T21:14:25.000000Z',
      deleted_at: null,
    },
    outputFields: [
      { key: 'id', label: 'Internal ID',type: 'integer' },
      { key: 'user_id', label: 'ID of the User',type: 'integer' },
      { key: 'name', label: 'Tag name' },
      { key: 'visibility', label: 'Tag visibility', type: 'integer' },
      { key: 'created_at', label: 'Creation Date', type: 'datetime' },
      { key: 'updated_at', label: 'Update Date', type: 'datetime' },
      { key: 'deleted_at', label: 'Deletion Date', type: 'datetime' },
    ],
  }
};
