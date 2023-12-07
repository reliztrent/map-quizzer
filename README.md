# Maps Quizzer

## Installation

1. Download this repository as a .zip file cy clicking the green Code button > Download ZIP.
1. Open the zip file, to unzip it into a folder.
2. In Chrome, go to chrome://extensions (in the search/URL bar). 
3. Toggle on developer mode.
4. Click on "Load unpacked extension".
5. Open the unzipped folder. 
5. Turn off developer mode.
6. All done! Open a new tab to start the Map Quizzer.

## Summary 

This repo contains the files for a Chrome extension that opens a map quiz every time a blank tab is opened in Chrome. The quiz pulls a random map from the online collections of the Library of Congress and asks you to guess which year the map was published. Three options are given: the correct publication year and two other years pulled randomly from the same corpus of maps. 

The extension is built using [Vue.js](https://github.com/vuejs/vue) (a JavaScript framework) and [Tify](https://www.sub.uni-goettingen.de/digitale-bibliothek/digitale-werkzeuge/dokumentbetrachter-tify/) (a IIIF image viewer and zoomer, from the Göttingen State and University Library).  

The most recent published version of the extension is available from the [Chrome Web Store](https://chrome.google.com/webstore/detail/map-quizzer/cklfiagojkibihpbpcmhjfolmbebnpmk). The files in this repo can also be downloade to your local computer and tested in Chrome:

1. In Chrome, go to **chrome://extensions**.
2. Enable Developer Mode by clicking the toggle next to **Developer mode**.
3. Click the Load unpacked button and select the directory that holds the extension filles.

## Data
Map Quizzer selects from a pre-processed json-formatted list of maps online from Library of Congress at [loc.gov/maps](https://www.loc.gov/maps). The data was pulled using the loc.gov API, and maps were bias sampled with the following filters:

1. Maps must be published to loc.gov via the Library of Congress catalog. This excludes maps from the Sanborn set. 
2. The publication year must be known (no question marks in the date field)
3. Approximately 3/5 of English-only language maps were filtered out, to increase hetergeneity of data.
4. Common publication years were thinned. Years with 100+ maps often represent homogenous map series or  US Civil War maps.

The IIIF links pulled from the API were also altered to increase or decrease the image size to better fit the extension layout. For example, this IIIF url provided by the API would return an image 1052px wide, which is much wider than the extension needs:

- https://tile.loc.gov/image-services/iiif/service:gmd:gmd403:g4034:g4034t:pm000150/full/pct:12.5/0/default.jpg#h=652&w=1052

Whereas this slightly altered URL returns the same image at only 673px wide:

- https://tile.loc.gov/image-services/iiif/service:gmd:gmd403:g4034:g4034t:pm000150/full/pct:8/0/default.jpg

Using Vue.js, the data is loaded directly from the background.js file. 
