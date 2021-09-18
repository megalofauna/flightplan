function flightplan(config) {
  return {
    NavigationPanelisVisible: false,
    displayPane: function () {
      this.NavigationPanelisVisible = true
    },
    hidePane: function () {
      this.NavigationPanelisVisible = false
    },

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

    // Module: {
    //   moduleActive: false,
    //   moduleList: document.querySelectorAll('.module'),
    //   displayModule(moduleId, el) {
    //     el.classList.add('menu-item-active')
    //     this.moduleList.forEach((module) => {
    //       console.log(module.id)
    //       module.classList.add('inactive');
    //       module.classList.remove('active');
    //     })
    //     document.getElementById(moduleId).classList.remove('inactive');
    //     document.getElementById(moduleId).classList.add('active');
    //   },

    Module: {

      currentIndex: 0,
      itemsTotal: 0,
      //prevIndex: this.currentIndex - 1,
      //nextIndex: this.currentIndex + 1,
      //prev: true, 
      //next: true, 
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
        this.NavigationPanelisVisible = false

      }
    }
  }
}


