const keys: string[] = [
  "css",
  "egg",
  "express",
  "github",
  "javascript",
  "js",
  "koa",
  "nest",
  "npm",
  "node",
  "react",
  "rollup",
  "ts",
  "typescript",
  "util",
  "vue",
  "web",
  "webpack",
  "前端",
  "性能",
  "监控",
  "工程化"
];

export function isMyKey(str:string){
    return keys.some(v=>str.toLocaleLowerCase().includes(v))
}