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

