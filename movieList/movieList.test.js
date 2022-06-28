const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can add a movie', async () => {
    await driver.findElement(By.id("searchBar")).sendKeys('Hello\n')
    await driver.sleep(3000)
})

test("Cross of movie", async () => {
    await driver.findElement(By.xpath('//*[text()="Hello"]')).click()
})

test('Check for message', async () => {
    await driver.findElement(By.id("message"))

})

test('I can delete movie', async () => {
    await driver.findElement(By.xpath('//*[text()="x"]')).click()
    await driver.sleep(3000)
})
