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

Link all local projects - required to get .clasp.json file per project which is needed to push/pull projects from google projects
> just link-all

OR

Link a specific project
> just link <subfolder>

Clone google project - go to script.google.com to view your project details for the project_guid/scriptid in project settings
> just clone <subfolder> <project_guid>

## Developing a script
Make sure that you are synced with the current state of the App Suite. Someone may be editing the script remotely without using this repo:
> just pull ./project_folder

This auto updates your google project while you edit the code
> just push-on-save <subfolder>

OR

After you make your changes, run:
> just push <subfolder>

Edit the Code.js file of your project

## Deploying a script
NOTE: use single or double quotes around the first param. It MUST be a string that contains text, numbers, and special chars to work properly. Use single quotes if you want to ensure that bash does not evaluate variables inside the string.

Make sure to sync the remote App Suite with your code changes by pushing them:
> just push ./project_folder

Example:
> just deploy 'A description of the deployment' ./project_folder

Example of what not to do:
> just deploy A description of the deployment ./project_folder

Example of what to be aware of - this will evaluate the $bash_var like a bash variable. Use single quotes if you want the text $bash_var in your deployment text. If you want the value of $bash_var to be in your deployment text, then use double quotes:
> just deploy "A description of the deployment $bash_var" ./project_folder

## Clasp docs
https://developers.google.com/apps-script/guides/clasp

Scripts made under john.criticalmediaguys@gmail.com

