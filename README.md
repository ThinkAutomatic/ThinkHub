# ThinkHub
This serves as a local area network proxy to the Think Automatic machine learning platform for lightweight IoT devices that do not have direct ssl enabled connectivity such as Particle devices using the <a href="https://github.com/ThinkAutomatic/ThinkParticle" target="_blank">ThinkParticle</a> library.

## Installation 
Install and run the ThinkHub proxy via npm and Node.js on any machine on the same LAN as your lightweight IoT device(s).
```
cd ~
mkdir ThinkHub
cd ThinkHub
npm install ThinkHub
```
Then to run it.
```
node .
```
This module uses the <a href="https://github.com/ThinkAutomatic/thinkdevice" target="_blank">thinkdevice</a> library module which has instructions for associating devices such as the ThinkHub to a Think Automatic account which needs to be done before other devices can communicate through it.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
