/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    plugins: ['build', 'gzip', 'revision-data', 'azure-blob', 'azure-tables']
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
    ENV['azure-blob'] = {
      containerName: 'amanager-statics', // defaults to 'emberdeploy'

      // You can also connect using your connection string, set it as:
      connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING
    };

    ENV['azure-tables'] = {
      tableName: 'amanagerindex', // defaults to 'emberdeploy'
      connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
