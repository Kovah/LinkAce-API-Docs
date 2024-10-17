module.exports = {
  type: 'custom',
  connectionLabel: 'Self-Hosted LinkAce at {{bundle.authData.base_url}}',
  test: {
    url: '{{bundle.authData.base_url}}/api/v2/links',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer {{bundle.authData.api_token}}',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: {},
    removeMissingValuesFrom: {}
  },
  fields: [
    {
      computed: false,
      key: 'base_url',
      required: true,
      label: 'LinkAce URL',
      type: 'string',
      helpText: 'Enter the URL of your LinkAce installation including the protocol such as https://, and without a leading slash.',
      inputFormat: '{{input}}/api/v2/...'
    },
    {
      computed: false,
      key: 'api_token',
      required: true,
      label: 'API Token',
      type: 'password',
      helpText: 'The API Token can be found in the user settings. If you don\'t have one already, generate a new one. Details can be found in the [API Documentation](https://api-docs.linkace.org/).'
    }
  ],
  customConfig: {}
};
