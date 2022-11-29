#!/bin/sh
###
 # @LastEditTime: 2022-11-24 15:41:13
### 
# 使用变量时 花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界
# 变量使用时加 $
# 变量赋值时 不加 $
# 命令使用方式 1. 反引号` ` 2. $()  
# variable=`commands`  commands 如果是多命令 用分号隔开
# mktemp 创建临时文件
breakTag=$(mktemp) 
echo 'no' > $breakTag;
function waiting() {
    local break=""
    while [ `cat $breakTag` == "no" ] ; do
        break=`cat "${breakTag}"`
        #  https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json  spinner 种类参考  有80多种
        # for j in '⣾' '⣷' '⣯' '⣟' '⡿' '⢿' '⣻' '⣽'
        for j in '⠋' '⠙' '⠹' '⠸' '⠼' '⠴' '⠦' '⠧' '⠇' '⠏'
        do
            # \e[?25l 隐藏光标
            printf "\e[?25l \e[1;32m %s\e[0m test waiting \r" "$j"
            sleep 0.1
        done
    done
    
    # 输出16个空格 覆盖； % 后加数字标识重复多少次
    # printf "%16s\r" " "
    # 先清除光标到行尾的内容 \e[K  
    # 再显示光标 \e[?25h
    printf "\e[K \e[?25h"

    echo "finish"
}

function f1() {
    sleep 1
    echo 'yes' > $breakTag
}

waiting & f1

wait


# aa="no"
# 定义int类型
# declare -i bb=1
# 可以直接判断 也可以使用命令
# while [[ $aa="yes" ]] ;
# do
#     sleep 0.1
#     # echo "*** $aa"
#     ((bb++))
#     # echo "*** $bb"
#     if [ $bb -eq 10 ] ; then
#         echo "====10"
#         aa="yes"
#     fi
# done



# while 语句和 if else 语句中的 condition 用法都是一样的，你可以使用 test 或 [] 命令，也可以使用 (()) 或 [[]]，
# 注意 [  ] 内部前后有空格
# if [ "a" == "b" ]; then
# echo "equal"
# elif [  ];then
# echo "else if"   
# else
# echo "not equal"
# fi
# = 判断相等 == 等价
# -eq	相等
# -ne	不相等
# -gt	> (("$x" > "$y")) 需要双括号
# -lt	<
# -ge	>= 
# -le	<=

echo "============"


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