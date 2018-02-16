let VueFBLogin = {}

VueFBLogin.install = function install (Vue, options = {}) {
  const version = options.version || 'v2.11'
  const lang = options.lang || 'en_US'
  const appId = options.appId || '566607360358745'
  const autoLogAppEvents = options.autoLogAppEvents || true
  const xfbml = options.xbfml || true

  let FB

  const statusValues = [
    'connected', // connected :)
    'not_authorized', // not autorized on the app
    'unknow' // not connected
  ]

  function loadFBSDK () {
    const d = document
    const s = 'script'
    const id = 'facebook-jssdk'

    let js
    let fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    js = d.createElement(s)
    js.id = id
    js.src = `https://connect.facebook.net/${lang}/sdk.js`
    fjs.parentNode.insertBefore(js, fjs)
  }

  function init () {
    FB.init({
      appId,
      autoLogAppEvents,
      xfbml,
      version
    })
  }

  function getLoginStatus () {
    FB.getLoginStatus(response => {
      onChangeStatus(response)
    })
  }

  function onChangeStatus (response = {}) {
    // response = {
    //   status: 'connected', // see `statusValues`
    //   authResponse: {
    //     accessToken: '...',
    //     expiresIn:'...',
    //     signedRequest:'...',
    //     userID:'...'
    //   }
    // }
    console.log(statusValues.indexOf(response.status), 'status updated')
  }

  function login () {}

  Vue.prototype.$fb = {
    instance: FB, // instance of FB sdk
    init,
    getStatus: getLoginStatus,
    onChangeStatus // TODO
  }

  Vue.prototype.$fb_load_sdk = loadFBSDK
  Vue.prototype.$fb_Login = login
}

export default VueFBLogin
