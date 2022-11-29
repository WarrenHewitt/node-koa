#!/bin/sh
###
 # @LastEditTime: 2022-11-22 11:57:37
### 

# 直接修改文本的第5行 将test替换为dev
sed -i "5s/test/dev/" "./sh-sed.js"

# 删除空白行
# -i 标识直接修改文件内容
# sed -i "/^$/d" "./sh-sed.js"