#!/bin/sh
###
 # @LastEditTime: 2022-11-18 18:27:03
### 

function waiting()
{
    i=0
    while [ $i -le 10 ]
    do
        for j in '⣾' '⣷' '⣯' '⣟' '⡿' '⢿' '⣻' '⣽'
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
waiting


# i=0
# str=""
# arry=("\\" "|" "/" "-")
# while [ $i -le 100 ]
# do
#     let index=i%4
#     printf "[%-100s] %d %c\r" "$str" "$i" "${arry[$index]}"
#     sleep 0.1
#     let i=i+1
#     str+="#"
# done
# echo ""

# i=0
# str=""
# arry=("\\" "|" "/" "-")
# while [ $i -le 100 ]
# do
#     let index=i%4
#     if [ $i -le 20 ]; then
#         let color=44
#         let bg=34
#     elif [ $i -le 45 ]; then
#         let color=43
#         let bg=33
#     elif [ $i -le 75 ]; then
#         let color=41
#         let bg=31
#     else
#         let color=42
#         let bg=32
#     fi
#     printf "\033[${color};${bg}m%-s\033[0m %d %c\r" "$str" "$i" "${arry[$index]}"
#     usleep 30000
#     let i=i+1
#     str+="#"
# done
# echo ""

# i=0
# str=""
# arry=("|" "/" "-" "\\")
# while [ $i -le 100 ]
# do
#     let index=i%4
#     printf "%3d%% %c%-20s%c\r" "$i" "${arry[$index]}" "$str" "${arry[$index]}"
#     sleep 0.2
#     let i=i+5
#     str+="*"
# done
# echo ""

# total_stdy="$(($(stty size|cut -d' ' -f1)))"
# total_stdx="$(($(stty size|cut -d' ' -f2)))"

# head="Progress bar: "
# total=$[${total_stdx} - ${#head}*2]

# i=0
# loop=100
# while [ $i -lt $loop ]
# do
#     let i=i+1
    
#     per=$[${i}*${total}/${loop}]
#     remain=$[${total} - ${per}]
#     printf "\r\e[${total_stdy};0H${head}\e[42m%${per}s\e[47m%${remain}s\e[00m" "" ""
#     sleep 0.1
# done

# echo ""