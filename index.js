const fs = require("fs");

const {
  createLegoIndexFusionUrlByKeys,
  createLegoIndexFusionUrl,
  createBargainIndexFusionUrl,
  createBargainMineFusionUrl,
  createBargainDetailFusionUrl,
} = require("./fusion-url");

// const url = createLegoFusionUrl("bigwheel");
// const urls = createLegoIndexFusionUrlByKeys([

// ]);

// console.log(createBargainIndexFusionUrl());
const url = createBargainMineFusionUrl();

// Requiring module
const reader = require("xlsx");

const fusionUrlFileName = "./fusion-domain.xlsx";
// Reading our test file
const fusionDomainFileIsExit = fs.existsSync(fusionUrlFileName);
if (fusionDomainFileIsExit) {
  fs.unlinkSync(fusionUrlFileName);
}

let legoIndexPageTemplate = [
  {
    name: "大转盘（乐高）",
    templateKey: "bigwheel",
  },

  {
    name: "刮刮卡（乐高）",
    templateKey: "scratch",
  },
  {
    name: "砸金蛋（乐高）",
    templateKey: "egg",
  },
  {
    name: "摇一摇（乐高）",
    templateKey: "shake",
  },
  {
    name: "消消乐（乐高）",
    templateKey: "elimination",
  },
  {
    name: "摇摇乐（乐高）",
    templateKey: "shakedice",
  },
  {
    name: "签到摇奖机（乐高）",
    templateKey: "armbandit",
  },
  {
    name: "扭蛋机（乐高）",
    templateKey: "twistEgg",
  },
  {
    name: "语音红包（乐高）",
    templateKey: "voice",
  },
  {
    name: "整蛊大师（乐高）",
    templateKey: "fool",
  },
  {
    name: "微助力（乐高）",
    templateKey: "assistance",
  },
  {
    name: "拆礼盒（乐高）",
    templateKey: "box",
  },
  {
    name: "红包也疯狂（乐高）",
    templateKey: "redpacket",
  },
  {
    name: "睡神大作战（乐高）",
    templateKey: "teacher",
  },
];
let bargainPageTemplate = [
  {
    name: "砍价首页",
    templateKey: "index",
  },
  {
    name: "砍价详情",
    templateKey: "detail",
  },
  {
    name: "我的砍价",
    templateKey: "mine",
  },
];
let needCreateBargain = true;
let legoIndexPagesJson = legoIndexPageTemplate.map((item) => {
  const url = createLegoIndexFusionUrl(item.templateKey);
  return {
    name: item.name,
    qa: url,
    online: url,
  };
});
if (needCreateBargain) {
  legoIndexPagesJson = [
    ...legoIndexPagesJson,
    ...bargainPageTemplate.map((item) => {
      let url = "";
      switch (item.templateKey) {
        case "index":
          url = createBargainIndexFusionUrl();
          break;
        case "detail":
          url = createBargainDetailFusionUrl();
          break;
        default:
          url = createBargainMineFusionUrl();
          break;
      }
      return {
        name: item.name,
        qa: url,
        online: url,
      };
    }),
  ];
}

fs.writeFileSync(fusionUrlFileName, "", { flag: "wx" });
// debugger
const file = reader.readFile(fusionUrlFileName);
const ws = reader.utils.json_to_sheet(legoIndexPagesJson);

reader.utils.book_append_sheet(file, ws, "Sheet2");

// Writing to our file
reader.writeFile(file, fusionUrlFileName);

// console.log(urls);
