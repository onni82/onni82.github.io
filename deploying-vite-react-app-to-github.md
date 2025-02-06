# 1. Install the ```gh-pages``` package (```ctrl+~``` to open the terminal in VS Code)

npm install gh-pages --save-dev

# 2. In the ```package.json``` file add these lines before ```"build": "vite build"```,

"predeploy": "npm run build",
"deploy": "gh-pages -d dist",

# 3. In the ```vite.config.js``` file add this line before ```plugins: [react()]```,

base: "/YOUR_REPOSITORY_NAME",

Change YOUR_REPOSITORY_NAME to the name of your GitHub repository.

# 4. In terminal type

npm run deploy

# Source
[Deploying Vite / React App to GitHub Pages ](https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf)