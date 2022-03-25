var app = new Vue({
    el: '#ShowDB',
    data: {
        // 数据源信息
        dataSorucesInfo: [],
        // 当前选择的数据源
        currentDataSource: '1',

        // 分页表结构
        tableStructSize: 5,
        tableStructPageNumber: 1,
        tableStruct: null

    },
    methods: {
        // 数据源信息
        dsInfo() {
            const that = this
            axios.get('/showdb/config/dsInfo').then(function (res) {
                console.log(res)
                if (res.data.code !== 200) {
                    alert(res.data.msg);
                    return;
                }
                var res = res.data.data;
                that.dataSorucesInfo = res;
                currentDataSource = res[0].beanName;
            })
        },

        tableStructByPage(tableStructPageNumber, tableStructSize) {
            const that = this
            axios.get('/showdb/struct/' + tableStructSize + '/' + tableStructPageNumber).then(function (res) {
                if (res.data.code !== 200) {
                    alert(res.data.msg);
                    return;
                }
                that.tableStruct = res.data.data
                console.log( that.tableStruct)
            })
        }
    },

    // 加载页面初始化数据
    mounted: function () {
        this.dsInfo();
        this.tableStructByPage(this.tableStructSize, this.tableStructPageNumber);
        // this.masterSlaveInfo();
    }
})