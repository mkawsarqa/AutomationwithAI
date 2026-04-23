#  E2E checkout process QA Workflow with prompt in Natural Language

## Workflow Overview
The below prompt walks you through a complete 7-step QA workflow using MCP servers and AI agents to go from reading user story to commited automated test scripts into the github account.

Step 1: Read User Story

Prompt:
I need to start a new testing workflow. Please read the user story from the file:
user-story-101-e2e-checkout.md

Expected output:
    * Summary of the user story
    * List of Acceptance Criteria
    * Applicable url and test credentials
    * Key features to test

Step 2: Create Test Plan

Prompt:
Act as a Senior Software Development Engineer at Test with 8 years experience. Based on the use story named "user-story-101-e2e-checkout.md" you just reviewed, use the playwright-test-planner aagent to:

1. Read the application URL and test credentials from the user story file
2. Explore the application and understand all the workflows mentioned in the acceptance criteria
3. Create a comprehensive test plan that covers all acceptance criteria including:
    - Happy path scenarios
    - Negative scenarios (Valdiation errors, empty fields, invalid data)
    - Edge cases and boundary conditions
    - Navigation flow tests
4. Save the test plan as: specs/saucedemo-checkout-test-plan.md
5. Make sure each test scenario includes:
    - Clear test case titile
    - Detailed step-by-step instructions
    - Expected results for each step
    - Test data requirements

Expected Output:
    * Complete test plan in a markdown file saved to specs/
    * Oraganized test scenarios with clear structure
    * Browser exploration screenshots (if needed) 