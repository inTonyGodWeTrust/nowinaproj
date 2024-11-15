const { I } = inject();
const {expect} = require("playwright/test");

class HomePage {

  locators = {
    submitButton: '//button[@type="submit"]',
    uploadButton: '//*[@id="signedFile"]'
  }

  async openPage(url, expectedText) {
    await I.amOnPage(url);
    await I.see(expectedText);
  }

  async uploadNewFile(filename) {
    I.attachFile(this.locators.uploadButton, `data/${filename}`);
    let value = await I.grabValueFrom(this.locators.uploadButton);
    expect(value).toContain(filename);
  }

  async submitFile() {
    await I.seeElement(this.locators.submitButton);
    await I.click(this.locators.submitButton);
  }
}

module.exports = new HomePage();