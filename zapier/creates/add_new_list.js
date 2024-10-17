module.exports = {
  key: 'add_new_list',
  noun: 'List',
  display: {
    label: 'Add a New List',
    description: 'This action adds a new list to LinkAce',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'name',
        label: 'Name',
        type: 'string',
        helpText: 'The name of the new list.',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'description',
        label: 'Description',
        type: 'text',
        helpText: 'Optional description for the new list.',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'visibility',
        label: 'Visibility Setting',
        type: 'integer',
        helpText: 'Choose the list visibility: 1 - public, 2 - internal, 3 - private',
        choices: [1, 2, 3],
        required: false,
        list: false,
        altersDynamicFields: false,
      }
    ],
    sample: {
      id: 12,
      user_id: 1,
      name: 'Cool Browser Games',
      description: 'A list of my personal favorite browser games.',
      visibility: 1,
      created_at: '2020-08-12T22:07:14.000000Z',
      updated_at: '2020-08-12T22:07:14.000000Z'
    },
    outputFields: [
      { key: 'id', label: 'Internal ID', type: 'integer' },
      { key: 'user_id', label: 'ID of User', type: 'integer' },
      { key: 'name', label: 'Name' },
      { key: 'description', label: 'Description' },
      { key: 'visibility', label: 'Visibility' },
      { key: 'created_at', type: 'datetime', label: 'Creation Date' },
    ],
    perform: {
      body: {
        name: '{{bundle.inputData.name}}',
        description: '{{bundle.inputData.description}}',
        visibility: '{{bundle.inputData.visibility}}',
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.api_token}}',
      },
      method: 'POST',
      removeMissingValuesFrom: { params: true, body: true },
      url: '{{bundle.authData.base_url}}/api/v2/lists',
    },
  },
};
