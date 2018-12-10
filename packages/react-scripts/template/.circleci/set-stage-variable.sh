#!/bin/bash
set -e

if [[ "$CIRCLE_TAG" == "prod-"* ]]; then
  BRANCHES_CONTAIN_COMMIT=`git branch -r --contains $CIRCLE_SHA1`

  if [[ "$BRANCHES_CONTAIN_COMMIT" == *"master"* ]]; then
    echo 'export RADON_STAGE=production' >> $BASH_ENV
  else
    echo 'export RADON_STAGE=invalid' >> $BASH_ENV
  fi
elif [ "$CIRCLE_BRANCH" == "master" ]; then
  echo 'export RADON_STAGE=staging' >> $BASH_ENV
else
  echo 'export RADON_STAGE=development' >> $BASH_ENV
fi
