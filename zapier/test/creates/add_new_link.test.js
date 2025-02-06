/* globals describe, expect, test */

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

zapier.tools.env.inject();

describe('creates', () => {
  test('add_new_link', async () => {
    const dataModifier = Date.now();

    const bundle = {
      authData: {
        api_token: process.env.API_TOKEN,
        base_url: process.env.BASE_URL
      },
      inputData: {
        url: 'https://www.duckduckgo.com?' + dataModifier,
        title: 'DuckDuckGo ' + dataModifier,
        description: 'The DuckDuckGo Search Engine ' + dataModifier,
        visibility: 1
      }
    };

    const result = await appTester(
      App.creates['add_new_link'].operation.perform,
      bundle
    );

    expect(result.url).toEqual('https://www.duckduckgo.com?' + dataModifier)
    expect(result.title).toEqual('DuckDuckGo ' + dataModifier)
    expect(result.description).toEqual('The DuckDuckGo Search Engine ' + dataModifier)
    expect(result.visibility).toEqual(1);
  });
});
