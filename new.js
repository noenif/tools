function shujukufuzhi(keyname,value){
    let keyname = ['ID', 'username', 'name', 'jurisdiction', 'ctime', 'utime', 'operator']
    let value = [[1,'admin', 'Administrator', 'admin', '2020-06-11 14:22:59', '2020-06-11 14:22:59', { show: false, qedit: false, edit: false }],[2,'operatorA', '操作员', 'admin', '2020-06-11 14:22:59', '2020-06-11 14:22:59', { show: false, qedit: false, edit: false }]]
    let tableData = [];

    for (let j = 0; j <value.length ; j++) {
        tableData[j]={};
        for (let i = 0; i < keyname.length; i++) {
            let  keyname_type = keyname[i];
            console.log(keyname_type)
            tableData[j][keyname_type] = value[j][i]
        }
    }
return tableData;
}

