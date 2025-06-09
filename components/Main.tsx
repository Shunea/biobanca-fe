import { useSidebarStore } from "@/stores/sidebar";
import { styled } from "@mui/material";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

const StyledMain = styled("main", {
  shouldForwardProp: (prop) => !["open", "homepage"].includes(prop as string),
})<{
  open: boolean;
  homepage: boolean;
}>(({ theme, open, homepage }) => ({
  flexGrow: 1,
  padding: homepage ? 0 : theme.spacing(3),
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: homepage ? 0 : open ? 270 : 65,
  width: `calc(100% - ${homepage ? 0 : open ? 270 : 65}px)`,

  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface MainProps extends PropsWithChildren<{}> {}

const Main: React.FC<MainProps> = ({ children }) => {
  const router = useRouter();
  const open = useSidebarStore((state) => state.sidebarOpen);

  const homepage = router.pathname === "/";

  return (
    <StyledMain homepage={homepage} open={open}>
      {children}
    </StyledMain>
  );
};

export default Main;
