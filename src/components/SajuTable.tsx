"use client";
import { useSajuStore } from "@/app/provider";
import sajuData from "@/data/sajuData";
import renderSajuItem from "@/utils/renderSajuItem";

const SajuTable = () => {
  const { userName, userBirth } = useSajuStore((state) => state);
  const sajuHeader = ["時", "日", "月", "年"];
  
  return (
    <div className="relative m-4 text-center">
      {/* 유저 정보 */}
      <div>
        <h1>{userName}님의 사주</h1>
        <h2>{userBirth}</h2>
      </div>
      {/* 사주 테이블 영역 */}
      <div className="mx-auto max-w-md">
        {/* 테이블 헤더 */}
        <div className="grid grid-cols-5">
          <div className="p-2 font-semibold"></div>
          {sajuHeader.map((label, idx) => (
            <div key={idx} className="p-2 text-center text-sm font-semibold">
              {label}
            </div>
          ))}
        </div>

        {/* 테이블 본문 */}
        {sajuData.map((row, rowIndex) => (
          <div
            key={`${row.label}-${rowIndex}`}
            className="grid grid-cols-5 gap-0"
          >
            {/* 행 레이블 */}
            <div className="flex flex-col items-center justify-center p-2 font-medium">
              <div>{row.label.main}</div>
              <div className="text-xs text-gray-600">({row.label.sub})</div>
            </div>

            {/* 행 데이터 */}
            {row.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex min-h-[60px] flex-col items-center justify-center"
              >
                {renderSajuItem(item)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SajuTable;
