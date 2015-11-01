sudo apt-get install git -y
sudo apt-get install npm -y
sudo apt-get install nodejs-legacy -y
ln -s /usr/bin/nodejs /usr/bin/node

git clone https://github.com/sjoshi6/Esper-server-nodejs.git
cd Esper-server-nodejs
npm install
node app.js
