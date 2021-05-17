#! /bin/bash
echo "Push docker ready..."
# Set image name
REPOSITORY_ADDRESS="${REPOSITORY_HOST}/${GCLOUD_PROJECT_ID}/${CI_PROJECT_NAMESPACE}/${CI_PROJECT_NAME}-${CI_COMMIT_REF_NAME}"
IMAGE_NAME="${REPOSITORY_ADDRESS}:${CI_PIPELINE_IID}"

# Auth gcloud
gcloud auth configure-docker --quiet

# Build Docker!
docker build --tag $IMAGE_NAME -f Dockerfile.production .

# FOR TESTING
docker images $IMAGE_NAME

# Push docker image
docker push $IMAGE_NAME
