const authentication = require('./authentication');
const newLinkAddedTrigger = require('./triggers/new_link_added.js');
const newListAddedTrigger = require('./triggers/new_list_added.js');
const newTagAddedTrigger = require('./triggers/new_tag_added.js');
const createNewLink = require('./creates/add_new_link.js');
const createNewList = require('./creates/add_new_list.js');
const createNewTag = require('./creates/add_new_tag.js');
const searchLinks = require('./searches/search_links.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [createNewLink.key]: createNewLink,
    [createNewList.key]: createNewList,
    [createNewTag.key]: createNewTag,
  },
  flags: { skipThrowForStatus: true },
  searches: {
    [searchLinks.key]: searchLinks,
  },
  triggers: {
    [newLinkAddedTrigger.key]: newLinkAddedTrigger,
    [newListAddedTrigger.key]: newListAddedTrigger,
    [newTagAddedTrigger.key]: newTagAddedTrigger,
  },
};
