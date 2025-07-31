/*
 * @LastEditTime: 2022-12-01 14:26:49
 */
/**
 * @describe 项目打包和部署
 */
/* 注意这里的包版本  是否可以使用 commonjs 语法 */
const inquirer = require('inquirer')
const chalk = require('chalk')
const shell = require('shelljs')
const ora = require('ora')

const executeType = process.argv[2]

const list = {
    build: {
        q: '请选择打包类型?',
        list: [
            { name: '1. 开发测试包', value: 'test' },
            { name: '2. 生产环境包', value: 'product' },
        ]
    },
    deploy: {
        q: '请选择上传服务器?',
        list: [
            { name: '1. 开发服务器', value: 'dev' },
            { name: '2. 测试服务器', value: 'test' },
        ]
    }
}
const textTable = { product: '生产', dev: '开发', test: '测试' }
const result = list[executeType]
const command = {
    dev: 'scp -i xxx -rq ./dist/* root@xxxx',
    test: 'scp -i xxx -rq ./dist/* root@ip:目录'
}

function deployFn(env, preBuild) {
    /* 开始上传 */
    if (preBuild) {
        buildFn('test', env)
    } else {
        const spinner = ora({ text: chalk.green(`上传${textTable[env]}服务器中...`), spinner: 'runner' }).start()
        shell.exec(command[env], { silent: true }, function(code, stdout, stderr) {
            spinner.stop()
            if (code === 0) {
                console.log(chalk.green(`上传${textTable[env]}服务器完成！`))
            }
            console.log(stdout, stderr)
        })
    }
}

function buildFn(env, deployEnv) {
    const yarn = shell.which('yarn') ? 'yarn' : 'npm run'

    const spinner = ora({ text: chalk.green(`开始打${textTable[env]}包...`), spinner: 'monkey' }).start()
    shell.exec(`${yarn} build:${env}`, { silent: true }, function(code, stdout, stderr) {
        spinner.stop()
        if (code === 0 && deployEnv) {
            deployFn(deployEnv)
        } else {
            console.log(stdout, stderr)
        }
    })
}

inquirer
    .prompt([
        {
            type: 'list',
            name: 'environment',
            message: chalk.blueBright(result.q),
            prefix: '',
            suffix: '',
            choices: result.list,
        },
        {
            type: 'confirm',
            name: 'build',
            message: chalk.blueBright('是否重新打包?'),
            default: false,
            when: () => executeType === 'deploy'
        },
    ])
    .then((answers) => {
        const env = answers.environment
        const build = answers.build

        if (executeType === 'build') {
            buildFn(env)
        } else if (executeType === 'deploy') {
            deployFn(env, build)
        }
    })
    .catch((error) => {
        console.log('er', error)
    })
