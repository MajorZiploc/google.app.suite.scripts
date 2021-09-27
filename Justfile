# vim: set filetype=bash :

# install this repos dependencies
install:
  npm install @google/clasp -g; yarn install;

# login to google projects
login:
  clasp login

# logout to google projects
logout:
  clasp logout

# Get all projects root folders in this repo
get-projects:
  find . -mindepth 1 -maxdepth 1 -type d -not -path "./.git" -not -path "./node_modules";

# Pull all projects changes from remote google projects
pull-all:
  projects=`just get-projects`; for project in $projects; do cd "$project"; echo "Pulling project at $PWD"; clasp pull; cd ..; done;

# Pull changes from remote google projects
pull +FOLDER_NAME:
  cd "{{FOLDER_NAME}}"; clasp pull;

# Pushes changes to remote google projects
push +FOLDER_NAME:
  cd "{{FOLDER_NAME}}"; clasp push;

# deploy new version of script to remote google projects
deploy DESCRIPTION +FOLDER_NAME:
  cd "{{FOLDER_NAME}}"; clasp deploy -d "{{DESCRIPTION}}";

# Pushes changes to code to remote google projects as your save
push-on-save +FOLDER_NAME:
  cd "{{FOLDER_NAME}}"; clasp push --watch;

# clones a new project from the remote google projects given the projects scriptId
clone SUB_FOLDER +PROJECT_GUID:
  cd "{{SUB_FOLDER}}" && clasp clone "{{PROJECT_GUID}}" && cat .clasp.json | sed -E 's/.*?scriptId":"([^"]*)?".*/\1/' > scriptId.txt;

# Links projects to the remote google projects
link-all:
  projects=`just get-projects`; for project in $projects; do cd "$project"; echo "Linking project at $PWD"; scriptId=`cat ./scriptId.txt`; clasp clone "$scriptId"; cd ..; done; true;
  
# Links project to the remote google projects
link +FOLDER_NAME:
  cd "{{FOLDER_NAME}}"; scriptId=`cat ./scriptId.txt`; clasp clone "$scriptId";

# Opens project in google projects in a browser
open-project +FOLDER_NAME:
  cd "{{FOLDER_NAME}}"; clasp open;

