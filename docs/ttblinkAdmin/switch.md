---
outline: "deep"
title: 交换机管理模块
---

# 交换机管理模块

## 交换机信息
利用平台代码生成功能生成该模块，将交换机以下字段进行保存和管理：
| 字段     | 描述     | 备注       |
|----------|------------|------------|
| IP       | 交换机IP地址 | 必填       |
| 名称     | 交换机名称   | 非必填       |
| 品牌     | 交换机品牌，华为、华三、思科等不同品牌交换机有不同的远程代码   | 必填       |
| 型号     | 交换机型号   | 非必填       |
| 管理方式 | Telnet/SSH  | 必填       |
| 用户名   | 登录用户名   | 必填       |
| 密码     | 登录密码     | 必填       |
| enable密码 | 进入enable模式的密码，针对思科交换机 | 非必填       |
| 服务类型 | 办公、视频、生产等 | 非必填       |
| 安装位置 | 交换机安装位置 | 非必填       |

```sql
CREATE TABLE `switch_info` (
  `ip` varchar(64) DEFAULT NULL COMMENT 'IP',
  `name` varchar(64) DEFAULT NULL COMMENT '名称',
  `brand` varchar(64) DEFAULT NULL COMMENT '品牌',
  `model` varchar(64) DEFAULT NULL COMMENT '型号',
  `manageWay` varchar(64) DEFAULT NULL COMMENT '管理方式',
  `username` varchar(64) DEFAULT NULL COMMENT '用户名',
  `password` varchar(64) DEFAULT NULL COMMENT '密码',
  `enablePassword` varchar(64) DEFAULT NULL COMMENT 'enable密码',
  `serviceType` varchar(64) DEFAULT NULL COMMENT '服务类型',
  `location` varchar(64) DEFAULT NULL COMMENT '安装位置',
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `uuid` varchar(64) NOT NULL COMMENT 'UUID全局唯一标识',
  `status` varchar(10) NOT NULL COMMENT '是否启用(0:启用 1:禁用)',
  `description` text COMMENT '备注/描述',
  `created_time` datetime NOT NULL COMMENT '创建时间',
  `updated_time` datetime NOT NULL COMMENT '更新时间',
  `created_id` int DEFAULT NULL COMMENT '创建人ID',
  `updated_id` int DEFAULT NULL COMMENT '更新人ID',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`uuid`),
  KEY `ix_switch_info_created_id` (`created_id`),
  KEY `ix_switch_info_updated_id` (`updated_id`),
  CONSTRAINT `switch_info_ibfk_1` FOREIGN KEY (`created_id`) REFERENCES `sys_user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `switch_info_ibfk_2` FOREIGN KEY (`updated_id`) REFERENCES `sys_user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='交换机数据表'
```

![交换机信息模块](/switch/交换机信息模块.png)

## 交换机配置备份
平台支持定时备份交换机配置文件，支持手动备份和自动备份两种方式。备份的配置文件可以在平台进行查看和下载。

### 👐手动获取配置文件

在交换机信息模块选中一台交换机，点击左上角`获取配置`按钮，在弹窗中点击`获取设备配置`，即可获取该交换机的配置文件。

![手动获取交换机配置](/switch/手动获取交换机配置.png)

获取配置文件内容后，可以选择保存到服务器，保存地址为：`http://localhost:5180/web#/ monitor/resource`，path为`switchconfig`，也可以直接下载到本地。

![手动保存配置到本地](/switch/手动保存配置到本地.png)

![手动上传配置到服务器](/switch/手动上传配置到服务器.png)

![查看手动保存的配置文件](/switch/查看手动保存的配置文件.png)

### ⌚️定时备份配置文件

见下一章节。