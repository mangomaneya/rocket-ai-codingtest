import { SajuRow } from "@/types/sajuType";

export const sajuData: SajuRow[] = [
  {
    label: { main: "", sub: "" },
    items: [
      { main: "時", sub: "" },
      { main: "日", sub: "" },
      { main: "月", sub: "" },
      { main: "年", sub: "" },
    ],
  },
  {
    label: { main: "十星", sub: "십성" },
    items: [
      { main: "傷官", sub: "상관" },
      { main: "比肩", sub: "비견" },
      { main: "傷官", sub: "상관" },
      { main: "傷官", sub: "상관" },
    ],
  },
  {
    label: { main: "天干", sub: "천간" },
    items: [
      {
        main: "壬",
        sub: "陽水",
        top: "임",
        color: "black",
        textColor: "white",
      },
      { main: "丁", sub: "陰火", top: "정", color: "red", textColor: "white" },
      {
        main: "癸",
        sub: "陰水",
        top: "계",
        color: "black",
        textColor: "white",
      },
      {
        main: "癸",
        sub: "陰水",
        top: "계",
        color: "black",
        textColor: "white",
      },
    ],
  },
  {
    label: { main: "地支", sub: "지지" },
    items: [
      {
        main: "寅",
        sub: "陽木",
        top: "인",
        color: "green",
        textColor: "white",
      },
      { main: "巳", sub: "陰火", top: "사", color: "red", textColor: "white" },
      {
        main: "亥",
        sub: "陰水",
        top: "해",
        color: "black",
        textColor: "white",
      },
      {
        main: "酉",
        sub: "陰金",
        top: "유",
        color: "black",
        textColor: "black",
      },
    ],
  },
  {
    label: { main: "十星", sub: "십성" },
    items: [
      { main: "比肩", sub: "비견" },
      { main: "劫財", sub: "겁재" },
      { main: "食神", sub: "식신" },
      { main: "偏財", sub: "편재" },
    ],
  },
  {
    label: { main: "十二運星", sub: "십이운성" },
    items: [
      { main: "死", sub: "사" },
      { main: "帝旺", sub: "제왕" },
      { main: "胎", sub: "태" },
      { main: "長生", sub: "장생" },
    ],
  },
  {
    label: { main: "十二神殺", sub: "십이신살" },
    items: [
      { main: "劫殺", sub: "겁살" },
      { main: "地殺", sub: "지살" },
      { main: "驛馬殺", sub: "역마살" },
      { main: "將星殺", sub: "장성살" },
    ],
  },
  {
    label: { main: "貴人", sub: "귀인" },
    items: [
      { main: "", sub: "없음" },
      { main: "", sub: "없음" },
      { main: "天乙", sub: "천을귀인" },
      [
        { main: "天乙", sub: "천을귀인" },
        { main: "太極", sub: "태극귀인" },
        { main: "文昌", sub: "문창귀인" },
      ],
    ],
  },
];
