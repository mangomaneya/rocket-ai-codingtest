import { SajuItems } from "@/types/sajuType";

const renderSajuItem = (items: SajuItems) => {
  if (Array.isArray(items)) {
    return (
      <>
        {items.map((arrItems, arrIdx) => {
          return (
            <div className="flex flex-col" key={`${arrItems.main}-${arrIdx}`}>
              {arrItems.main && <div>{arrItems.main}</div>}
              {arrItems.sub && <div className="text-sm">({arrItems.sub})</div>}
            </div>
          );
        })}
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col">
        {items.top && <div className="text-xs">{items.top}</div>}
        {items.main && <div className="text-md">{items.main}</div>}
        {items.sub && <div className="text-sm">({items.sub})</div>}
      </div>
    </>
  );
};

export default renderSajuItem;
