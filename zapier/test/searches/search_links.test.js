/* globals describe, expect, test */

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

zapier.tools.env.inject();

describe('searches', () => {
  test('search_links', async () => {
    const bundle = {
      authData: {
        api_token: process.env.API_TOKEN,
        base_url: process.env.BASE_URL
      },
      inputData: {
        query: 'cloudhiker',
        search_titles: true,
      }
    };

    const result = await appTester(
      App.searches['search_links'].operation.perform,
      bundle
    );

    expect(result.length).toBeGreaterThan(0);
    expect(result[0].url).toMatch(/https?:\/\//);
    expect(result[0].title.length).toBeGreaterThan(0);
  });
});
