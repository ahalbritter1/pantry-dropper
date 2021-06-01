import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Paginate from '../styles/Pagination.module.css'

const Pagination = ({ productsPerPage, totalNumberOfProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNumberOfProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul style={{ display: 'flex', flexDirection: 'row' }}>
                {pageNumbers.map(number => (
                    <div>
                        <button className={Paginate.button} style={{ height: '70px', padding: '0px 10px', margin: '0px 10px', fontFamily: 'Rubik', fontSize: '20px', border: '2px solid black' }} onClick={() => paginate(number)}> < ArrowRightAltIcon style={{ height: '20px', marginTop: '2px' }} /> {number} </button>
                    </div>
                )
                )}
            </ul>
        </nav>
    )
}

export default Pagination