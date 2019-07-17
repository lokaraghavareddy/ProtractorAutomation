
var reuse = require('protractor')
var jasmineReporters = require('jasmine-reporters');

exports.config = {
    baseUrl:'https://www.facebook.com',
    framework: 'jasmine',
    chromeDriver: './Drivers/chromedriver.exe',
    geckoDriver: './Drivers/geckodriver.exe',
    directConnect: true,
    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './Reports',
            filePrefix: 'xmlresults'
        }));

        reuse.browser.manage().window().maximize()
    },
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './Reports',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('./Reports/xmlresults.xml', testConfig);
        });
    },
    plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: true,
        disableScreenshot: false,
        screenshotPath: './Reports/screenshots',
        screenshotOnExpectFailure: false,
        screenshotOnSpecFailure: true,
        clearFoldersBeforeTest: true,
        htmlReportDir: './Reports/htmlReports',

    }],

    specs: ['./JSFilesLocation/Specs/sample.js']

}