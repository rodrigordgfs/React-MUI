import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Divider,
  Drawer,
  IconButton,
  List,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import AppBar from "@mui/material/AppBar/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../contexts/DrawerContext";
import { ListItemLink } from "../ListItemLink";

interface IProps {
  children: React.ReactNode;
}

export const MenuLateral = ({ children }: IProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { isDrawerOpen, toogleDrawerOpen, drawerOptions } = useDrawerContext();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {smDown && (
            <IconButton
              onClick={toogleDrawerOpen}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, ml: smDown ? 0 : theme.spacing(28) }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            color="#fff"
            sx={{ flexGrow: 1, ml: smDown ? 0 : theme.spacing(28) }}
          >
            React + TS + Material UI
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toogleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((option) => (
                <ListItemLink
                  key={option.path}
                  icon={option.icon}
                  label={option.label}
                  to={option.path}
                  onClick={smDown ? toogleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
