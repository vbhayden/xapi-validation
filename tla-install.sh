#/bin/bash

# Get the modified version of the LL xapi validation
git clone https://github.com/vbhayden/xapi-validation

# Install its packages (rulr)
cd ./xapi-validation
npm install

# Clear the fluff
rm -rf ./.git
rm -rf ./src

# Remove existing versions
rm -rf /opt/learning_locker_v2/node_modules/xapi-validation
rm -rf /opt/learning_locker_v2/node_modules/xapi-statements/node_modules_xapi-validation
rm -rf /opt/learning_locker_xapi/node_modules/@learninglocker/node_modules/xapi-validation

# Copy the new ones
cp ../xapi-validation /opt/learning_locker_v2/node_modules/xapi-validation
cp ../xapi-validation /opt/learning_locker_v2/node_modules/xapi-statements/node_modules_xapi-validation
cp ../xapi-validation /opt/learning_locker_xapi/node_modules/@learninglocker/node_modules/xapi-validation

# Remove node_modules from the one in the xapi-service, as that's missing in build
rm -rf /opt/learning_locker_v2/node_modules/xapi-statements/node_modules/xapi-validation/node_modules
rm -rf /opt/learning_locker_xapi/node_modules/@learninglocker/node_modules/xapi-validation/node_modules

echo "XAPI Validation Changed"
