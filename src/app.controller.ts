import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 方式一
  // constructor(private readonly appService: AppService) {}
  // 方式二
  /* @Inject(AppService)
  private readonly appService: AppService */
  // 方式三
  // constructor(@Inject('app_service') private readonly appService: AppService) {}
  /* constructor(@Inject('app_service') private readonly appService: AppService,
  @Inject('person') private readonly person: {name:string,age:number},
  @Inject('person2') private readonly person2: {name:string,age:number},
  // @Inject('person3') private readonly person3: {name:string,age:number},
  ) { } */
  // 方式四 标注在类或者方法参数上，表示该参数可选，不是必需的
  @Optional()
  @Inject('Guang')
  private readonly guang: Record<string,any> 
  constructor(@Optional() private appService:AppService) {}

  @Get()
  getHello(): string {
    // console.log('person3',this.person2);
    
    // debugger;
    return this.appService.getHello();
  }
}
