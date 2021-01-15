import React, {FC} from 'react';

type Props = {
    currentPage: number
    pagesCount: number
    prevPage: () => void
    nextPage: () => void
}
export const Pagination: FC<Props> = ({currentPage, pagesCount, prevPage, nextPage}) => {
    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={prevPage} disabled={currentPage === 1}>Previous
                        </button>
                    </li>
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href={'#'}>{currentPage}</a>
                    </li>
                    <li className={`page-item ${currentPage === pagesCount ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={nextPage}
                                disabled={currentPage === pagesCount}>Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
