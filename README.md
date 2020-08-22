<p align="center"><a href="https://neutroncreative.com/"><img src="https://firebasestorage.googleapis.com/v0/b/getneutron-2020.appspot.com/o/Sidebar-brandmark-Black.svg?alt=media&token=d22d814a-6096-4f2c-8667-35d0055f7df3" alt="Neutron Creative logo"></a></p>
<p align="center" style="font-style: italic;color:rgba(0,0,0,.65);font-size: 12px !important;">
Neutron Capture, an open-source page capture server built with <a style="color:#5353EC;" href="https://github.com/sindresorhus/pageres">pageres</a>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/license-GPL-green?style=for-the-badge" />
    <img src="https://img.shields.io/badge/Release-v1.0.2-orange?style=for-the-badge" />
    <img src="https://img.shields.io/badge/Open%20Source-forever-9cf?style=for-the-badge" />
</p>

<p align="center">
    <a href="https://twitter.com/neutroncreative">
        <img src="https://img.shields.io/twitter/follow/neutroncreative?style=for-the-badge" />
    </a>
    <a href="https://www.instagram.com/neutroncreative/">
        <img src="https://img.shields.io/badge/Instagram-Follow%20Us-blue?style=for-the-badge" />
    </a>
    <a href="https://www.youtube.com/channel/UCRLlabj3ZUgpx-ArKKHF8TQ">
        <img src="https://img.shields.io/badge/YouTube-Subscribe%20-red?style=for-the-badge" />
    </a>
</p>

<p align="center">
    <a href="https://discord.gg/BUbmgV4">
        <img width="200" height="64" src="https://i.imgur.com/JtoQm1v.png">
    </a>
</p>


## Installation
Installation is a simple process, but requires a few extra steps to work correctly on Linux.

```sh
# install dependencies
npm install

# install chromium packages (Linux only)
apt-get install ca-certificates fonts-liberation gconf-service libappindicator1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils

# install typescript globally
npm install typescript -g

# compile typescript
tsc

# launch server
npm run start
```

## Documentation

### Check These Out:
[The Wiki 📝](https://github.com/Neutron-Creative/capture/wiki) for more information on this project!  
[Our contribution guidelines 🚀](https://github.com/Neutron-Creative/capture/blob/master/.github/CONTRIBUTING.md) to see how you can contribute to this project!  
[Our Discord 💬](https://discord.gg/BUbmgV4) if you just want to chat with us! 😃

### Pageres Fork
We use a fork instead of the original pageres, meaning there are some differences from us and the upstream.   
[Please familiarize yourself with it before contributing.](https://github.com/Neutron-Creative/pageres) The documentation can be found [here.](https://github.com/Neutron-Creative/capture/wiki/Differences-from-Pageres)