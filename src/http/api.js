import { formatApi } from 'util'

export const GET_ARTICLES = (options) => formatApi('/api/article/select/:index', options)