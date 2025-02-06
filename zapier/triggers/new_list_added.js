const perform = async (z, bundle) => {
  const options = {
    url: `${bundle.authData.base_url}/api/v2/lists`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.api_token}`,
      'Content-Type': 'application/json',
    },
    params: {
      page: bundle.meta.page,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    return response.json.data;
  });
};

module.exports = {
  key: 'new_list_added',
  noun: 'List',
  display: {
    label: 'New List Added',
    description: 'Triggers when a new List was added to LinkAce.',
    hidden: false,
  },
  operation: {
    perform: perform,
    canPaginate: true,
    sample: {
      id: 3,
      user_id: 1,
      name: 'CSS Frameworks',
      description: null,
      visibility: 1,
      created_at: '2020-01-24T13:13:02.000000Z',
      updated_at: '2020-01-24T13:13:02.000000Z',
      deleted_at: null,
    },
    outputFields: [
      { key: 'id', label: 'Internal ID',type: 'integer' },
      { key: 'user_id', label: 'ID of the User',type: 'integer' },
      { key: 'name', label: 'List name' },
      { key: 'description', label: 'List description' },
      { key: 'visibility', label: 'List visibility', type: 'integer' },
      { key: 'created_at', label: 'Creation Date', type: 'datetime' },
      { key: 'updated_at', label: 'Update Date', type: 'datetime' },
      { key: 'deleted_at', label: 'Deletion Date', type: 'datetime' },
    ],
  }
};
