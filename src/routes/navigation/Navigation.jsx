import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/app.context';

import { signOutUser } from '../../utils/firebase/firebase';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>

          {currentUser ? (
            <button onClick={signOutUser}>
              Irten
            </button>
          ) : (
            <>
              <button>
                <Link className='nav-link' to='/auth'>
                  Saioa hasi
                </Link>
              </button>
            </>

          )}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;