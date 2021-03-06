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
  "工程化",
  "微信",
  "小程序",
  "机器人",
  "CRM",
  "基础",
  "面试",
  "架构",
  "小米",
  "网易",
  "华为",
  "腾讯"
];

export function isMyKey(str: string) {
  return keys.some((v) => str.toLocaleLowerCase().includes(v));
}
