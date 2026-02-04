---
outline: "deep"
title: 交换机配置备份模块
---

# 交换机配置备份模块

## 🙌手动备份配置文件
平台支持手动备份交换机配置文件，具体操作见[交换机管理模块](./switch.md)中的手动获取配置文件章节。

## ⌚️自动备份配置文件

平台支持定时自动备份交换机配置文件，为了能够更好地控制备份规则，我们需要新建一个模块用于管理需要备份的交换机，并设置备份频率，如每隔一天备份一次、每天固定时间点备份一次等。

### 新建模块

使用代码生成模块，新建一个模块`备份管理`,主要包含以下信息：
- IP：交换机IP地址
- 备份频率：每隔一天、每天固定时间点等
```sql
-- MySQL SQL案例
CREATE TABLE `switch_backup` (
  `ip` varchar(64) DEFAULT NULL COMMENT '交换机IP',
  `name` varchar(64) DEFAULT NULL COMMENT '交换机名称',
  `backupType` varchar(64) DEFAULT NULL COMMENT '备份方式',
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `description` text COMMENT '备注/描述',
  `status` varchar(10) NOT NULL COMMENT '是否启用(0:启用 1:禁用)',
  `uuid` varchar(64) NOT NULL COMMENT 'UUID全局唯一标识',
  `created_time` datetime NOT NULL COMMENT '创建时间',
  `updated_time` datetime NOT NULL COMMENT '更新时间',
  `created_id` int DEFAULT NULL COMMENT '创建人ID',
  `updated_id` int DEFAULT NULL COMMENT '更新人ID',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`uuid`),
  KEY `ix_switch_backup_created_id` (`created_id`),
  KEY `ix_switch_backup_updated_id` (`updated_id`),
  CONSTRAINT `switch_backup_ibfk_1` FOREIGN KEY (`created_id`) REFERENCES `sys_user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `switch_backup_ibfk_2` FOREIGN KEY (`updated_id`) REFERENCES `sys_user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='交换机备份管理表'
```

### 设置备份频率
此外，在字典管理中新建一个`交换机配置频率`，标签为`每隔五秒`，值为`	every_five_seconds`
![字典-交换机备份频率](/switch/字典-交换机备份频率.png)

### 定时任务函数

在字典管理模块中找到`任务函数`这一项，点击`字典`，这里有所有的任务函数。
![查看任务函数字典](/switch/查看任务函数字典.png)
上图中的`scheduler_test.job`对应后端`app/plugin/module_application/job/function_task/scheduler_test.py`的`job`函数。
```python
def job(*args, **kwargs) -> None:
    """
    定时任务执行同步函数示例

    参数:
    - args: 位置参数。
    - kwargs: 关键字参数。
    """
    try:
        print(f"开始执行任务: {args}-{kwargs}")
        time.sleep(3)
        print(f'{datetime.now()}同步函数执行完成')
    except Exception as e:
        log.error(f"同步任务执行失败: {e}")
        raise
```


这里我们自定义一个交换机配置备份函数`switch_config_backup_every_five_seconds`