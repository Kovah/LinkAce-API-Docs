module.exports = {
  key: 'add_new_link',
  noun: 'Link',
  display: {
    label: 'Add a New Link',
    description: 'This action adds a new link to LinkAce',
    hidden: false
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
        key: 'visibility',
        label: 'Visibility Setting',
        type: 'integer',
        helpText: 'Choose the link visibility: 1 - public, 2 - internal, 3 - private',
        choices: {1: 'Public', 2: 'Internal', 3: 'External'},
        required: false,
        list: false,
        altersDynamicFields: false
      },
      {
        key: 'check_disabled',
        label: 'Disable Check',
        type: 'boolean',
        helpText: 'Enable if you don\'t want LinkAce to check the link periodically.',
        choices: {true: 'Yes', false: 'No'},
        required: false,
        list: false,
        altersDynamicFields: false
      }
    ],
    sample: {
      id: 86,
      user_id: 1,
      url: 'http://users.ece.utexas.edu/~adnan/pike.html',
      title: 'Rob Pike\'s 5 Rules of Programming',
      description: null,
      visibility: 1,
      icon: 'fa fa-link',
      tags: [],
      lists: [],
      updated_at: '2020-08-12T22:07:14.000000Z',
      created_at: '2020-08-12T22:07:14.000000Z'
    },
    outputFields: [
      {key: 'id', label: 'Internal ID', type: 'integer'},
      {key: 'user_id', label: 'ID of User', type: 'integer'},
      {key: 'url', label: 'URL'},
      {key: 'title', label: 'Title'},
      {key: 'description', label: 'Description'},
      {key: 'visibility', label: 'Visibility', type: 'integer'},
      {key: 'created_at', type: 'datetime', label: 'Creation Date'}
    ],
    perform: {
      body: {
        url: '{{bundle.inputData.url}}',
        title: '{{bundle.inputData.title}}',
        description: '{{bundle.inputData.description}}',
        lists: '{{bundle.inputData.lists}}',
        tags: '{{bundle.inputData.tags}}',
        visibility: '{{bundle.inputData.visibility}}',
        check_disabled: '{{bundle.inputData.check_disabled}}'
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer {{bundle.authData.api_token}}'
      },
      method: 'POST',
      removeMissingValuesFrom: {params: true, body: true},
      url: '{{bundle.authData.base_url}}/api/v2/links'
    }
  }
};
