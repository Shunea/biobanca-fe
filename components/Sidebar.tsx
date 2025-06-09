import useLogout from "@/hooks/queries/useLogout";
import { useSidebarStore } from "@/stores/sidebar";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import Image from "next/image";
import { useRouter as useNavigation } from "next/navigation";
import { useRouter } from "next/router";

const ancd = "/ANCD-logo.svg";
const logo = "/usmf-logo.svg";

const drawerWidth = 270;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "fixed",
  height: "100vh",
  zIndex: 1201,

  "& .MuiPaper-root": {
    backgroundColor: "#e7e7e7",
    justifyContent: "space-between",
    position: "absolute",
  },

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const drawerItems = [
  {
    title: "Formulare",
    icon: "/formular-drawer.svg",
    href: "/formulare",
    path: "formulare",
  },
  {
    title: "Registru",
    icon: "/registru-01.svg",
    href: "/registru",
    path: "registru",
  },
  {
    title: "Setări",
    icon: "/Setting.svg",
    href: "/setari",
    path: "setari",
  },
  {
    title: "Contacte",
    icon: "/Phone.svg",
    href: "/contacte",
    path: "statistica",
  },
  {
    title: "Deconectare",
    icon: "/log-out-svgrepo-com.svg",
    href: "/logout",
    path: "logout",
  },
];

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [open, setOpen] = useSidebarStore((state) => [
    state.sidebarOpen,
    state.setSidebarOpen,
  ]);
  const { refetch } = useLogout({
    enabled: false,
  });

  const basePath = router.pathname.split("/")[1];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader
        sx={{
          justifyContent: open ? "flex-end" : "center",
          pr: "0",
        }}
      >
        <IconButton
          disableRipple
          aria-label="open/close drawer"
          edge="start"
          sx={{
            alignSelf: open ? "flex-start" : "center",
            backgroundColor: open ? "primary.main" : "transparent",
            borderRadius: "0",
            pr: !open ? "0" : "1",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          onClick={open ? handleDrawerClose : handleDrawerOpen}
        >
          <Image src="/hamburger.svg" alt="menu" width={25} height={16} />
        </IconButton>
      </DrawerHeader>

      <List sx={{ mt: -10 }}>
        {drawerItems.map((item) => (
          <ListItem
            key={item.title}
            disablePadding
            sx={{
              display: "block",
              mb: 2,
              backgroundColor: basePath === item.path ? "white" : "transparent",
              borderBottomRightRadius: "10px",
              filter:
                basePath === item.path
                  ? "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.15))"
                  : "none",
            }}
            onClick={() => {
              if (item.path === "logout") {
                refetch();
              } else {
                navigation.push(item.href);
              }
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Stack alignItems="center" sx={{ mb: 1 }}>
        <Image src={ancd} alt="logo" width={open? 100 : 61} height={ open? 100 : 56} />
        <Image
          src={logo}
          alt="logo"
          width={196}
          height={56}
        />
      </Stack>
    </Drawer>
  );
};

export default Sidebar;
