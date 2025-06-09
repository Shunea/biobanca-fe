import useLogout from "@/hooks/queries/useLogout";
import useUser from "@/hooks/queries/useUser";
import { useSidebarStore } from "@/stores/sidebar";
import {
  Container,
  Divider,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { LinkBehaviour } from "../styles/theme";

// const drawerWidth = 270;

interface AppBarProps extends MuiAppBarProps {
  homepage?: boolean;
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => !["homepage", "open"].includes(prop as string),
})<AppBarProps>(({ theme, open, homepage }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(!homepage && {
    marginLeft: 65,
    width: `calc(100% - 65px)`,
  }),
  ...(open && {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const pages = ["Acasă", "Formulare", "Registru", "Setări"];

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const open = useSidebarStore((state) => state.sidebarOpen);
  const { isSuccess, data } = useUser();
  const user = data?.data;
  const { refetch } = useLogout({
    enabled: false,
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const fullPath = router.pathname;
  const activePage =
    fullPath === "/"
      ? fullPath
      : fullPath.split.length > 1
      ? fullPath.split("/")[1]
      : fullPath;
  const homepage = activePage === "/";
  const notHomepage = !homepage;
  const registruPacient = activePage === "/registru/[nume]";

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position={homepage ? "absolute" : "static"}
      homepage={homepage}
      open={notHomepage ? open : false}
      sx={{ boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: "space-around",
            p: "20px 40px",
          }}
        >
          {!registruPacient && (
            <Link href="/" underline="none">
              <Image src="/usmf-logo.svg" alt="logo" width={31} height={56} />
              <Image src="/ANCD-logo.svg" alt="logo" width={131} height={56} />
            </Link>
          )}

          {registruPacient && !open && (
            <Link href="/" underline="none">
              <Image src="/usmf-logo.svg" alt="logo" width={31} height={56} />
              <Image src="/ANCD-logo.svg" alt="logo" width={131} height={56} />
            </Link>
          )}

          <Stack
            direction="row"
            mt={2}
            ml={registruPacient && open ? 6 : 0}
            spacing={6}
          >
            {pages.map((page) => (
              <Link
                key={page}
                component={LinkBehaviour}
                href={`${
                  page === "Acasă"
                    ? "/"
                    : "/" + page.toLowerCase().replace("ă", "a")
                }`}
                variant="h6"
                underline="none"
                color={
                  activePage === `${page.toLowerCase().replace("ă", "a")}`
                    ? "#076AC9"
                    : page === "Acasă" && homepage
                    ? "#076AC9"
                    : "text.primary"
                }
                sx={{
                  fontWeight:
                    (activePage === `${page.toLowerCase().replace("ă", "a")}` &&
                      700) ||
                    (page === "Acasă" && homepage && 700) ||
                    500,
                  ml: 4,
                  "&:hover": {
                    color: "#076AC9",
                  },
                }}
              >
                {page}
              </Link>
            ))}
          </Stack>

          {isSuccess && user && (
            <>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Stack>
                  <Typography color="text.primary" fontSize={16} fontWeight={500}>
                    {user.name + " " + user.lastname}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Stack>
                      <Typography variant="subtitle1" fontWeight={700} color="#343D70">ID: {user.id}</Typography>
                      <Typography variant="subtitle1" fontWeight={700} color="#343D70">
                        {user.rol.replace("_", " ")}
                      </Typography>
                    </Stack>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        alignSelf: "center",
                        backgroundColor: "#A3A3A3",
                        height: 45,
                      }}
                    />
                    <Stack>
                      <Typography variant="subtitle1" mr={2.5} fontWeight={700} color="#343D70">
                        {user.imsp.name}
                      </Typography>
                    </Stack>
                    <Image
                      src="/arrow-right.svg"
                      alt="arrow right"
                      width={22}
                      height={22}
                      style={{ cursor: "pointer" }}
                      onClick={handleClick}
                    />
                  </Stack>
                </Stack>
              </Stack>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openMenu}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  sx: {
                    borderRadius: "20px",
                    overflow: "visible",
                    ml: 1,
                    mt: "30px",
                    "& .MuiMenuItem-root": {
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{
                    backgroundColor: "action.active",
                    borderRadius: "20px",
                    pl: 3,
                    pr: 6,
                    py: 3,
                    mt: -1,
                    mb: 2,
                  }}
                >
                  <Stack>
                    <Typography color="text.secondary" fontSize={20}>
                      {user.name + " " + user.lastname}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      fontSize={15}
                      fontWeight={400}
                      ml={0.7}
                    >
                      {user.username}
                    </Typography>
                  </Stack>
                </Stack>

                <Stack sx={{ p: "0 20px" }}>
                  <MenuItem>
                    <Image
                      src="/super-admin.svg"
                      alt="super-admin"
                      width={29}
                      height={29}
                      style={{ marginRight: 18}}
                    />{" "}
                    {user.rol.replace("_", " ")}
                  </MenuItem>
                  <MenuItem>
                    <Image
                      src="/id.svg"
                      alt="id"
                      width={22}
                      height={22}
                      style={{ marginLeft: 5, marginRight: 20}}
                    />{" "}
                    ID: {user.id}
                  </MenuItem>

                  <MenuItem>
                    <Image
                      src="/telefon.svg"
                      alt="telefon"
                      width={19}
                      height={19}
                      style={{ marginLeft: 5, marginRight: 20 }}
                    />{" "}
                    {user.phone}
                  </MenuItem>

                  <MenuItem onClick={() => refetch()}>
                    <Image
                      src="/logout.svg"
                      alt="logout"
                      width={18}
                      height={18}
                      style={{ marginLeft: 10, marginRight: 20 }}
                    />{" "}
                    Logout
                  </MenuItem>
                </Stack>

                <Divider
                  variant="middle"
                  sx={{ backgroundColor: "#A3A3A3", my: 1 }}
                />
                <MenuItem sx={{ justifyContent: "center" }}>
                  <button
                    style={{
                      background: "#343d70",
                      borderRadius: "20px",
                      color: "white",
                      padding: "3px 30px",
                      cursor: "pointer",
                    }}
                    onClick={() => router.push("/setari")}
                  >
                    Setări
                  </button>
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>

      {notHomepage && (
        <Stack
          sx={{
            background: 'linear-gradient(89.97deg, #02509B 24.04%, #076AC9 76.83%)',
            height: 36,
          }}
        ></Stack>
      )}
    </AppBar>
  );
};

export default Header;
