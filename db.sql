-- 数据库
CREATE DATABASE `personal_site` DEFAULT CHARACTER SET utf8;
-- 文章表
CREATE TABLE IF NOT EXISTS `articles` (
    `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` varchar(1024) NOT NULL,
    `description` text NOT NULL,
    `content` longtext NOT NULL,
    `category` int(11) DEFAULT -1,
    `tags` varchar(256) DEFAULT NULL,
    `relation_articles` varchar(256) DEFAULT NULL,
    `deleted` tinyint(4) DEFAULT 0,
    `create_by` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'zhaosaisai',
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_by` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'zhaosaisai',
    `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 分类表
CREATE TABLE IF NOT EXISTS `categoies` (
    `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(1024) NOT NULL,
    `deleted` tinyint(4) DEFAULT 0,
    `create_by` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'zhaosaisai',
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_by` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'zhaosaisai',
    `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 标签表
CREATE TABLE IF NOT EXISTS `tags` (
    `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` varchar(1024) NOT NULL,
    `deleted` tinyint(4) DEFAULT 0,
    `create_by` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'zhaosaisai',
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_by` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'zhaosaisai',
    `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 评论
CREATE TABLE IF NOT EXISTS `comments` (
    `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `ip` varchar(32) NOT NULL,
    `article_id` int(11) NOT NULL,
    `comment` text NOT NULL,
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ip白名单表
CREATE TABLE IF NOT EXISTS `white_ips` (
    `ip` varchar(32) NOT NULL
);