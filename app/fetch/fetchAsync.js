
export const fetchAsync = (url,method,body,contentType) => {
  return fetch(url,{
      method:method,
      // headers:{
      //   //  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      //   // "Content-type":!contentType?"application/json":contentType,
      //   // "Origin": '*',
      //   // "Access-Control-Allow-Origin": '*'
      // },
      // MODE:'CORS',
      body:body
    });
}
