# Flight Plan (v 0.1.0)
Your TailwindCSS config visualized.

## Live Demo

[https://flightplan.dev/](https://flightplan.dev/)

### Technologies used:

- [Netlify CMS](https://www.netlifycms.org/)
- [Eleventy](https://www.11ty.dev/)
- [Alpine.js](https://github.com/alpinejs/alpine)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

Detailed instructions are available in my blog. [Check it out](https://blog.surjithctly.in/neat-stack-create-a-static-website-with-netlify-cms-eleventy-alpinejs-and-tailwindcss)

### 1\. Clone this Repository

```
git clone https://github.com/megalofauna/flightplan.git
```

### 2\. Navigate to the directory

```
cd flightplan
```

### 3\. Install dependencies

```
npm install
```

### 4\. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 5\. Run Eleventy

```
npm run start
```

## Origin

Intended as a proof-of-concept way to visualize a customized Tailwind config file, Flight Plan was originally forked from [@surjithctly](https://twitter.com/surjithctly)'s NEAT Starter. Like that project, Flight Plan currently uses [Eleventy](https://www.11ty.dev/) (with [Nunjucks](https://mozilla.github.io/nunjucks/templating.html)) and [AlpineJS](https://alpinejs.dev/) to do most of the heavy lifting. 

Each of these projects is excellent. 

Using Nunjucks in conjunction with Alpine, however, has made for a messy implementation. Nunjucks (a templating language _for_ JavaScript) is not, itself, JavaScript. Getting its tokens and Alpine's properties to play nicely together is challenging. 

But both are necessary. Alpine, as awesome as it is, isn't made for templating. And Nunjucks, as awesome as _it_ is, isn't made for composing reactive behavior in the browser. So, they complement one another—but in a rocky marriage sort of way. 

With the proof of concept effectively complete (well, completed _enough_), I won't be putting any additional effort into the NEAT version of flight plan. There were too many compromises and too much general messiness to continue down this path. 

###  Phase 1 (near-term)
* Archive NEAT flight plan

### Phase 2 (mid-term)

The mid-term vision for flight plan is to provide developers and companies an easy, intuitive tool to manage style guides that are powered by Tailwind.

* Rewrite core functionality in [Vue](https://vuejs.org/) (with [Vite](https://vitejs.dev/)
* Incorporate headless CMS (preferably git-backed) for general site authoring and especially for Tailwind config customizing/updating.
  * [Forestry](https://forestry.io/)?
  * [NetlifyCMS](https://www.netlifycms.org/)?
  * [Strapi](https://strapi.io/integrations/vuejs-cms)?
  * [Cosmic](https://docs.cosmicjs.com/)?

### Phase 3
* Refine module visualizations
* build CLI for project scaffolding

## Author

Chris Salmon  ( [@windowswebdev](https://google.com/) )
