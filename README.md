# nest 学习

## 指令

### nest -h

new|n [options] [name] Generate Nest application.  
 build [options] [app] Build Nest application.  
 start [options] [app] Run Nest application.  
 info|i Display Nest project details.  
 add [options] <library> Adds support for an external library to your project.  
 generate|g [options] <schematic> [name] [path] Generate a Nest element.

### nest generate -h

-d, --dry-run Report actions that would be taken without writing out results.  
 -p, --project [project] Project in which to generate files.指定生成代码在哪个子项目  
 --flat 扁平化,不生成对应目录  
 --no-flat 生成对应目录  
 --spec 生成测试文件 (default: true)  
 --spec-file-suffix [suffix] 自定义文件后缀.  
 --skip-import 跳过导入，指定不在 AppModule 里引入 (default: false)  
 --no-spec 不生成测试文件  
 -c, --collection [collectionName] Schematics collection to use.  
 -h, --help Output usage information.

## 创建项目

- nest new 快速创建项目
- nest generate 快速生成各种代码
- nest build 使用 tsc 或者 webpack 构建代码
- nest start 启动开发服务，支持 watch 和调试
- nest info 打印 node、npm、nest 包的依赖版本
- nest generate resource xxx 生成一个模块
