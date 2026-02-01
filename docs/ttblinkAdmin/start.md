---
outline: "deep"
title: 快速开始
---
# 快速开始


## 👷安装和使用

### 版本说明

| 类型     | 技术栈     | 版本       |
|----------|------------|------------|
| 后端     | Python         | >=3.10       |
| 后端     | FastAPI        | 0.109+      |
| 前端     | Node.js        | >= 20.0（推荐使用最新版）|
| 前端     | pnpm           | >= 9.0      |
| 前端     | Vue3           | 3.5.22+     |
| 数据库   | MySQL           | 8.0+ （推荐使用最新版）|
| 中间件   | Redis           | 7.0+ （推荐使用最新版）|

### 环境准备

#### 1. 安装 Python

```sh
# macOS
brew install python@3.10

# Ubuntu/Debian
sudo apt update
sudo apt install python3.10 python3.10-venv python3.10-dev

# CentOS/RHEL
sudo dnf install python3.10 python3.10-venv python3.10-devel
```

#### 2. 安装 Node.js

```sh
# 使用 nvm 安装（推荐）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
nvm use 20

# 或使用包管理器
# macOS
brew install node@20

# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# CentOS/RHEL
sudo dnf install nodejs npm

# 安装 pnpm
npm install -g pnpm
```

#### 3. 安装数据库和缓存

```sh
# 安装 MySQL
# macOS
brew install mysql
brew services start mysql

# Ubuntu/Debian
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql

# 安装 Redis
# macOS
brew install redis
brew services start redis

# Ubuntu/Debian
sudo apt install redis-server
sudo systemctl start redis
```

### 获取代码

```sh
# 克隆代码到本地
# FastapiAdmin 主工程
git clone https://github.com/fastapiadmin/FastapiAdmin.git
# 或使用 Gitee
git clone https://gitee.com/fastapiadmin/FastapiAdmin.git

# FastApp 移动端
git clone https://github.com/fastapiadmin/FastApp.git
# 或使用 Gitee
git clone https://gitee.com/fastapiadmin/FastApp.git

# FastDocs 官网文档
git clone https://github.com/fastapiadmin/FastDocs.git
# 或使用 Gitee
git clone https://gitee.com/fastapiadmin/FastDocs.git
```

### 本地后端启动（FastapiAdmin 主工程）

#### 1. 配置环境变量

```sh
# 进入后端工程目录
cd FastapiAdmin/backend

# 复制环境配置文件
cp env/.env.dev.example env/.env.dev

# 编辑环境配置文件（根据实际情况修改）
# 主要配置项说明：
# - DATABASE_URL: 数据库连接地址
# - REDIS_URL: Redis连接地址
# - SECRET_KEY: JWT签名密钥
# - ACCESS_TOKEN_EXPIRE_MINUTES: 访问令牌过期时间
# - REFRESH_TOKEN_EXPIRE_DAYS: 刷新令牌过期时间
# - API_PREFIX: API前缀
# - CORS_ORIGINS: 跨域来源
```

#### 2. 安装依赖

```sh
# 使用 uv 管理项目（推荐）
uv add -r requirements.txt

# 或使用传统 pip 方式
# 创建虚拟环境（可选但推荐）
python3 -m venv venv

# 激活虚拟环境
# macOS/Linux
source venv/bin/activate
# Windows
venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt
```

#### 3. 数据库初始化

```sh
# 生成迁移文件
python main.py revision  --env=dev

# 应用迁移
python main.py upgrade --env=dev

# 初始化系统数据
python main.py init
```

#### 4. 启动后端服务

```sh
# 使用 uv 启动
uv run main.py run

# 或使用传统方式
# 开发环境启动
python main.py run --env=dev

# 或使用默认环境（dev）
python main.py run

# 生产环境启动
python main.py run --env=prod
```

### 本地前端启动（FastapiAdmin 主工程）

#### 1. 配置环境变量

