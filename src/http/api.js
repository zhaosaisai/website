import { formatApi } from 'util'

// 获取所有的文章
export const GET_ARTICLES = (options) => formatApi('/api/article/select/:index', options)
// 获取指定的文章的内容
export const GET_ARTICLE_BY_ID = (options) => formatApi('api/article/:id', options)
// 获取文章归档
export const GET_ARTICLE_ARCHIVE = (options) => formatApi('/api/article/year/:year', options)
// 获取所有的标签
export const GET_ALL_TAGS = '/api/tags'
// 获取一个标签下面所有的文章
export const GET_TAG_ARTICLES = (options) => formatApi('/api/tag/:id', options)