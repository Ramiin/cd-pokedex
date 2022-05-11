import React from "react";

export default function Pgination(props) {
  let isFirstPage = props.currentPage === 1 ? "disabled" : "";
  let isLastPage =
    props.currentPage === Math.ceil(props.totalPokemons / props.cardsInPage)
      ? "disabled"
      : "";

  let { currentPage, setPagina } = props;

  function setActualPage(number) {
    if((number>=188)){
      setPagina(187);

    }
    else if ((number <= 0)) {
      setPagina(1);

    }
    else{
      setPagina(number);

    }
  }

  return (
    <div>
      <ul className="pagination">
        <li>
          <a
            href="#"
            className={`first ${isFirstPage}`}
            onClick={() => setActualPage(currentPage - 1)}
          >
            Previous
          </a>
        </li>
        <li>
          <input type="text" onChange={(e)=> setActualPage(parseInt(e.target.value))} />
        </li>

        <li>
          <a
            href="#"
            className={`second ${isLastPage}`}
            onClick={() => setActualPage(currentPage + 1)}
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}
