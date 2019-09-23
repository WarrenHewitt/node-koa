# .bat 和 .sh 语法

## .bat

> 更多命令： https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands

执行bat文件： 在bat文件所在目录，打开命令行输入 xxx.bat 如果是 powershell ./xxx.bat

- `echo` 其有回声的意思；功能类似 print， 回显当前命令，并换行输出 echo 后面的字符

- `echo off` 其之后的所有命令都不在命令行输出显示，只输出结果；但不会关闭自身的回显，可在其前面加 @

- `echo on` 与 echo off 相反

- `@` 加在每个命令行的最前面，表示运行时不显示这一行的命令行

- `call` 调用批处理文件（防止直接调用其它批处理文件执行完毕后，无法执行当前文件下的后续代码）

- `pause` 暂停，输入任意键后继续

- `rem`  注释

### 实例
- 进入某个文件夹执行命令

方式一：(完整代码演示：`/batTest`)

```
@ echo off
cd test
node test.js
```

方式二： (完整代码演示 `/notes/python.md`)
```
@echo off
start cmd /k "cd C:\Users\XXX\Desktop\getIP && python ip.py"
```

