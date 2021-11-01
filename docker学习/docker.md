## Docker学习

```
Docker 概述
Docker安装
Docker命令
   镜像命令
   容器命令
   操作命令
Docker镜像
容器数据卷
DockerFile
Docker网络原理
IDEA整合Docker
Docker Compose
Docker Swarm
CI\CD Jenkins
```

## Docker是基于Go语言开发的！开源项目



## Docker为什么出现？

  	java  --- apk --- 发布-----（应用商店）---- 张三使用apk ----- 安装即可用！

  	java ---- jar(环境) ----- 打包项目带上环境（镜像）----（Docker仓库：商店）------ 下载我们发布的镜像 ---- 直接运行即  	  可



##  Docker的应用场景

- web应用的自动化打包和分布
- 自动化测试和持续集成、发布
- 在服务型环境中部署和调整数据库或其他的后台应用
- 从头编译或者扩展现有的OpenShift或Cloud Foundry平台来搭建自己的Paas环境

 

## 比较Docker和虚拟机技术的不同：

-  传统虚拟机，虚拟出一条硬件，运行一个完整的操作系统，然后再这个系统上安装和运行软件

- 容器内的应用直接运行在宿主机的内核，容器是没有自己的内核的，也没有虚拟我们的硬件，所以轻便

- 每个容器间是相互间隔，每个容器内都有一个属于自己的文件系统，互不影响。

  

## 虚拟机技术缺点：

- 资源占用十分多

- 冗余步骤多

- 启动很慢

  

## 容器化技术：

容器化技术不是模拟的一个完整的操作系统



## DevOps(开发、运维)

### 应用更快捷的交付和部署

传统：一推帮助文档，安装程序

Docker: 打包镜像发布测试，一键运行

### 更快捷的升级和扩缩容

使用了Docker之后，我们部署应用就和搭积木一样。

项目打包为一个镜像，扩展， 服务器A 服务器B

### 更简单的系统运维

在容器化之后，我们的开发，测试环境都是高度一致的

### 更高效的计算资源利用

Docker是内核级别的虚拟化，可以在一个物理机上运行很多





## Docker安装

### Docker的基本组成

![image-20210830152740695](C:\Users\yjywangd\AppData\Roaming\Typora\typora-user-images\image-20210830152740695.png)

### 镜像（Image）：

docker镜像就好比一个模板，可以通过这个模板来创建容器服务，tomcat镜像===>run====>tomcat01容器（提供服务）

通过这个镜像可以创建多个容器（最终服务运行或者项目运行就是在容器中）

### 容器（container）：

Docker利用容器技术，独立运行一个或者一组应用，通过镜像来创建的，启动，停止，删除，暂停，基本命令

### 仓库（repository）：

仓库就是存放镜像的地方！

仓库分为公有仓库和私有仓库

阿里云。。。都有容器服务器（配置镜像加速）

Docker 使用客户端-服务器（C/S）架构模式，使用远程API来管理和创建Docker 容器

Docker容器通过Docker镜像来创建

![image-20210830153328390](C:\Users\yjywangd\AppData\Roaming\Typora\typora-user-images\image-20210830153328390.png)

![image-20210830153350790](C:\Users\yjywangd\AppData\Roaming\Typora\typora-user-images\image-20210830153350790.png)

###   Docker安装

  

