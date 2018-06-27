#/bin/bash
git clone https://github.com/vbhayden/xapi-validation
cd ./xapi-validation
npm install
rm -rf ./.git
rm -rf ./src
cp ../xapi-validation /opt/learning_locker_v2/node_modules/xapi-validation
cp ../xapi-validation /opt/learning_locker_v2/node_modules/xapi-statements/node_modules_xapi-validation
cp ../xapi-validation /opt/learning_locker_xapi/node_modules/@learninglocker/node_modules/xapi-validation
# Remove node_modules from the one in the xapi-service, as that's missing in build
rm -rf /opt/learning_locker_xapi/node_modules/@learninglocker/node_modules/xapi-validation/node_modules
