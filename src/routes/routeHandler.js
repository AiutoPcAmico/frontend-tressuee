import { Navigate, Route, Routes } from "react-router-dom";
import { HomePages } from "../pages/homePages";
import { ContactForm } from "../pages/ContactForm";
import { ListProducts } from "../pages/listProducts";
import { ProductDetail } from "../pages/productDetail";
import { TowersMap } from "../pages/towersMap";
import { About } from "../pages/about";
import { CartPage } from "../pages/cartPage";
import { LoginPage } from "../pages/loginPage";
import { Error404 } from "../pages/error404";
import { AccountPage } from "../pages/accountPage";
import { TestingPage } from "../pages/testingPage";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./protectedRoute";

function RouterHandler({ setSelezionato }) {
  const session = useSelector((state) => state.sessionInfo.sessionExpire);

  return (
    <Routes>
      <Route index element={<HomePages setSelezionato={setSelezionato} />} />
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="/contacts" element={<ContactForm />} />
      <Route path="/shop" element={<ListProducts />} />
      <Route path="shop/productDetails/:id" element={<ProductDetail />} />
      <Route path="/maps" element={<TowersMap />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Error404 />} />

      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />

      <Route path="/testing" element={<TestingPage />} />

      {/*testingppage */}
    </Routes>
  );
}

export { RouterHandler };
