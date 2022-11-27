
import Mock from 'mockjs';


Mock.mock('/product/show', {
    
    "data" : {
        "datatime":"@datetime",
        "name":"@cname",
        "address":"@city",
        "img":"@image('200x100', '#50B347', '#FFF', 'Mock.js')"
    }
});

Mock.mock('/book/hello', {
    "result":[{
        "id":"@integer(1, 100)",
        "bookName":"@word",
        "rating":"@float(60, 100, 3)"
    }]
});