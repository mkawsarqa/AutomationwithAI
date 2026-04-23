# Demo

This file was created in the local

A new branch is created as KawsarM and all the codes will be pushed to this branch first. Thereafter, a pull request will be raised and merged to the main after review.

This project was initiated through visual studio code and global configuration also completed from VS Code terminal using the below commands:

git config --global user.name " First Name Last Name"\
git config --global user.email "youremail@email.com"

***** Project Description *******

Goal: Develop a QA framework that works with natural laguage which can execute an end to end workflow and auto update the github repo.

Architechture High Level Descriptions:
1. Able to take Natural Language Instructions using any appropriate LLM and MCP Servers. 
2. AI Orchestration using GitHub Copilot/ Claude agent. 
3. Playwright specialized agents (Planner, Generator, Healer).
4. End to end promot will be provided using either txt or md file

Agents, MCP servers, LLM and their roles:
1. The GitHub Copilot/ Claude is the main agent who will coordinate with Playwright specialized agents
2. Plawright Test Planner - Explore apps and creates test plans
3. Playwright Test Generator - Generate automation code
4. PlayWright Test Healer - Debug and auto fixes automation codes in case of failure and optimize codes
5. PlayWright MCP - browser automation tool
6. GitHub MCP - Version control operations
7. LLM - either ChatGPT or Gemini or Claude 

Environment setup in MacOS:
1. Install node JS using home brew
2. Install Playwright using npm init playwright@latest command and follow the prompts. This install the browsers too.
3. Intall Playwright MCP servers. This is an open sourced github repo. Search from "https://playwright.dev/docs/getting-started-mcp". Under .vscode mcp.json file is generated.
4. Install speclized playwright specialized agents. Search from "https://playwright.dev/docs/test-agents" and run the below command. 3 agents are added under .guthub/agents directory
- npx playwright init-agents --loop=vscode
5. Inatll github mcp server from "https://github.com/github/github-mcp-server" and add the dependencies in the mcp.json file.

Steps to genrate github_mcp_pat Token for free:


Automation Framework Folder Structure:
1. Create a new folder in the project and name it as user-stories: This folder is expected store all the user stories either in the md file or txt file.


Tasks to do:
1. Reading user story file and extract requirements and acceptnace criteria
2. Test plan creation by playwright planner agent by exploring the app autonomously. Expected out is a md file in the specs directory named saucedemo-testplan-checkout.md
3. Manual exploratory testing by plawroght browser mcp. Screenshots and observations are expected output.
4. Playwright test-generator will auto generate automation codes based on the newly created test plan and manual test execution by exploratory testing. File location and name: tests/saucedemo-checkout/
5. Execute the generated codes and heal if required for failure due to the error in the automation code by playwright test healer. Healed test scripts and Results are the expected outputs
6. Generate test reports and save the test report in the test-results directory. File name "user-story-101-e2e-checkout-test-retport.md
7. Commit to the github bu GitHub MCP agent that includes actions like Stage All, Commit and Push

Expected Overall Results: Complete QA cycle for checkout process and all artifacts are in the git

