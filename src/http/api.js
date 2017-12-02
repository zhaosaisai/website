import { formatApi } from 'util'

// 获取所有的文章
export const GET_ARTICLES = (options) => formatApi('/api/article/select/:index', options)
// 获取指定的文章的内容
export const GET_ARTICLE_BY_ID = (options) => formatApi('api/article/:id', options)