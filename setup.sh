#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Portfolio Setup Helper${NC}"
echo "This script will help you customize your portfolio data."
echo

# Get user info
echo -e "${GREEN}--- Personal Information ---${NC}"
read -p "Your Name: " name
read -p "Your Job Title: " title
read -p "Short Description: " description
read -p "Email: " email
read -p "Location: " location
read -p "GitHub URL: " github
read -p "LinkedIn URL: " linkedin
read -p "Twitter URL (optional): " twitter

# Update the data file
data_file="./src/data/portfolioData.ts"

echo -e "\n${YELLOW}Updating portfolio data...${NC}"

# Check if file exists
if [ ! -f "$data_file" ]; then
  echo "Error: Data file not found at $data_file"
  exit 1
fi

# Create a backup
cp "$data_file" "${data_file}.bak"

# Update userInfo section
sed -i "s/name: \".*\",/name: \"$name\",/" "$data_file"
sed -i "s/title: \".*\",/title: \"$title\",/" "$data_file"
sed -i "s/description: \".*\",/description: \"$description\",/" "$data_file"
sed -i "s/email: \".*\",/email: \"$email\",/" "$data_file"
sed -i "s/location: \".*\",/location: \"$location\",/" "$data_file"
sed -i "s|githubUrl: \".*\"|githubUrl: \"$github\"|" "$data_file"
sed -i "s|linkedinUrl: \".*\"|linkedinUrl: \"$linkedin\"|" "$data_file"
sed -i "s|twitterUrl: \".*\"|twitterUrl: \"$twitter\"|" "$data_file"

echo -e "\n${GREEN}Setup completed successfully!${NC}"
echo -e "Your personal information has been updated in $data_file"
echo -e "A backup was created at ${data_file}.bak"
echo 
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Update your project details in $data_file"
echo "2. Add your own images to the public/images directory"
echo "3. Run 'npm start' to preview your portfolio"
echo "4. Run ./deploy.sh to deploy your portfolio when ready"
echo
