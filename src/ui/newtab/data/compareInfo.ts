import { InfoConfigList, InfoList } from "definitions";
import { switchCards } from "./switchCard";

function getValueFromTaobao(html: string) {
  const regex = /name\=\"current_price\" value= \"(.*)\"/;
  const res = html.match(regex);
  const number = res[1] || "未找到对比值";
  return number;
}
function getSwitchCardsInfo(cards) {
  return cards.map((cardInfo, key) => {
    const { id, name, myNumber } = cardInfo;
    return {
      enable: true,
      fetch:
        process.env.NODE_ENV === "production"
          ? `https://item.taobao.com/item.htm?id=${id}`
          : "/api/taobao/dargon.html",
      title: name,
      cb: async function(data: any) {
        data = await data.text();
        const number = getValueFromTaobao(data);
        const list = [
          {
            key: key,
            name: name,
            myNumber: myNumber,
            number,
            link: `https://item.taobao.com/item.htm?id=${id}`
          }
        ];
        return Promise.resolve(list);
      }
    };
  });
}
const infoConfig = getSwitchCardsInfo(switchCards);
export default infoConfig;
