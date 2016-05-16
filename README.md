# ThinkHub
Serves as a local area nextwork communication and security proxy for simple IoT devices such as Particle modules

## Getting Started

This serves as a local area network proxy for lightweight IoT devices that do not have direct ssl enabled connectivity to the Internet such as Particle devices using the <a href="https://github.com/ThinkAutomatic/ThinkParticle" target="_blank">ThinkParticle library</a>. 
```
npm install thinkhub
```
Then run it.
```
node .
```
This module uses the <a href="https://github.com/ThinkAutomatic/thinkdevice" target="_blank">thinkdevice library</a> module which has instructions for associating devices such as the ThinkHub to a Think Automatic account which needs to be done before other devices can communicate through it.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
