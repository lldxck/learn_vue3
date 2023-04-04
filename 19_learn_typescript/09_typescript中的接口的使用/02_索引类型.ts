// 通过interface来定义索引类型
interface IndexLanguage {
  [index: number]: string;
}

const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "javascript",
  3: "vue",
};

interface ILanguageYear {
  [name: string]: number;
}

const languageYear: ILanguageYear = {
  c: 1972,
  java: 1995,
  JavaScript: 1996,
  TypeScript: 2014,
};
