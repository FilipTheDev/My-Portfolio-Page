#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Building portfolio website...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "\n${YELLOW}Build failed. Check the errors above.${NC}"
    exit 1
fi

echo -e "${GREEN}Build successful!${NC}"

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo -e "\n${YELLOW}Netlify CLI not found. Installing...${NC}"
    npm install -g netlify-cli
fi

echo -e "\n${YELLOW}Deploying to Netlify...${NC}"
netlify deploy --dir=build

echo -e "\n${YELLOW}Want to deploy to production?${NC}"
read -p "Deploy to production? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    netlify deploy --dir=build --prod
    echo -e "\n${GREEN}Your portfolio has been deployed to production!${NC}"
else
    echo -e "\n${YELLOW}To deploy to production later, run:${NC}"
    echo "netlify deploy --dir=build --prod"
fi

echo -e "\n${GREEN}Done!${NC}"
