import Test from './test'

function dec(target:any, prop:any, descriptor:any){
  console.log(target)
  console.log(prop)
  console.log(descriptor)
  descriptor.lala = function(){
    return 111
  }
}
/**
 * Foo类，代表一个Foo
 * 
 */
class Foo{
  names = 'Foo..'
  static names:string = 'foo'

  static get() {
    return this.names
  }
  
  @dec
  go (){
    console.log(Test)
    new Test()
    console.log(11111111111111,this.names)
  }
  /**
   * 设置名字
   * @param  {string} newName
   */
  set (newName:string){
    this.names = newName
  }
  /**
   * 测试用的
   * @param  {number} age 年龄
   * @param  {string} name 姓名
   * @returns {string} 返回一个字符串
   */
  test(age:number, name:string):string{
    return `${age}:${name}`
  }
}

export default Foo