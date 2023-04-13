module.exports = {
  key: 'add_new_tag',
  noun: 'Tag',
  display: {
    label: 'Add a New Tag',
    description: 'This action adds a new tag to LinkAce',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'name',
        label: 'Name',
        type: 'string',
        helpText: 'The name of the new tag.',
        required: true,
        altersDynamicFields: false,
      },
      {
        key: 'is_private',
        label: 'Private Tag',
        type: 'boolean',
        helpText: 'Choose if the tag should stay private or is visible to guests, if guest mode is enabled.',
        choices: ['Yes', 'No'],
        required: false,
        altersDynamicFields: false,
      }
    ],
    sample: {
      id: 23,
      name: 'javascript',
      user_id: 1,
      created_at: '2020-08-12T13:49:35.000000Z',
      updated_at: '2020-08-12T13:49:35.000000Z'
    },
    outputFields: [
      { key: 'id', label: 'Internal ID', type: 'integer' },
      { key: 'name', label: 'Name' },
      { key: 'user_id', label: 'ID of User', type: 'integer' },
      { key: 'created_at', type: 'datetime', label: 'Creation Date' },
    ],
    perform: {
      body: {
        name: '{{bundle.inputData.name}}',
        is_private: '{{bundle.inputData.is_private}}'
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.api_token}}',
      },
      method: 'POST',
      removeMissingValuesFrom: { params: true, body: true },
      url: '{{bundle.authData.base_url}}/api/v1/tags',
    },
  },
};
