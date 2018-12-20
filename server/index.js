const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
app.get('/',(req,res)=>{
    res.send('ok')
});
app.listen('3001',()=>console.log('started'));

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "company",
    charset : "utf8"
});
// lấy dl ra
conn.connect(function(err) {
    if (err) throw err;
    conn.query("SELECT * FROM nhanvien", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
// // kiểm tra kết nối
// conn.connect(function (err){
//     //nếu có nỗi thì in ra
//     if (err) throw err.stack;
//     //nếu thành công
//     console.log('Kết nối thành công');
// });
//
// đóng kết nối giải phóng băng thông
// conn.end(function(err) {
//     if (err) throw err;
//     console.log("Đã đóng kết nối");
// });