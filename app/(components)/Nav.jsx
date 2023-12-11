import React from 'react';
import Link from 'next/link'
import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Nav = () => {
  return (
    <nav>
      <div>
        <Link href='/'>
          <FontAwesomeIcon icon={faHome} className="icon"/>
        </Link>

        <Link href='/TicketPage/new'>
          <FontAwesomeIcon icon={faTicket} className="icon"/>
        </Link>
      </div>

      <div>
        <p className='text-default-text'>adriano.misina@gmail.com</p>
      </div>
    </nav>
  )
}

export default Nav