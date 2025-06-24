# 🐳 Node.js EC2 Docker App Project - Step-by-Step Guide

This project guides you through deploying a Node.js + Express web app to an EC2 instance — both **with and without Docker**.

---

## 📁 Project Structure

```
nodejs-ec2-docker-app-project/
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/
│       └── your-image.jpg   ← (Use the image you downloaded)
├── index.js
├── package.json
└── Dockerfile
```

---

# 🐧 Part 1: Deploy to EC2 Without Dockerfile

## ✅ Step 1: Launch & Prepare EC2

1. Launch an EC2 instance (Amazon Linux 2 or Ubuntu).
2. SSH into the server:

   ```bash
   ssh -i your-key.pem ec2-user@<EC2_PUBLIC_IP>
   sudo -i
   ```

## ✅ Step 2: Install Node.js

```bash
sudo dnf install -y nodejs     # Amazon Linux 2
node -v
npm -v
```

## ✅ Step 3: Install Git and Clone Your App

```bash
sudo yum install git -y

git --version

git clone https://github.com/arumullayaswanth/nodejs-ec2-docker-app-project.git
ls
cd nodejs-ec2-docker-app-project
ls
npm install
npm start
```

---

## ✅ Step 4: Run the App in Background with PM2

```bash
#Install PM2 Globally
npm install -g pm2
#Start Your App with PM2
pm2 start index.js --name whatsapp-app
#View Running Apps
pm2 list
#Save PM2 Process List (So It Restarts on Reboot)
pm2 save
#Set PM2 to Launch on System Startup / Run this command (auto-generates startup script):
pm2 startup
```

To see logs:

```bash
pm2 logs whatsapp-app
```

To stop or restart:

```bash
pm2 stop whatsapp-app
pm2 restart whatsapp-app
```

### 🔍 Test in Browser

```
http://<EC2_PUBLIC_IP>:3000/status
```

Should return:

```json
{"status":"I'm alive!"}
```

---

# 🐳 Part 2: Deploy to EC2 With Docker

## 🧭 Step 1: Launch & Prepare EC2

```bash
ssh -i your-key.pem ec2-user@<EC2_PUBLIC_IP>
```

Install required tools:

```bash
sudo yum install git docker -y
sudo systemctl start docker
sudo usermod -aG docker ec2-user
```

Optionally install Docker Compose:

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

🚪 Exit and Re-login so Docker permissions apply:

```bash
[root@ip-172-31-17-65 ~]# exit
ssh -i your-key.pem ec2-user@<EC2_PUBLIC_IP>
```

---

## 📂 Step 2: Clone the Code & Review Dockerfile

```bash
git clone https://github.com/arumullayaswanth/nodejs-ec2-docker-app-project.git
ls
cd nodejs-ec2-docker-app-project
ls
```

### Dockerfile Example

```dockerfile
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
```

---

## 🐳 Step 3: Build & Run Docker Container

### Build the Image

```bash
docker ps
docker build -t my-node-app .
```

### Run the Container

```bash
docker run -d -p 3000:3000 --name node-app my-node-app
```

Flags:

* `-d`: run in background
* `-p`: map host port 3000 to container port 3000

### Test in Browser

```
http://<EC2_PUBLIC_IP>:3000/status
```

Should return:

```json
{"status":"I'm alive!"}
```

---


🧪 Test It

curl http://localhost:3000/status


Then check logs:


docker logs node-app

You should now see:


✅ /status endpoint was called


----

## 🔄 (Optional) Push Image to Docker Hub

```bash
#Log in:
docker login
#Tag the image:
docker tag my-node-app yourusername/my-node-app:latest
#Push it:
docker push yourusername/my-node-app:latest
```

Your image is now hosted on Docker Hub for reuse!
