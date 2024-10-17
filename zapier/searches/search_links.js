const perform = async (z, bundle) => {
  const options = {
    url: `${bundle.authData.base_url}/api/v2/search/links`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bundle.authData.api_token}`,
    },
    params: {
      query: bundle.inputData.query,
      order_by: bundle.inputData.order_by,
      search_title: bundle.inputData.search_title,
      search_description: bundle.inputData.search_description,
      visibility: bundle.inputData.visibility,
      broken_only: bundle.inputData.broken_only,
      empty_lists: bundle.inputData.empty_lists,
      empty_tags: bundle.inputData.empty_tags,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json.data;
    if (results && results.length > 0) {
      return [results[0]];
    }
    return [];
  });
};

module.exports = {
  key: 'search_links',
  noun: 'Link',
  display: {
    label: 'Search for Links',
    description: 'Search for links by various options.',
  },
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'query',
        type: 'string',
        label: 'Query',
        helpText: 'The actual query to search for.',
        required: true,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'search_title',
        type: 'boolean',
        label: 'Search title',
        helpText: 'Enables searching in the title.',
        choices: ['Yes', 'No'],
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'search_description',
        type: 'boolean',
        label: 'Search description',
        helpText: 'Enables searching in the description.',
        choices: ['Yes', 'No'],
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'visibility',
        type: 'integer',
        label: 'Link Visibility',
        helpText: 'Search by link visibility: 1 - public, 2 - internal, 3 - private',
        choices: [1, 2, 3],
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'broken_only',
        type: 'boolean',
        label: 'Broken links only',
        helpText: 'Search for broken links only (Status is not "Ok").',
        choices: ['Yes', 'No'],
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'empty_lists',
        type: 'boolean',
        label: 'Without lists',
        helpText: 'Search for links without lists attached.',
        choices: ['Yes', 'No'],
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'empty_tags',
        type: 'boolean',
        label: 'Without tags',
        helpText: 'Search for links without tags attached.',
        choices: ['Yes', 'No'],
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'order_by',
        type: 'string',
        label: 'Without tags',
        helpText: 'Search for links without tags attached.',
        choices: ['title:asc', 'title:desc','created_at:asc', 'created_at:desc', 'url:asc', 'url:desc'],
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
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
      {key: 'id', label: 'Internal ID', type: 'integer'},
      {key: 'url', label: 'URL'},
      {key: 'title', label: 'Title'},
      {key: 'description', label: 'Description'},
      {key: 'user_id', label: 'ID of User', type: 'integer'},
      {key: 'is_private', type: 'boolean', label: 'Link is private'},
      {key: 'created_at', type: 'datetime', label: 'Creation Date'}
    ],
  },
};
