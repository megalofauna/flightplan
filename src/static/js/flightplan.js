function flightplan(config) {
  return {

    ToastNotification: {
      message: '',
      isVisible: false,
      icon: null,
      displayContainer: function (content) {
        this.content = content || ''
        this.isVisible = true
        setTimeout(() => {
          this.hideContainer()
        }, 1500)
      },
      hideContainer: function () {
        this.isVisible = false
      }

    },

    Clipboard: {
      toastContent: '',
      contentTypes: {
        "color": "copied to clipboard"
      },
      toastVisible: false,
      displayToast: function () {
        this.toastVisible = true
      },
      hideToast: function () {
        this.toastVisible = false
      },
      setContent: function (content, copy, contentType) {
        console.log(contentType)
        copy(content)
        this.toastContent = `${content} ${this.contentTypes[contentType]}`
        this.displayToast()
        setTimeout(() => {
          this.hideToast()
        }, 1500)
      }
    },

    ThemeToggle: {
      isDark: false,
      setDark() {
        this.isDark = true
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      },
      setLight() {
        this.isDark = false
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      },
      setCurrent() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          this.setDark()
        } else {
          this.setLight()
        }
      }
    },

    NavPane: {
      moduleIndex: 0,
      moduleTotal: 0,
      moduleKeys: null,
      navPaneVisible: false,
      displayPane: function () {
        this.navPaneVisible = true
      },
      hidePane() {
        this.navPaneVisible = false
      },
      logIndex: function (loopIndex) {
        console.log(this.moduleIndex, loopIndex)
      },
      getItems: function (list) {
        this.moduleKeys = Object.keys(list)
      },
      getTotal: function (list) {
        this.moduleTotal = Object.keys(list).length
      },
      displayPrev: function () {
        this.moduleIndex--
      },
      displayNext: function () {
        this.moduleIndex++
      },
      updateIndex: function (loopIndex) {
        this.moduleIndex = loopIndex
        this.hidePane()
        // this.prettifyUrl()
      },
      // prettifyUrl() {
      // let uglyUrl = window.location.href
      // let prettyUrl = ''
      // console.log(uglyUrl)
      // if (uglyUrl.indexOf('#')) {
      //   prettyUrl = uglyUrl.replace('#', '')
      // }
      // console.log(prettyUrl)
      // history.pushState("", document.title, prettyUrl);
      // },
      // findChildren() {
      //   const moduleArticleHeadings = [
      //     ...document.querySelectorAll('section article h2, section article h3')
      //   ];
      //   const navHeadings = [
      //     ...document.querySelectorAll('aside nav a')
      //   ];

      //   if (moduleArticleHeadings.length) {
      //     // Loop each heading and add a little anchor and an ID to each one
      //     moduleArticleHeadings.forEach(heading => {
      //       const headingSlug = heading.textContent.toLowerCase().replace(' ', '-');
      //       const anchor = document.createElement('a');

      //       anchor.setAttribute('href', `#heading-${headingSlug}`);
      //       anchor.classList.add('heading-permalink', 'relative');
      //       heading.setAttribute('id', `heading-${headingSlug}`);
      //       heading.appendChild(anchor);
      //     });
      //   }
      // }
    },

    Animation: {
      selectedDuration: 75,
      init: function () {
        console.log('inited');
      },
      playAnimation: function () {
        this.isPlaying = true
      },
      // toggleLoopAnimation: function (ref) {
      //   ref.style.
      // },
      stopAnimation: function () {

      },
      setDuration: function (duration) {
        this.selectedDuration = duration
      },
      stopAllAnimations: function () {

      }
    },
  }
}

// function buildSubNavigation() {
//   const navigationBlocks = [
//     ...document.querySelectorAll('aside nav li')
//   ]
//   const sections = [
//     ...document.querySelectorAll('section') // 👈
//   ]
//   const sectionHeadings = [
//     ...document.querySelectorAll('h2', sections) // 👈
//   ]
//   if (sectionHeadings.length) {
//     sectionHeadings.map((heading) => {
//       const slug = `#${heading.textContent.toLowerCase().replace(/\s+/g, '-')}`
//       const anchor = document.createElement('a')
//       anchor.setAttribute('href', slug)
//       anchor.innerText = heading.textContent
//       anchor.classList.add('heading-permalink', 'relative');
//       heading.setAttribute('id', `${headingSlug}`);

//       navigationBlocks.forEach((block, index) => {
//         console.log(block.dataset.sectionId + " : " + )
        
//         if (block.dataset.sectionId === sections[index].id) {
//           block.append(anchor)
//         }
//       })

//       console.log(anchor)
//     })
//   }
// }

// buildSubNavigation();