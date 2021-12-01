import { Fragment } from 'react';
import MainHeader from './main-header';

type Props = {};
const Layout: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
