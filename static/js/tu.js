<script type="text/javascript">
//CPU图表
   // 基于准备好的dom，初始化echarts实例
   var cpuChart = echarts.init(document.getElementById('cpu{{ loop.index }}'),'macarons');
   // 指定图表的配置项和数据
   var cpuoption = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: 'CPU使用',
            type: 'pie',
            hoverAnimation: false,
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:{{x.cpu.user}}, name:'user'},
                {value:{{x.cpu.system}}, name:'system'},
                {value:{{x.cpu.idle}}, name:'idle'},
            ],
           label: {
	          normal: {
	                    show: false,
	                    position: 'inside',
	                  formatter:"{b}:{d}%"
	                },
       	},
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
   // 使用刚指定的配置项和数据显示图表。
   cpuChart.setOption(cpuoption);
</script>
<script type="text/javascript">
//内存图表
   // 基于准备好的dom，初始化echarts实例
   var ramChart = echarts.init(document.getElementById('ram{{ loop.index }}'),'macarons');
   // 指定图表的配置项和数据
   var ramoption = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '内存使用',
            type: 'pie',
            hoverAnimation: false,
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:{{x.memory.percent}}, name:'已使用'},
                {value:{{100-x.memory.percent}}, name:'空闲'},
            ],
                label: {
          normal: {
                    show: false,
                    position: 'inside',
                  formatter:"{b}:{d}%"
                },
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
   // 使用刚指定的配置项和数据显示图表。
   ramChart.setOption(ramoption);
</script>
<script type="text/javascript">
//硬盘图表
   // 基于准备好的dom，初始化echarts实例
   var diskChart = echarts.init(document.getElementById('disk{{ loop.index }}'),'macarons');
   // 指定图表的配置项和数据
   var diskoption = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '硬盘使用',
            type: 'pie',
            hoverAnimation: false,
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:{{x.disks[0].space_used_percent if x.disks[0] else 0}}, name:'已使用'},
                {value:{{100-x.disks[0].space_used_percent if x.disks[0] else 0}}, name:'空闲'},
            ],
                label: {
          normal: {
                    show: false,
                    position: 'inside',
                  formatter:"{b}:{d}%"
                },
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
   // 使用刚指定的配置项和数据显示图表。
   diskChart.setOption(diskoption);
</script>
<script type="text/javascript">
//SWAP图表
   // 基于准备好的dom，初始化echarts实例
   var swapChart = echarts.init(document.getElementById('swap{{ loop.index }}'),'macarons');
   // 指定图表的配置项和数据
   var swapoption = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: 'SWAP使用',
            type: 'pie',
            hoverAnimation: false,
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:{{x.swap.percent}}, name:'已使用'},
                {value:{{100-x.swap.percent}}, name:'空闲'},
            ],
                label: {
          normal: {
                    show: false,
                    position: 'inside',
                  formatter:"{b}:{d}%"
                },
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
   // 使用刚指定的配置项和数据显示图表。
   swapChart.setOption(swapoption);
</script>