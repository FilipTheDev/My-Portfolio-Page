#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Deploying portfolio website to GitHub Pages...${NC}"

# Run the predeploy and deploy scripts defined in package.json
npm run deploy

if [ $? -ne 0 ]; then
    echo -e "\n${YELLOW}Deployment failed. Check the errors above.${NC}"
    exit 1
fi

echo -e "${GREEN}Deployment successful!${NC}"
echo -e "\n${YELLOW}Your website should now be available at: https://filipthedev.github.io${NC}"
echo -e "\n${YELLOW}Note: It might take a few minutes for the changes to be visible.${NC}"
echo -e "\n${GREEN}Done!${NC}"
