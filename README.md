# node-koa

联调问题：
1.什么是跨域？在前端项目中调用api会出现CORS。怎么解决？
   跨域是由浏览器的同源策略所造成的，当页面和请求的协议，主机，端口不一致时，浏览器会判定两者不同源，从而产生跨域。
   常见的解决方案有： CORS、反代、JSONP 等
   CORS：
       需要后端在响应头中添加 Access-Control-Allow-* 头，告知浏览器通过此请求。


