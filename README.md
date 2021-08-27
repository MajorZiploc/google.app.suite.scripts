
# Google App Suite Scripts

A place to store app suite scripts
Allows for local development of scripts

## Dependencies
- npm v7.18.1
- clasp v2.4.1 (npm install @google/clasp -g)
- yarn v1.22.5

## Development Dependencies
- just (command runner) v0.10.0

## Development Environment
- vscode

## Helper scripts
Look at various Justfiles to view/use the helper commands with just <cmd>

Use `just --list` to view all available commands

## Init setup

Install JS project dependencies
> just install

Login to Google Drive
> just login

Link local projects - required to get .clasp.json file per project which is needed to push/pull projects from google projects
> just link

Clone google project - go to script.google.com to view your project details for the project_guid/scriptid in project settings
> just clone <subfolder> <project_guid>

## Developing a script
This auto updates your google project while you edit the code
> just push-on-save <subfolder>

OR

After you make your changes, run:
> just push <subfolder>

Edit the Code.js file of your project

## Clasp docs
https://developers.google.com/apps-script/guides/clasp

Scripts made under john.criticalmediaguys@gmail.com

