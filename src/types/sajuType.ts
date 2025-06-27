// 기본 아이템 타입
interface SajuItem {
  main: string;
  sub: string;
  top?: string; 
  color?: 'red' | 'black' | 'green' | 'white';
  textColor?: 'white' | 'black';
}

// 라벨 타입
interface SajuLabel {
  main: string;
  sub: string;
}

// 셀 타입 - 단일 아이템 또는 아이템 배열
export type SajuItems = SajuItem | SajuItem[];

// 행 타입
export interface SajuRow {
  label: SajuLabel;
  items: SajuItems[];
}