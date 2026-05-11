#!/bin/bash
set -exuo pipefail

TOP_DIR="$(cd $(dirname $0);pwd)"
DOCKER_REPO="harbor.fortihawkeye.com/kubernetes/nginx"
VERSION="1.26"

docker build \
    --build-arg VERSION=${VERSION} \
    -t ${DOCKER_REPO}:${VERSION} \
    -t ${DOCKER_REPO}:latest \
    -f ${TOP_DIR}/Dockerfile \
    ${TOP_DIR}

docker push --all-tags ${DOCKER_REPO}
