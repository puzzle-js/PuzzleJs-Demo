const {StorefrontConfigurator, Storefront} = require('puzzle-microfrontends');
const path = require('path');
const storefrontConfiguration = require('./storefront.config');

const storefrontConfigurator = new StorefrontConfigurator();

storefrontConfigurator.config(storefrontConfiguration);

const storefront = new Storefront(storefrontConfigurator);

storefront.server.setStatic('/static', path.join(__dirname, './src/static'));

storefront.init(() => {
  console.log(`Storefront is listening on port ${storefrontConfiguration.port}`);
});
