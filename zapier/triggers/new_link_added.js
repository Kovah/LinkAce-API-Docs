const perform = async (z, bundle) => {
  const options = {
    url: `${bundle.authData.base_url}/api/v2/links`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bundle.authData.api_token}`,
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
  key: 'new_link_added',
  noun: 'Link',
  display: {
    label: 'New Link Added',
    description: 'Triggers when a new Link was added to LinkAce.',
    hidden: false,
    important: true,
  },
  operation: {
    perform: perform,
    type: 'polling',
    canPaginate: true,
    sample: {
      id: 90,
      user_id: 1,
      url: 'https://trimps.github.io/',
      title: 'Trimps 5.9.2',
      description: 'Trimps',
      visibility: 1,
      created_at: '2023-04-13T15:43:12.000000Z',
      updated_at: '2023-04-13T15:43:12.000000Z',
      deleted_at: null,
      icon: 'brand.github',
      status: 1,
      check_disabled: false,
      thumbnail: null,
    },
    outputFields: [
      { key: 'id', label: 'Internal ID',type: 'integer' },
      { key: 'user_id', label: 'ID of the User',type: 'integer' },
      { key: 'url', label: 'URL' },
      { key: 'title', label: 'Title' },
      { key: 'description', label: 'Description' },
      { key: 'visibility', label: 'Link visibility', type: 'integer' },
      { key: 'created_at', label: 'Creation Date', type: 'datetime' },
      { key: 'updated_at', label: 'Update Date', type: 'datetime' },
      { key: 'deleted_at', label: 'Deletion Date', type: 'datetime' },
      { key: 'status', label: 'Link Status', type: 'integer' },
      { key: 'check_disabled', label: 'Checks are disabled', type: 'boolean' },
      { key: 'thumbnail', type: 'string', label: 'URL of the Thumbnail' },
    ],
  }
};
