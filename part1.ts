var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;



async function invoke() {
    let driver = await new webdriver.Builder().forBrowser('chrome').build();

    await driver.get("https://www.google.com");
    await driver.sleep(2000);
    await driver.quit();

}

invoke();

console.log("commit 1");

console.log("commit 2");

console.log("commit 3");

console.log("commit 4");