import { Route, Routes } from 'react-router-dom';
import Contacts from '../Contacts/Contacts';
import Delivery from '../Delivery/Delivery';
import Info from '../Info/Info';

function InfoRoutes() {
  return (
    <Routes>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/info" element={<Info />} />
      <Route path="/delivery" element={<Delivery />} />
    </Routes>
  );
}

export default InfoRoutes;