```sh
# 进入前端工程目录
cd FastapiAdmin/frontend

# 复制环境配置文件
cp .env.development.example .env.development

# 编辑环境配置文件（根据实际情况修改）
# 主要配置项说明：
# - VITE_API_BASE_URL: 后端API基础地址
# - VITE_APP_BASE_API: API前缀
# - VITE_APP_TITLE: 应用标题
# - VITE_APP_VERSION: 应用版本
```

#### 2. 安装依赖

```sh
# 安装前端依赖
pnpm install
```

#### 3. 启动前端服务

```sh
# 开发环境启动
pnpm run dev

# 构建前端, 生成 `dist` 目录
pnpm run build
```



---

### 本地访问地址

- FastapiAdmin 前端地址: <http://127.0.0.1:5173>
- FastAPI 接口文档: <http://127.0.0.1:8001/api/v1/docs>

### 默认账号密码

- 管理员账号：`admin` 密码：`123456`
- 演示账号：`demo` 密码：`123456`

## 🐳 Docker 部署

### 1. 准备工作

- 服务器需安装 Docker 和 Docker Compose
- 确保服务器端口 80（Nginx）、8001（后端）可用

### 2. 部署步骤

```sh
# 进入 FastapiAdmin 主工程目录
cd FastapiAdmin

# 复制环境配置文件
cp backend/env/.env.prod.example backend/env/.env.prod
cp frontend/.env.production.example frontend/.env.production

# 编辑环境配置文件（根据实际服务器情况修改）
# 主要配置项：数据库连接、Redis连接、JWT密钥、API基础URL等

# 赋予脚本执行权限
chmod +x deploy.sh

# 执行部署脚本
./deploy.sh

# 查看部署状态
docker compose ps

# 查看日志
docker logs -f fastapiadmin-backend
```

### 3. 部署文件说明

| 配置文件 | 说明 | 路径 |
|---------|------|------|
| 后端环境配置 | 生产环境数据库、Redis等配置 | `FastapiAdmin/backend/env/.env.prod` |
| 前端环境配置 | 生产环境API地址等配置 | `FastapiAdmin/frontend/.env.production` |
| Docker配置 | 容器编排配置 | `FastapiAdmin/docker-compose.yaml` |
| Nginx配置 | 反向代理配置 | `FastapiAdmin/devops/nginx/nginx.conf` |

### 4. 常用 Docker 命令

```sh
# 查看镜像
docker images

# 查看容器
docker compose ps

# 停止服务
docker compose down

# 重启服务
docker compose up -d

# 查看容器日志
docker logs -f <容器名>

# 进入容器
docker exec -it <容器名> bash
```



## 💡常见问题及解决方案

### 1. 后端启动失败

**问题**：数据库连接失败
**解决方案**：检查环境配置文件中的数据库连接信息是否正确，确保数据库服务正在运行，且用户名密码正确。

**问题**：Redis连接失败
**解决方案**：检查环境配置文件中的Redis连接信息是否正确，确保Redis服务正在运行。

**问题**：依赖安装失败
**解决方案**：确保Python版本正确（>=3.10），可以尝试使用虚拟环境重新安装依赖。

### 2. 前端启动失败

**问题**：依赖安装失败
**解决方案**：确保Node.js版本正确（>=20.0），可以尝试清除缓存后重新安装：`pnpm cache clean && pnpm install`。

**问题**：API请求失败
**解决方案**：检查前端环境配置文件中的API基础URL是否正确，确保后端服务正在运行。

### 3. 部署问题

**问题**：Docker部署失败
**解决方案**：确保服务器已安装Docker和Docker Compose，检查端口是否被占用，查看容器日志了解具体错误信息。

**问题**：Nginx配置错误
**解决方案**：检查Nginx配置文件中的反向代理设置是否正确，确保后端服务地址配置正确。

### 4. 其他问题

**问题**：系统初始化失败
**解决方案**：确保数据库已正确初始化，且迁移已应用，可以尝试重新执行初始化命令：`python main.py init`。

**问题**：权限不足
**解决方案**：检查用户角色权限设置，确保当前用户有足够的权限访问所需功能。

**问题**：代码生成失败
**解决方案**：确保数据库表结构正确，代码生成配置参数填写完整。
