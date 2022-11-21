#!/bin/sh
###
 # @LastEditTime: 2022-11-19 21:05:55
### 
# 使用变量时 花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界
# 变量使用时加 $
# 变量赋值时 不加 $
breakTag="1"
function waiting()
{
    i=0
    while [ $i -le 100 ]
    do
        for j in '⣾' '⣷' '⣯' '⣟' '⡿' '⢿' '⣻' '⣽'
        do
            if [ $breakTag=="1" ];then
            # \e[?25l 隐藏光标
            printf "\e[?25l \e[1;32m %s\e[0m test waiting \r" "$j"
            sleep 0.1
            breakTag="2"
            elif [ $breakTag=="2" ]; then
                break 
            fi
        done
        let i=i+4
    done
    # 输出16个空格 覆盖； % 后加数字标识重复多少次
    # printf "%16s\r" " "
    # 先清除光标到行尾的内容 \e[K  
    # 再显示光标 \e[?25h
    printf "\e[K \e[?25h"
    printf "\e[1;32mfinish\e[0m"
}
# waiting

# 注意 [  ] 内部前后有空格
# if [ "a" == "b" ]; then
# echo "equal"
# elif [  ];then
# echo "else if"   
# else
# echo "not equal"
# fi
# -eq	相等
# -ne	不相等
# -gt	> (("$x" > "$y")) 需要双括号
# -lt	<
# -ge	>= 
# -le	<=

needBreak="no"
function f1(){
    for n in {1..20}
    do
    echo "${needBreak}"
    if [ $needBreak != 'no' ]; then
        echo "no: $n"
        sleep 0.1
        break
    elif [ $n -eq 6 ]; then
        echo "equal: 20"
        needBreak="ok"
    else
        sleep 0.5
        echo "else: ${n}"
    fi
    done
}

function f2(){
    # sleep 2 
    echo "1 ${needBreak}"

    needBreak="ok"

    echo "2 ${needBreak}"

    echo "f2 execute"

}

function f3() {
    echo "f3 ${needBreak}"
}

f1 & f2

wait

echo "weeee"


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