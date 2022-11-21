###
 # @LastEditTime: 2022-11-21 14:06:33
### 
function waiting()
{
    i=0
    while [ $i -le 1000 ]
    do
        #  https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json  spinner 种类参考  有80多种
        # for j in '⣾' '⣷' '⣯' '⣟' '⡿' '⢿' '⣻' '⣽'
        for j in '⠋' '⠙' '⠹' '⠸' '⠼' '⠴' '⠦' '⠧' '⠇' '⠏'
        do
            printf "test waiting: \e[1;32m%s\e[0m \r" "$j"
            sleep 0.1
        done
        let i=i+4
    done
    # 输出16个空格 覆盖； % 后加数字标识重复多少次
    printf "%16s\r" " "
    printf "\e[1;32mfinish\e[0m"
}

function f2() {
  echo "f2"
  echo $!
}

f2

echo finish

# progressBarTempPath=$(mktemp)
# echo "0" >"$progressBarTempPath"
# progressBar () {
#   local time=$1
#   local interval=1
#   if [[ "${time}" == *"s" ]]; then
#     interval=$(echo "scale=5;${time//s/}/60"|bc)
#   elif [[ "${time}" == *"m" ]]; then
#     interval=${time//m/}
#   else
#     echo "进度条参数错误"
#     return 1
#   fi
#   local nowNum=1
#   local str=''
#   local postfix=('/' '-' '\' '|')
#   while [ $nowNum -le 100 ]; do
#     local needEnd=`cat "$progressBarTempPath"`
#     local index=$((nowNum%4))
#     printf "[%-50s %-3d%% %c]\r" "$str" "$nowNum" "${postfix[$index]}"
#     nowNum=$((nowNum+1))
#     if [ $needEnd -eq 1 ]; then
#         sleep 0.1
#     else
#       if  [ $nowNum -le 20 ] ; then
#           sleep  $interval
#       elif [  $nowNum -gt 95  ];then
#           local nowNumCopy=$nowNum
#           while [ $needEnd -eq 0 ]; do
#               sleep $interval
#               local innerIndex=$(((nowNumCopy+1)%4))
#               printf "[%-50s %-3d%% %c]\r" "$str" "$nowNum" "${postfix[$innerIndex]} "
#               needEnd=$(cat "$progressBarTempPath")
#               nowNumCopy=$((nowNumCopy+1))
#           done
#       else
#           sleep $(echo "scale=5;${interval}/2"|bc)
#       fi
#     fi
#     if (($nowNum % 2 == 0)); then
#       str+='='
#     fi
#   done
#   printf "\n"
# }
# # 多线程调用进度条函数，参数表示预估的大概时间。参数中的s表示时间单位秒，还可以用m表分钟。
# progressBar 20s &
# # 调用进度条后，就是完成具体操作的代码。
# echo "模拟一个24秒执行完成的任务。"
# sleep 24
# # 通知进度条函数完成进度
# echo "1" >"$progressBarTempPath"
# wait