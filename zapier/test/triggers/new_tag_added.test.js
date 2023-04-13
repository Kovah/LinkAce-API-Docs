/* globals describe, expect, test */

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

zapier.tools.env.inject();

describe('trigger', () => {
  test('new_tag_added', async () => {
    const dataModifier = Date.now();

    const bundle = {
      authData: {
        api_token: process.env.API_TOKEN,
        base_url: process.env.BASE_URL
      },
      meta: {
        page: 1,
      },
      inputData: {}
    };

    const result = await appTester(
      App.triggers['new_tag_added'].operation.perform,
      bundle
    );

    expect(result.length).toBeGreaterThan(0);
    expect(result[0].name.length).toBeGreaterThan(0);
  });
});
