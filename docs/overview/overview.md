---
title: 项目概述
outline: "deep"
---

<div style="text-align: center;">
  <div align="center">
     <img src="/logo.png" width="150" height="150" alt="logo" />
  </div>
  <h1>ttBlinkAdmin <sup style="background-color: #28a745; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.4em; vertical-align: super; margin-left: 5px;">v2.0.0</sup></h1>
  <h3>基于开源开发框架：Fastapiadmin</h3>
  <!-- <p>如果你喜欢这个项目，给个 ⭐️ 支持一下吧！</p> -->
  <p align="center" style="display: flex; justify-content: center; align-items: center; margin-top: 10px;">
    <!-- <a href="https://gitee.com/fastapiadmin/FastapiAdmin"><img src="https://gitee.com/fastapiadmin/FastapiAdmin/badge/star.svg?theme=dark" alt="Gitee Stars"></a>
    <a href="https://github.com/fastapiadmin/FastapiAdmin"><img src="https://img.shields.io/github/stars/fastapiadmin/FastapiAdmin?style=social" alt="GitHub Stars"></a>
    <a href="https://github.com/fastapiadmin/FastApp"><img src="https://img.shields.io/github/stars/fastapiadmin/FastApp?style=social" alt="FastApp Stars"></a>
    <a href="https://github.com/fastapiadmin/FastDocs"><img src="https://img.shields.io/github/stars/fastapiadmin/FastDocs?style=social" alt="FastDocs Stars"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-orange.svg" alt="License"></a> -->
    <img src="https://img.shields.io/badge/Python-≥3.10-blue" alt="Python">
    <img src="https://img.shields.io/badge/NodeJS-≥20.0-blue" alt="NodeJS">
    <img src="https://img.shields.io/badge/MySQL-≥8.0-blue" alt="MySQL">
    <img src="https://img.shields.io/badge/Redis-≥7.0-blue" alt="Redis">
  </p>
</div>

## 📘项目介绍

**ttblinkAdmin** 基于开源后台管理框架 **FastapiAdmin**，在其基础上进行网络运维方面的二次开发。

> **设计初心**: 在框架自带的功能基础上，利用众多开源网络管理库，实现网络运维管理系统的快速开发。将网络运维人员日常工作中常用的功能模块化，并提供一套完整的解决方案，帮助运维人员更高效、更便捷地管理网络设备。




## 🛠️技术栈概览

| 类型     | 技术选型            | 描述 |
|----------|---------------------|---------------------|
| 后端框架 | FastAPI / Uvicorn / Pydantic 2.0 / Alembic | 现代、高性能的异步框架，强制类型约束，数据迁移。 |
| ORM      | SQLAlchemy 2.0      | 强大的 ORM 库。 |
| 定时任务 | APScheduler         | 轻松实现定时任务。 |
| 权限认证 | PyJWT               | 实现 JWT 认证。 |
| 前端框架 | Vue3 / Vite5 / Pinia / TypeScript | 快速开发 Vue3 应用。 |
| 前端工具 | ESLint / Prettier / Stylelint | 代码质量和风格工具。 |
| 移动端框架 | UniApp / Vue3 / TypeScript | 跨平台移动应用开发。 |
| UI 库    | ElementPlus (Web) / Wot Design Uni (移动端) | 企业级 UI 组件库。 |
| CSS 框架 | UnoCSS / SCSS       | 原子化 CSS 和预处理器。 |
| 数据库   | MySQL / PostgreSQL / SQLite | 关系型数据库支持。 |
| 缓存     | Redis               | 强大的缓存数据库。 |
| 文档     | Swagger / Redoc     | 自动生成 API 文档。 |
| 部署     | Docker / Nginx / Docker Compose | 快速部署项目。 |
| 监控     | 内置服务器监控 / 缓存监控 | 系统运行状态监控。 |
| 国际化   | i18n                | 多语言支持。 |
| 数据可视化 | ECharts             | 图表库。 |
| 网络 | scrapli / asyncssh  | 网络设备管理库。 |

## 📌内置模块


| 模块名     | 子模块名 | 描述 |
|----------|---------------------|---------------------|
| 仪表盘    | 工作台、分析页 | 系统概览和数据分析 |
| 系统管理  | 用户、角色、菜单、部门、岗位、字典、配置、公告 | 核心系统管理功能 |
| 监控管理  | 在线用户、服务器监控、缓存监控 | 系统运行状态监控 |
| 任务管理  | 定时任务 | 异步任务调度管理 |
| 日志管理  | 操作日志 | 用户行为审计 |
| 开发工具  | 代码生成、表单构建、接口文档 | 提升开发效率的工具 |
| 交换机管理 | 交换机信息、交换机配置备份、交换机日志管理 |

