# psdash_HTTPBasicAuth

简介：在psdash的基础上添加httpbasicauth（也就是打开页面弹出提示框，要输入用户名密码），可自定义模板，可以理解为psdash的中文版分支

功能：psdash是基于psutil、zerorpc的python语言开发的主机监控面板，本分支包含psdash的所有功能—支持多节点/集群部署，所有数据每3秒自动更新，无需手动刷新页面；
    
        总览页：支持查看 cpu, disks, network, users, memory, swap , network
        进程：进程列表，并展示每个进程详情，包括打开的文件数、打开的连接数、内存占用、子进程、资源限制
        硬盘：所有硬盘和分区
        网络：所有网络接口和使用的流量，以及当前的网络连接
        日志：展现自定义的日志文件详情，并支持搜索文件内容
    
# 安装

**1.主节点和agent节点都执行下面的命令(安装psdash)**


>Debian/Ubuntu:

>>\# apt-get install build-essential python-dev -y

>>\# apt-get install python-setuptools  -y

>>\# pip install psdash --allow-external argparse

>>如果上面的命令安装不成功则执行下面的命令

>>\# git clone https://github.com/Jahaja/psdash.git 

>>\# cd psdash 

>>\# pip install -U setuptools

>>\# python setup.py install

>RHEL (Fedora, CentOS):

>>\# yum groupinstall "Development Tools"  -y

>>\# yum install python-devel  -y

>>\# yum install python-setuptools  -y

>>\# pip install psdash --allow-external argparse

>>如果上面的命令安装不成功则执行下面的命令

>>\# git clone https://github.com/Jahaja/psdash.git 

>>\# cd psdash 

>>\# pip install -U setuptools

>>\# python setup.py install

**2.主节点执行**

>\# pip install flask-httpauth

>\# git clone https://github.com/wenguonideshou/psdash_HTTPBasicAuth.git

>\# cd psdash_HTTPBasicAuth

>\# python run.py -l '/var/log/**/*.log'     

**3.agent节点执行**

>\# psdash -a --register-as xxx -l '/var/log/**/*.log' --register-to http://主节点IP:5000

## 如何修改参数？

在run.py的app = Flask(\_\_name\_\_)下面添加如下语句

app.config.xxx = yyy

xxx为下面的参数, yyy为值, 比如

    app.config.PSDASH_ALLOWED_REMOTE_ADDRESSES = "10.0.0.2, 192.29.20.2"
    app.config.PSDASH_URL_PREFIX = "/psdash"
    app.config.PSDASH_LOG_LEVEL = logging.INFO
    app.config.PSDASH_LOG_LEVEL = "%(levelname)s"
    app.config.PSDASH_NODES = [{'name': 'mywebnode', 'host': '10.0.0.2', 'port': 5000}]
    app.config.PSDASH_NET_IO_COUNTER_INTERVAL = 3
    app.config.PSDASH_LOGS_INTERVAL = 60
    app.config.PSDASH_REGISTER_INTERVAL = 60
    app.config.PSDASH_LOGS	= ['/var/log/*.log']
    app.config.PSDASH_REGISTER_TO = 'http://10.0.20.2:5000'
    app.config.PSDASH_REGISTER_AS = 'myvps'
    app.config.PSDASH_HTTPS_KEYFILE = '/home/user/private.key'
    app.config.PSDASH_HTTPS_CERTFILE	= '/home/user/certificate.crt'
    app.config.PSDASH_ENVIRON_WHITELIST = ['HOME']

参数详细说明请参考https://github.com/Jahaja/psdash#configuration

修改用户名密码：

    修改web.py里的users = {"admin": "admin",}   前面是用户名后面是密码，可以添加多个用户

**修改刷新的时间间隔**

修改static/js/psdash.js里的3000这个数字

修改templates/all.html里的5000这个数字

**如何卸载：**

pip uninstall psdash

然后rm -r /root/psdash_HTTPBasicAuth
