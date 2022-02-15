// 显示当前集合信息
show collections

// 查询表中数据
db.getCollection("users").find()

// 插入数据
db.users.insert([{ id: 2, name: 'warren', class: 3 }])

// 删除数据 只传 {} 表示删除所有数据
db.users.remove({})


