var browserstack = require('browserstack-local');

//creates an instance of Local
var bs_local = new browserstack.Local();

// replace <browserstack-accesskey> with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
var bs_local_args = { 
    'key': '<browserstack-accesskey>',
    'force': 'true',
    'verbose': '3',
    "include-hosts": "*.e7new.* *.ivycomptech.*",
    };

// starts the Local instance with the required arguments
bs_local.start(bs_local_args, function() {
  console.log("Started BrowserStackLocal");

  // check if BrowserStack local instance is running
  console.log(bs_local.isRunning());

  // stop the Local instance
  bs_local.stop(function() {
    console.log("Stopped BrowserStackLocal");
  });
});