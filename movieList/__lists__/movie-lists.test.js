const { Builder, Capabilities, By } = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get("file:///C:/Users/Brandon/DevMountain/Week%2011/automation/automation/movieList/index.html")
})

afterAll(async () => {
    await driver.quit()
})

test("add a movie to the list", async () => {
    const inputField = await driver.findElement(By.xpath('//input'))
    await inputField.sendKeys('Tenet\n')
    await driver.sleep(4000)
})

test("cross a movie from the list", async () => {
    const crossMovie = await driver.findElement(By.xpath('/html/body/main/ul/li/span'))
    await crossMovie.click
    await driver.sleep(1000)
})

test("delete movie from the list", async () => {
    const deleteButton = await driver.findElement(By.xpath("/html/body/main/ul/li/button"))
    await deleteButton.click
    await driver.sleep(2000)
})