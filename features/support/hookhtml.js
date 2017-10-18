const report = require('cucumber-html-report');
report.create({
  source:       '../../reports/cucumber-test-results.json',      // source json
  dest:         '../../reports/results',                   // target directory (will create if not exists)
  name:         'reporters.html',                 // report file name (will be index.html if not exists)
  //template:     'mytemplate.html',             // your custom mustache template (uses default if not specified)
  title:        'Cucumber Report',             // Title for default template. (default is Cucumber Report)
  component:    'My Component',                // Subtitle for default template. (default is empty)
  //logo:         './logos/cucumber-logo.svg',   // Path to the displayed logo.
  //screenshots:  './screenshots',               // Path to the directory of screenshots. Optional.
})
.then(console.log)
.catch(console.error);
