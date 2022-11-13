import Cookie from 'js-cookie'

export const setCookie = (cookiename, payload) => {
  return Cookie.set(cookiename, payload, {
    expires: 1,
    secure: true,
  })
}

export const getCookie = (cookiename) => {
  return Cookie.get(cookiename)
}

export const removeCookie = (cookiename) => {
  return Cookie.remove(cookiename)
}
