import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

interface LayoutProps extends PropsWithChildren<{}> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <Stack
      sx={{
        position: "relative",
        height: "100vh",
      }}
    >
      {router.pathname !== "/login" &&
        router.pathname !== "/forgot-password" &&
        router.pathname !== "/reset-password" &&
        router.pathname !== "/activate-account" && <Header />}

      {router.pathname !== "/" &&
        router.pathname !== "/login" &&
        router.pathname !== "/forgot-password" &&
        router.pathname !== "/reset-password" &&
        router.pathname !== "/activate-account" && <Sidebar />}

      <Main>{children}</Main>

      <footer
        style={{
          background: 'linear-gradient(89.97deg, #02509B 24.04%, #076AC9 76.83%)',
          // backgroundColor: "#06acaa",
          color: "#ffffff",
          fontWeight: 500,
          padding: "10px 0",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography>
          Proiect dezvoltat de echipa -{" "}
          <Link
            href="https://ishunea.io"
            style={{
              color: "#ffffff",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            iShunea Tech - info@ishunea.io
          </Link>
        </Typography>
      </footer>
    </Stack>
  );
};

export default Layout;
