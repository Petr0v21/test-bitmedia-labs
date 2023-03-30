import React, {useEffect, useState} from "react";
import NextPageIcon from "../../../../static/images/Line 9.svg";
import NextPageIconDisable from "../../../../static/images/Disabled.svg";

const Pagination: React.FC<{
  pages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}> = ({currentPage, pages, setCurrentPage}) => {
  const [panelPageFirstNumber, setPanelPageFirstNumber] = useState(1);
  const [panelPageLastNumber, setPanelPageLastNumber] = useState<number>(5);
  const [panelPages, setPanelPages] = useState<number[]>([]);

  useEffect(() => {
    if (pages < 5) {
      setPanelPages([
        ...Array.from({length: pages}, (item, index) => index + 1),
      ]);
    } else {
      setPanelPages([
        ...Array.from(
          {length: 5},
          (item, index) => panelPageFirstNumber + index
        ),
      ]);
    }
  }, [currentPage, pages]);

  const prev = () => {
    if (currentPage === panelPageFirstNumber) {
      if (panelPageFirstNumber - 5 > 0) {
        setPanelPageFirstNumber(panelPageFirstNumber - 5);
        setPanelPageLastNumber(panelPageLastNumber - 5);
      } else {
        setPanelPageFirstNumber(panelPageFirstNumber - (pages % 5));
        setPanelPageLastNumber(panelPageLastNumber - (pages % 5));
      }
    }
    setCurrentPage(currentPage - 1);
  };

  const next = () => {
    if (currentPage === panelPageLastNumber) {
      if (panelPageLastNumber + 5 <= pages) {
        setPanelPageFirstNumber(panelPageFirstNumber + 5);
        setPanelPageLastNumber(panelPageLastNumber + 5);
      } else {
        setPanelPageFirstNumber(panelPageFirstNumber + (pages % 5));
        setPanelPageLastNumber(panelPageLastNumber + (pages % 5));
      }
    }
    setCurrentPage(currentPage + 1);
  };

  if (!pages) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pagination">
      {currentPage - 1 > 0 ? (
        <img
          alt="next"
          src={NextPageIcon}
          onClick={() => prev()}
          className="pagination-prev"
        />
      ) : (
        <img alt="next" src={NextPageIconDisable} className="pagination-prev" />
      )}
      {panelPages.map((item, index) => (
        <div
          key={"page" + index}
          className={
            currentPage === item ? "pagination-current-page" : "pagination-page"
          }
          onClick={() => setCurrentPage(item)}
        >
          {item}
        </div>
      ))}
      {currentPage + 1 <= pages ? (
        <img alt="next" src={NextPageIcon} onClick={() => next()} />
      ) : (
        <img alt="next" src={NextPageIconDisable} />
      )}
    </div>
  );
};

export default Pagination;
