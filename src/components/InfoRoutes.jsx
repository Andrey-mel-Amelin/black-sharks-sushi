import { Route, Routes } from "react-router-dom"
import Contacts from "./Contacts"
import Delivery from "./Delivery";
import Info from "./Info";

function InfoRoutes() {
  return (
    <Routes>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/info" element={<Info />} />
      <Route path="/delivery" element={<Delivery />} />
    </Routes>
  );
}

export default InfoRoutes


/* <Route exact path="/contacts" component={contacts} />
      <Route exact path="/onas" component={onas} />
      <Route exact path="/dostavka" component={dostavka} />
      <Route exact path="/spec" component={spec} />  */