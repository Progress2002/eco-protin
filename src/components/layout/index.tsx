import { ScrollToTop } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
}
