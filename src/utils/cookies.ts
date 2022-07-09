/*
 * @Description: cookies封装
 * @Author: ZY
 * @Date: 2020-12-17 16:06:33
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-17 17:23:14
 */
import Keys from '@/const/key'
import { User } from '@/models/admin/user'
import Cookies from 'js-cookie'


export const getToken = () => localStorage.getItem(Keys.tokenKey)
export const setToken = (token: string) => localStorage.setItem(Keys.tokenKey, token)
export const removeToken = () => localStorage.removeItem(Keys.tokenKey)

export const getUser = () => JSON.parse(localStorage.getItem(Keys.userKey)) as User
export const setUser = (user: User) => localStorage.setItem(Keys.userKey, JSON.stringify(user))
export const removeUser = () => localStorage.removeItem(Keys.userKey)
