import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtestModule } from './atest/atest.module';
import { XxxModule } from './xxx/xxx.module';
import { PersonModule } from './person/person.module';
import { Person } from './person/entities/person.entity';

@Module({
  imports: [AtestModule, XxxModule, PersonModule],
  controllers: [AppController], //控制器负责处理传入的请求和向客户端返回响应。
  // providers:[AppService],//方式一 绑定controller.ts
  /* providers: [ // 方式二 绑定controller.ts
    {
      provide: AppService, //指定注入的 token
      useClass: AppService, //指定注入的对象的类
    },
  ], */
  providers: [ // 方式三
    {
      provide: 'app_service', //指定注入的 token
      useClass: AppService, //指定注入的对象的类
    }, {
      provide: 'person',
      useValue: {// 静态属性
        name: 'aaa',
        age:18
      }
    },
    {
      provide: 'person2',
      useFactory() { // 动态属性
        return {
          name: '小明',
          age:90
        }
      }
    },
    /* {
      provide: 'person3',
      useFactory(person:{name:string},appService:AppService) { // 动态属性
        return {
          name: person.name,
          desc:appService.getHello()
        }
      }
    } */
  ]
})
export class AppModule {}
