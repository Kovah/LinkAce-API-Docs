/* globals describe, expect, test */

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

zapier.tools.env.inject();

describe('creates', () => {
  test('add_new_list', async () => {
    const dataModifier = Date.now();

    const bundle = {
      authData: {
        api_token: process.env.API_TOKEN,
        base_url: process.env.BASE_URL
      },
      inputData: {
        name: 'My List ' + dataModifier,
        description: 'A new example List ' + dataModifier,
        visibility: 1
      }
    };

    const result = await appTester(
      App.creates['add_new_list'].operation.perform,
      bundle
    );

    expect(result.name).toEqual('My List ' + dataModifier);
    expect(result.description).toEqual('A new example List ' + dataModifier);
    expect(result.visibility).toEqual(1);
  });
});
