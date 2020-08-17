<p align="center"><a href="https://neutroncreative.com/"><img src="https://firebasestorage.googleapis.com/v0/b/getneutron-2020.appspot.com/o/Sidebar-brandmark-Black.svg?alt=media&token=d22d814a-6096-4f2c-8667-35d0055f7df3" alt="Neutron Creative logo"></a></p>
<p align="center" style="font-style: italic;color:rgba(0,0,0,.65);font-size: 12px !important;">
Neutron Capture, an open-source page capture server built with <a style="color:#5353EC;" href="https://github.com/sindresorhus/pageres">pageres</a>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/license-GPL-green" />
    <img src="https://img.shields.io/badge/coverage-0%25-red" />
    <img src="https://img.shields.io/badge/alpha-0.1.0-orange" />
</p>

## Installation
This documentation is a WIP and is probably not complete in any fashion.

Download this repo, compile the typescript project, and then simply run it like a normal node app.  
(This will be updated in the future to have more complete instructions.)
```sh
# install dependencies
npm install

# install chromium packages
apt-get install ca-certificates fonts-liberation gconf-service libappindicator1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils

# install typescript
npm install typescript -g

# compile typescript
tsc

# launch server
npm run start
```


# REST API Documentation (v1)
## Capture

Renders a website into an image and then sends the client the file stream.

**URL** `/api/v1/capture?url=x&sizes=x1,x2,x3&variousOptions=x`  
**Method** `GET`  

**Params**  
None

**Query Params**  
`url: String` - Default 100. Limits the number of results for performance reasons.  

`sizes: String[]` - List of strings containing the sizes that should be rendered.  
Format: WidthxHeight,Width2xHeight2  
Example: 1920x1080,1280x720

`many options` - There are many options not shown here for brevity. If you want to read more on the various features available, check out <a style="color:#5353EC;" href="https://github.com/sindresorhus/pageres">pageres</a>

**Example**  
GET /api/v1/capture?url=https://google.com&sizes=400x800&crop=true

**Response**
```yaml
'application/octet-stream' file download
```
