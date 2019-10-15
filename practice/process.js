const processEnvFn = () => {
    /**
   * @des  process 是全局提供，不需要用 require 引入
   */

    /**
      * @des 使用process.env
      */
    console.log('processEnv: ' + JSON.stringify(process.env.HOME));
    process.env.HEWITT = 'hew'
    console.log('auther: ' + process.env.HEWITT);
}



const processFn = () => {
    const handleInput = (input) => {
        if(input === 'student') {
            process.stdout.write('there is student here: hew\n')
        } else if(input === 'score') {
            process.stdout.write('the score are: 88\n')
        } else {
            process.stdout.write('some other input message\n')
            process.stdin.emit('end');
        }
    }
    process.stdin.setEncoding('utf-8')
    process.stdin.on('readable', () => {
        let chunk = null;
        while ((chunk = process.stdin.read()) !== null) {         
            if (typeof chunk === 'string') {
                chunk = chunk.slice(0, -2);
                if(chunk) {
                    handleInput(chunk)
                } else {
                    process.stdin.emit('end');
                }
            }
        }
    })
    process.stdin.on('end', () => {
        process.stdout.write('结束\n');
        process.exit()
    })
}

processFn()