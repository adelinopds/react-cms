#!/bin/sh


#########################
# Build production code #
#########################

cross-env npm run clean
webpack --config webpack.production.config.js --progress --profile --colors


#########################
# Copy config aws file  #
#########################

cp ./config/production/aws/config.js ./dist/config.js

#########################
# Sync files            #
#########################

if [ -e ./dist/config.js ]
then
    aws s3 sync ./dist/ s3://cms-react-entymon
else
    echo "AWS config file does not exist"
fi

