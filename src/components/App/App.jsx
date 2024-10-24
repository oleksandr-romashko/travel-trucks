import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "@/components";
import "./App.css";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("@/pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("@/pages/DetailsPage/DetailsPage"));
const Features = lazy(() => import("@/components/Features/Features"));
const Reviews = lazy(() => import("@/components/Reviews/Reviews"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));

const App = () => {
  // TODO: ADD FALLBACK LOADER TO Suspense, e.g. fallback={<Loader />
  // TODO: ADD ToastContainer at the component end
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<DetailsPage />}>
              <Route index element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
