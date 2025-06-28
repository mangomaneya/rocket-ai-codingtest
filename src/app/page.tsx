import SajuContent from "@/components/SajuContent";
import SajuHeader from "@/components/SajuHeader";
import SajuTable from "@/components/SajuTable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#F3F2EF]">
      <div className="flex w-full flex-col items-center justify-center bg-[#F3F2EF]">
        {/* 헤더 영역 */}
        <SajuHeader />
        {/* 콘텐츠 영역 */}
        <SajuContent />
        {/* 사주 테이블 영역 */}
        <SajuTable />
      </div>
    </main>
  );
}
