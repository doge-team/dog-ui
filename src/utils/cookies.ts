/*
 * @Description: cookies封装
 * @Author: ZY
 * @Date: 2020-12-17 16:06:33
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-17 17:23:14
 */
import Keys from '@/const/key'
import Cookies from 'js-cookie'


export const getToken = () => Cookies.get(Keys.tokenKey)
export const setToken = (token: string) => Cookies.set(Keys.tokenKey, token)
export const removeToken = () => Cookies.remove(Keys.tokenKey)
