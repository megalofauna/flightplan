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
      content: '',
      toastContent: null,
      setContent: function (content, func) {
        func(content);
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
    Navigation: {
      currentIndex: 0,
      itemsTotal: 0,
      navPaneVisible: false,
      displayPane() {
        this.navPaneVisible = true
      },
      hidePane() {
        this.navPaneVisible = false
      },
      logIndex(loopIndex) {
        console.log(this.currentIndex, loopIndex)
      },
      getTotalItems(list) {
        this.itemsTotal = Object.keys(list).length
      },
      displayPrev() {
        this.currentIndex--
      },
      displayNext() {
        this.currentIndex++
      },
      updateIndex(loopIndex) {
        this.currentIndex = loopIndex
        // this.hidePane()
      }
    },

    fpNavigation() {
      return {
        moduleIndex: 0,
        moduleTotal: 0,
        navPaneVisible: false,
        displayPane: function() {
          console.log('display')
          this.navPaneVisible = true
        },
        hidePane: function() {
          console.log('hide')
          this.navPaneVisible = false
        },
        logIndex: function(loopIndex) {
          console.log(this.moduleIndex, loopIndex)
        },
        getTotalItems: function(list) {
          this.moduleTotal = Object.keys(list).length
        },
        displayPrev: function() {
          this.moduleIndex--
        },
        displayNext: function() {
          this.moduleIndex++
        },
        updateIndex: function(loopIndex) {
          this.moduleIndex = loopIndex
          this.hidePane()
        }
      }
    }

  }
}

// function fpNavigation() {
//   return {
//     moduleIndex: 0,
//     moduleTotal: 0,
//     navPaneVisible: false,
//     displayPane: function() {
//       console.log('display')
//       this.navPaneVisible = true
//     },
//     hidePane: function() {
//       this.navPaneVisible = false
//     },
//     logIndex: function(loopIndex) {
//       console.log(this.moduleIndex, loopIndex)
//     },
//     getTotalItems: function(list) {
//       this.moduleTotal = Object.keys(list).length
//     },
//     displayPrev: function() {
//       this.moduleIndex--
//     },
//     displayNext: function() {
//       this.moduleIndex++
//     },
//     updateIndex: function(loopIndex) {
//       this.moduleIndex = loopIndex
//       this.hidePane()
//     }
//   }
// }



