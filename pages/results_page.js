const { I,constants } = inject();
const {expect} = require("playwright/test");


class ResultsPage {

  locators = {
    alertFrame: "//div[@role='alert']",
    simpleReport: "(//a[@role='tab'])[1]",
    signatureCard: "(//div[@class='card-header bg-primary'])[2]",
    timeStampNumber: "//span[@class='badge badge-light']",
    timeStampTab: "(//div[@class='card mt-3']//div)[1]",
    timeStampCards: "//div[@class='card-body pb-1 collapse show']//div[@class='card mb-3']"
  }




  async validateResults(result) {
    switch (result) {
      case constants.scenarioFlow.relevantResults:
        // check signature name
        await I.seeElement(this.locators.simpleReport);
        const signatureCardText = await I.grabTextFrom(this.locators.signatureCard);
        expect(signatureCardText).toContain(constants.signature.signatureCode);
        // check number of timeStamps
        const timeStampNumberCount = await I.grabTextFrom(this.locators.timeStampNumber);
        await I.click(this.locators.timeStampTab)
        await I.seeElement(this.locators.timeStampCards);
        const timeStampCards = await I.grabNumberOfVisibleElements(this.locators.timeStampCards);
        expect(timeStampCards).toBe(parseInt(timeStampNumberCount));
        // check signature Details
        const signatureDetails = Object.values(constants.signatureDetails);
        for (const signatureDetail of signatureDetails) {
          I.see(signatureDetail);
        }
        break;

      case constants.scenarioFlow.errorMessage:
        await I.seeElement(this.locators.alertFrame);
        const alertText = await I.grabTextFrom(this.locators.alertFrame);
        expect(alertText).toContain(constants.errorMessages.documentWrongFormat);
        break;
    }
  }
}

module.exports = new ResultsPage();