const esbuild = require('esbuild');
const glob = require('glob');
const { sassPlugin } = require('esbuild-sass-plugin');

let _debug = false;
const _host = 'localhost';
const _port = 19999;

//----------------------------- 处理参数 -------------------------------
// process.argv 的结构如下:
// [
//   '/path/to/node',    // 第一个元素：node 可执行文件的路径
//   '/path/to/app.js',  // 第二个元素：你执行的脚本文件的路径
//   'arg1',             // 第三个元素：第一个传入的参数
//   'arg2',             // 第四个元素：第二个传入的参数
//   'key1=value1'       // ...以此类推
// ]
if (process.argv.includes('debug')) {
  _debug = true;
}

async function startDevServer() {
  // TypeScript 构建配置
  const tsConfig = {
    // esbuild 本身并不支持通配符, 需要通过 golb 生成文件列表
    entryPoints: glob.sync('src/script/**/*.ts'),
    outdir: 'dist/',
    // 多入口文件需要以 outbase 的路径为基准, 
    // 才能在 outdir 保持原有的文件夹结构
    outbase: 'src/',
    // 当 bundle 为 false 的时候, 
    // esbuild 就 [不会] 再去查找入口文件又引用了哪些文件从而再去编译哪些文件了
    bundle: false,
    sourcemap: true,
    // 在这里注入 __DEBUG 的定义
    // 原理是编译时把 __DEBUG 替换为 'true' 或者 'false'
    define: {
      __DEBUG: _debug ? 'true' : 'false'
    }
  };

  // SCSS 构建配置
  const scssConfig = {
    entryPoints: glob.sync('src/**/*.scss'),
    outdir: 'dist/',
    // 多入口文件需要以 outbase 的路径为基准, 
    // 才能在 outdir 保持原有的文件夹结构
    outbase: 'src/',
    bundle: false,
    sourcemap: true,
    plugins: [sassPlugin()],
  };

  // 1. 创建两个独立的构建上下文
  const tsCtx = await esbuild.context(tsConfig);
  const scssCtx = await esbuild.context(scssConfig);

  // 2. 启动开发服务器
  // 这里 serve() 方法会自动开启 watch 模式
  // host 和 port 是可选的，可根据需要配置
  Promise.all([
    scssCtx.watch(),
    // context.server = watch + server
    // 用哪个 context 启动server 都可以
    tsCtx.serve({
      servedir: '.',
      host: _host,
      port: _port,
    })
  ]);

  console.log(`Development server is running at http://${_host}:${_port}`);
  console.log('Watching for file changes...');
}

startDevServer().catch((err) => {
  console.error('An error occurred:', err);
  process.exit(1);
});