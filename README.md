# Paf frontend exercise

## Objective

Translate the provided [design mocks](./design/) into a working solution with HTML, CSS and JavaScript.  
**Note:** You are allowed to make minor adjustments to the layout if needed.

## Requirements

1. Use HTML5 to produce a semantic information structure.
1. Use CSS to produce the layout with a mobile first approach  
   _Should support screen resolutions from atleast 320px up to atleast 1920px_
1. Use Javascript to fetch JSON-data from the following url: ```/api/games/lists.json```.
1. Use Javascript to generate the DOM based on the fetched JSON-data.
1. Use native Web Components (but only where it's appropriate).
1. Add a search/filter component based upon the JSON-data.
   - It should have knowledge of previous searches  
     and be persistent upon page reload
   - It should filter what's rendered from the JSON-data.  

**Author your solution in the following places:**  
- `index.html`
- `src/styles.css`
- `src/scripts.js`

## Getting started

There are two avaliable development environments
- [Localhost](#localhost)
- [Code Sandbox](#codesandbox)

### Localhost

This setup provides a development server to be used in your machine.  
Prerequisites are **git** and **node.js** _(LTS)_
1. Install dependencies:
    ```bash
    npm ci
    ```
1. Start server:
    ```bash
    npm start
    ```
1. When done, package your solution with the following command:
    ```bash
    npm pack
    ```
1. And then send us your ```paf-frontend-exercise-1.0.0.tgz```.

### Sandbox 
This is the web based setup that only requires a modern browser to get you started.

1. [Open a new Codesandbox](https://codesandbox.io/s/github/AndreasLindbergPAF/paf-frontend-exercise/tree/master/?fontsize=14&hidenavigation=1&theme=dark).
1. When done, send us your Codesandbox-link.
