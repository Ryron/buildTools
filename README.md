# gulp项目中的使用
项目适用于简单静态页面，例如广告文案宣传页等。如果是大型项目，请使用webpack。

# 目录
[TOC]

### 1.文件目录

```
gulp/
│   ├── dist            "输出文件"
│   │   ├── css              
│   │   ├── images
│   │   └── javascript    
│   │
│   ├── gulp            
│   │   ├── tasks       "gulp 任务"
│   │   │   ├── default       "默认任务文件夹"
│   │   │   ├── deploy        "部署任务文件夹"
│   │   │   ├── default.js    "默认任务启动js"
│   │   │   ├── deploy.js     "部署任务启动js"
│   │   │   └── sprite.js     "雪碧图js"
│   │   └── config.js   "gulp任务配置"
│   │
│   ├── node_modules    "模块"
│   │
│   ├── src             "需编译的文件"
│   │   ├── images
│   │   ├── javascript
│   │   └── css
│   ├── .gitignore
│   ├── gulpfile.js
│   ├── package.json
│   ├── README.md

```
### 2.gulp主要任务简介
- watch     监听需要编译文件
- dev   	开发，与watch一起用
- deploy    部署前调用，主要是压缩文件
- sprite    雪碧图

### 3.代码
 [链接](https://github.com/Ryron/gulp)
