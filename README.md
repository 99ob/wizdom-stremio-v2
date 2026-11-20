# wizdom-stremio-v2

An unofficial Stremio addon for Hebrew subtitles from wizdom.xyz. Developed by Maor Development.

## Installation

### Online

Currently you can get this addon in:

https://4b139a4b7f94-wizdom-stremio-v2.baby-beamup.club/

I've published this addon and you can now find it in the addon catalog!

### Local

Download and install Node.js on your computer, then install and launch the addon from Powershell:

```
git clone https://github.com/maormagori/wizdom-stremio-v2.git
cd wizdom-stremio-v2
npm install
npm start
```

Add the addon to Stremio from browser:
stremio://127.0.0.1:7001/manifest.json

or from the addon search menu:

```
http://127.0.0.1:7001/manifest.json
```

## TODO

Features I would like to implement and stuff needed to be done:

- [x] Documentation
- [x] Cache system (No need since we're not buffering the srts anymore)
- [x] Maybe a landing page.
- [x] Add Levenshtein sorting.
- [x] Add CI/CD

## contributions

These repos really helped me develop this addon:

* [Addic7ed Stremio Addon](https://github.com/phoborsh/addic7ed-stremio-addon/blob/master/README.md)
* [subtitles-grouping](https://github.com/Ivshti/node-subtitles-grouping)

## Private token protection (Render)

Set the **ADDON_TOKEN** environment variable in your Render service before deploying.
Use a random secret of at least 32 characters. Never commit it to GitHub.
The addon intentionally fails startup when ADDON_TOKEN is missing.

Install in Stremio using:

```
https://wizdom-stremio-v2.onrender.com/YOUR_TOKEN/manifest.json
```

Or open the landing page, click Install and enter your token.
Both the subtitles JSON route and the actual .srt downloads require the same token.
The old public manifest/subtitle/SRT routes are no longer available.
Note: tokens in URLs may appear in access logs, browser history or shared links.
Keep the install URL private and rotate ADDON_TOKEN if leaked.
