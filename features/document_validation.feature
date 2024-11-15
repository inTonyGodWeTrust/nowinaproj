@validation-documents
Feature: Document validation
	Scenario Outline: Validate different documents
		Given Validation site is open
		When I upload <file> and submit it
		Then results contain <result>

		Examples:
			| file   								| result 			 |
			| "test-valid-signature-signed-LTA.pdf" | "Relevant results" |
			| "honey_badger.png" 					| "Error message"    |