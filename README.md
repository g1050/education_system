```
 .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| |  ____  ____  | || | ____    ____ | || |              | || |  _________   | || |  ________    | || | _____  _____ | |
| | |_   ||   _| | || ||_   \  /   _|| || |              | || | |_   ___  |  | || | |_   ___ `.  | || ||_   _||_   _|| |
| |   | |__| |   | || |  |   \/   |  | || |              | || |   | |_  \_|  | || |   | |   `. \ | || |  | |    | |  | |
| |   |  __  |   | || |  | |\  /| |  | || |              | || |   |  _|  _   | || |   | |    | | | || |  | '    ' |  | |
| |  _| |  | |_  | || | _| |_\/_| |_ | || |              | || |  _| |___/ |  | || |  _| |___.' / | || |   \ `--' /   | |
| | |____||____| | || ||_____||_____|| || |   _______    | || | |_________|  | || | |________.'  | || |    `.__.'    | |
| |              | || |              | || |  |_______|   | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------' 
```
### 幻萌教务管理系统
> 该教务系统是javaee课内实验，前端采用layui组件库，后端采用Java语言SSM框架，前后端分离，部署时候分开部署，有前台服务和后台管理......
# 运行环境
- jdk 1.8
- apache-maven-3.6.3
- apache-tomcat-9.0.39
# 下载与开发部署

### 下载


**后端**   
```git clone https://github.com/g1050/education_system_java.git```  

**前端** 
```git clone https://github.com/g1050/education_system.git```  



### 开发环境部署 
**后端**  

- 配置Tomcat、Maven
- 导入edu_system_java到IDEA
- 根据```pom.xml```导入jar包
- IDEA中，```Edit Configurations => Deployment => Application context```，配置为空
- 端口配置```8080```
- ```RUN```

**前端** 

> 前端需要web服务器,tomcat、Nginx或者VS CODE的Live Server插件均可。  

# 实现功能

### 后台
- 管理员管理
- 机构管理
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --- 学院管理
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --- 班级管理
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --- 社团管理
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --- 宿舍管理
- 用户管理
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --- 学生管理
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --- 教师管理
- 教学管理
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --- 课程管理
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --- 专业管理
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; --- 讲师安排

### 前台  

**教师端** 
- 查看我的课程
- 查案选课学生
- 学生成绩管理

**学生端** 
- 查看我的课程
- 查看我的成绩
- 选修课选课
  
# 效果展示
![登录界面](https://github.com/g1050/education_system/blob/master/images/README/login.png)
![管理员界面](https://github.com/g1050/education_system/blob/master/images/README/manager.png)
![学生界面](https://github.com/g1050/education_system/blob/master/images/README/student.png)
![教师界面](https://github.com/g1050/education_system/blob/master/images/README/teacher.png)

> QQ交流群:```1056651547```
