#!/bin/bash

# Script to update GitHub repository
# Navigate to your portfolio directory
cd /home/kali/Desktop/vscode_files/portfolio

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/ElormDesmond/My_Portforlio.git
fi

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Major portfolio update: Modern design, improved responsiveness, updated projects and links"

# Push to GitHub
git push -u origin main

# If main branch doesn't exist, try master
if [ $? -ne 0 ]; then
    git push -u origin master
fi

echo "Repository updated successfully!"
