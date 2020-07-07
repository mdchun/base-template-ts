import Test from './test'

function dec(target, prop, descriptor){
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
  name = 'Foo...'
  static name = 'foo'
  
  static get() {
    return this.name
  }
  
  @dec
  go (){
    new Test()
    console.log(this.name)
  }
  /**
   * 设置名字
   * @param  {string} name
   */
  set (name){
    this.name = name
  }
  /**
   * 测试用的
   * @param  {number} age 年龄
   * @param  {string} name 姓名
   * @returns {string} 返回一个字符串
   */
  test(age, name){
    return `${age}:${name}`
  }
}

export default Foo