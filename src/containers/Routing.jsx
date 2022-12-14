import { Route, Routes } from 'react-router-dom';

import IndexPage from '../pages/index';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<IndexPage/>} />
      <Route path="" element={<IndexPage/>} />
      <Route path="*" element={<IndexPage/>} />
      <Route element={<IndexPage/>} />
    </Routes>
  );
}

export default Routing;
