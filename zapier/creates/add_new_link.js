module.exports = {
  key: 'add_new_link',
  noun: 'Link',
  display: {
    label: 'Add a New Link',
    description: 'This action adds a new link to LinkAce',
    hidden: false,
    important: true
  },
  operation: {
    inputFields: [
      {
        key: 'url',
        label: 'URL',
        type: 'string',
        helpText: 'The URL you want to save.',
        required: true,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'title',
        label: 'Title',
        type: 'string',
        helpText: 'An optional title for the new link.',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'description',
        label: 'Description',
        type: 'text',
        helpText: 'Optional description for the new link.',
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'lists',
        label: 'Lists',
        type: 'string',
        helpText: 'Names of the lists you want append to the link.',
        required: false,
        list: true,
        altersDynamicFields: false
      },
      {
        key: 'tags',
        label: 'Tags',
        type: 'string',
        helpText: 'Names of the tags you want append to the link.',
        required: false,
        list: true,
        altersDynamicFields: false
      },
      {
        key: 'is_private',
        label: 'Private Link',
        type: 'boolean',
        helpText: 'Choose if the link should stay private or is visible to guests, if guest mode is enabled.',
        choices: ['Yes', 'No'],
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'check_disabled',
        label: 'Disable Check',
        type: 'boolean',
        helpText: 'Enable if you don\'t want LinkAce to check the link periodically.',
        choices: ['Yes', 'No'],
        required: false,
        list: false,
        altersDynamicFields: false
      }
    ],
    sample: {
      url: 'http://users.ece.utexas.edu/~adnan/pike.html',
      title: 'Rob Pike\'s 5 Rules of Programming',
      description: null,
      user_id: 1,
      icon: 'fa fa-link',
      updated_at: '2020-08-12T22:07:14.000000Z',
      created_at: '2020-08-12T22:07:14.000000Z',
      id: 86,
      tags: [],
      lists: []
    },
    outputFields: [
      {key: 'url', label: 'URL'},
      {key: 'title', label: 'Title'},
      {key: 'description', label: 'Description'},
      {key: 'user_id', label: 'ID of User', type: 'integer'},
      {key: 'created_at', type: 'datetime', label: 'Creation Date'},
      {key: 'id', label: 'Internal ID', type: 'integer'}
    ],
    perform: {
      body: {
        url: '{{bundle.inputData.url}}',
        title: '{{bundle.inputData.title}}',
        description: '{{bundle.inputData.description}}',
        lists: '{{bundle.inputData.lists}}',
        tags: '{{bundle.inputData.tags}}',
        is_private: '{{bundle.inputData.is_private}}',
        check_disabled: '{{bundle.inputData.check_disabled}}'
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.api_token}}'
      },
      method: 'POST',
      removeMissingValuesFrom: {params: true, body: true},
      url: '{{bundle.authData.base_url}}/api/v1/links'
    }
  }
};
