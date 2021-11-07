# Flight Plan
Your TailwindCSS config visualized.

Starter Template for **N**etlify CMS, **E**leventy, **A**lpine JS & **T**ailwind CSS

## Live Demo

[https://neat-starter.netlify.app/](https://neat-starter.netlify.app/)

### Technologies used:

- [Netlify CMS](https://www.netlifycms.org/)
- [Eleventy](https://www.11ty.dev/)
- [Alpine.js](https://github.com/alpinejs/alpine)
- [Tailwind CSS](https://tailwindcss.com/)

| ![image](https://user-images.githubusercontent.com/1884712/93762662-a62e4700-fc2d-11ea-9b2c-fda9f503402b.png) |
| ------------------------------------------------------------------------------------------------------------- |


<a href="https://app.netlify.com/start/deploy?repository=https://github.com/surjithctly/neat-starter&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a>

## Getting Started

Detailed instructions are available in my blog. [Check it out](https://blog.surjithctly.in/neat-stack-create-a-static-website-with-netlify-cms-eleventy-alpinejs-and-tailwindcss)

### 1\. Clone this Repository

```
git clone https://github.com/surjithctly/neat-starter.git
```

### 2\. Navigate to the directory

```
cd neat-starter
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

## Roadmap

###  Phase 1 (current)
Intended as a proof-of-concept Tailwind configuration visualizer, Flight Plan was originally forked from @suri NEAT Starter. Like that project, Flight Plan currently uses Eleventy (with Nunjucks) and AlpineJS to do most of the heavy lifting. Both of these projects are excellent. 

Using both in conjunction, however, has made for a bit of a messy implementation. Nunjucks (a templating language _for_ JavaScript) is not, itself, JavaScript. Getting Nunjucks' tokens and Alpine's properties to play nicely together is somewhat challenging. Alpine, as awesome as it is, isn't made for templating. Nunjucks, as awesome as _it_ is, isn't made for composing dynamic behavior. So, they complement one another—but it's a rocky marriage. 

A future rewrite is discussed in [Phase 2](#phase-2).



### Phase 2
* Rewrite in Vue or Svelte(+Sapper)
* 


### Phase 3

## Author

Chris Salmon  ( [@windowswebdev](https://google.com/) )
