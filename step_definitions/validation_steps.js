const { validationPage, resultsPage } = inject();

Given('Validation site is open', async () => {
await validationPage.openPage("validation", 'Validate a signature');
});

When('I upload "{word}" and submit it', async (fileName) => {
await validationPage.uploadNewFile(fileName);
await validationPage.submitFile();
});

Then('results contain {string}', async (result) => {
await resultsPage.validateResults(result);
});

