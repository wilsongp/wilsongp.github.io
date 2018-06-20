// ******************************************************************
// this scripts serves to allow test execution in a consistent manner
// across workstations and build servers
// ******************************************************************

const path = require('path');
const fs = require('fs');
const nightwatchGlobalsFile = 'nightwatch.globals.js';

const rootDir = path.resolve(__dirname, '..');

if (!fs.existsSync(nightwatchGlobalsFile)) {
  const endOfLine = require('os').EOL;
  const tab = '\t';
  // create default global
  const _global =
    'module.exports = {' +
    endOfLine +
    tab +
    'token_hash: null' +
    endOfLine +
    '};';
  fs.writeFileSync(nightwatchGlobalsFile, _global.replace(/\"/g, ''));
}

// config for tokenization
const nightwatchConfig = {
  launch_url: 'http://localhost:3000',
  silent: true,
  selenium: {
    start_process: true,
    server_path: path.join(rootDir, 'bin/selenium-server-standalone-3.0.1.jar'),
    host: '127.0.0.1',
    port: 4444
  },
  chrome: {
    driver_path: ''
  },
  phantomjs: {
    driver_path: path.join(rootDir, 'node_modules/phantomjs/bin/phantomjs')
  }
};

// set chrome driver to exe for windows
const isWindows = () => {
  return /^win/.test(process.platform);
};

if (isWindows()) {
  nightwatchConfig.chrome.driver_path = path.join(rootDir, 'bin/chromedriver.exe');
} else {
  nightwatchConfig.chrome.driver_path = path.join(rootDir, 'bin/chromedriver');
}

// nightwatch.json (config)
module.exports = {
  src_folders: [
    path.join(rootDir, 'e2e')
  ],
  output_folder: 'e2e_results',
  globals_path: nightwatchGlobalsFile,
  selenium: {
    start_process: nightwatchConfig.selenium.start_process,
    server_path: nightwatchConfig.selenium.server_path,
    log_path: 'e2e_results',
    host: nightwatchConfig.selenium.host,
    port: nightwatchConfig.selenium.port,
    cli_args: {
      'webdriver.chrome.driver': nightwatchConfig.chrome.driver_path
    }
  },
  test_settings: {
    default: {
      launch_url: nightwatchConfig.launch_url,
      launch_url_auth_hash: nightwatchConfig.launch_url_auth_hash,
      selenium_port: nightwatchConfig.selenium.port,
      selenium_host: nightwatchConfig.selenium.host,
      silent: nightwatchConfig.silent,
      sync_test_names: true,
      screenshots: {
        enabled: false,
        path: ''
      },
      desiredCapabilities: {
        browserName: 'chrome'
      },
      globals: {
        waitForConditionTimeout: 60000,
        asyncHookTimeout: 60000
      }
    },
    phantomjs: {
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path': nightwatchConfig.phantomjs.driver_path
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['ignore-certificate-errors', 'test-type']
        }
      }
    }
  }
};
