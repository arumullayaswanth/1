whatsapp-node-app/
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/
│       └── your-image.jpg   ← (Use the image you just downloaded)
├── index.js
├── package.json
└── Dockerfile



# Node Hello World

Simple node.js app that servers "A Monk in Cloud"

Great for testing simple deployments on Cloud

## Step 1: Install NodeJS 


sudo dnf install -y nodejs

```bash
node -v
npm -v
```

## Step 2: Install Git and clone repository from GitHub
To install git, run below commands in the terminal window:

```bash

yum install git -y
```

Just to verify if system has git installed or not, please run below command in terminal:
```bash
git — version
```

This command will print the git version in the terminal.

Run below command to clone the code repository from Github:

```bash
git clone https://github.com/CloudTechDevOps/sample_nodejs_on_Ec2.git
```

Get inside the directory and Install Packages

```bash
cd nodejs-on-ec2
npm install
```

Start the application
To start the application, run the below command in the terminal:

```bash
npm start
```

or if we want to run application into process manager pm2
```bash
npm install -g pm2
pm2 start index.js --name node-app



PM2 (Process Manager 2) is a powerful tool for managing Node.js applications in production environments. It ensures your app runs continuously, restarts on failure, and provides easy monitoring.

