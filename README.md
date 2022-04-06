# 📖ShowDB
:zap: 一个0配置，拆箱即用的数据库文档工具，自动可视化SpringBoot项目中所有数据源文档，数据库的监控信息，配置信息等 :zap:  

## 如何使用？？  
- 在SpringBoot项目的pom.xml文件中引入依赖（稳定版还未上）
```xml
<dependency>
    <groupId>cn.cocowwy</groupId>
    <artifactId>ShowDB</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```
- 项目中已经配置好数据源/多数据源
- 浏览器中访问该路径：```/db```，即可自动生成当前项目里的所有数据源文档页面

![73849dd9319e33d555677d1acf6745f](https://user-images.githubusercontent.com/63331147/161917411-9808b386-590d-409a-b2dd-196f27f40ff6.jpg)
**上图的Demo中，该项目存在三个数据源，同时其中一个数据源开启了主从，ShowDB对当前项目中所有的数据源进行了统一的文档管理，以及数据源信息监控**


## 版本选择
|  环境   | 版本号  |
|  ----  | ----  |
| JDK | 1.8+ |

**yml配置**
```yml
showdb:
  enable: true
  endpoint: monitor-master-slave,monitor-ip-con,'*'  
```
  
**endpoint可选值如下：**
|  endpoint   | 说明  |
|  ----  | ----  |
| * | 所有 |
| MONITOR_MASTER_SLAVE  | 主从信息监控 |
| MONITOR_IP_CON  | IP连接监控 |

**当前支持数据源如下：**
|  数据源   | 是否支持  |
|  ----  | ----  |
| MySQL | 支持 |

**包模块说明：**
|  包名   | 说明  |
|  ----  | ----  |
| showdb-core | SQL核心执行逻辑，缓存等 |
| showdb-spring-boot-autoconfigure | ShowDB的自动配置 |
| showdb-spring-boot-starter | 引入starter |
| showdb-test | 测试模块，内含多数据源demo，测试sql等 |
| showdb-web | web模块，视图和业务处理 |



