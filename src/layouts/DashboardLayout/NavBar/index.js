import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import {
  AddBox as AddBoxIcon,
  Poll as BarChartIcon2,
  PhotoLibrary as PhotoLibraryIcon,
  ViewList as ViewListIcon,
  PieChart as PieChartIcon,
  Store as StoreIcon,
  BusinessCenter as BusinessCenterIcon,
  Settings as SettingsIcon2,
  LibraryBooks as LibraryBooksIcon
} from '@material-ui/icons';
import NavItem from './NavItem';

const items = [
  {
    href: '/app/dashboard',
    icon: PieChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/order',
    icon: AddBoxIcon,
    title: 'New Order'
  },
  {
    href: '/app/manage',
    icon: ViewListIcon,
    title: 'Manage Orders'
  },
  {
    href: '/app/library',
    icon: LibraryBooksIcon,
    title: 'Product Library'
  },
  {
    href: '/app/stock',
    icon: BarChartIcon2,
    title: 'Stock Availability'
  },
  {
    href: '/app/store',
    icon: StoreIcon,
    title: 'Store'
  },
  {
    href: '/app/billing',
    icon: BusinessCenterIcon,
    title: 'Billing'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon2,
    title: 'Settings'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      {/* <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Current Plan
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          FREE
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="primary"
            component="a"
            href="/app/"
            variant="contained"
          >
            Upgrade
          </Button>
        </Box>
      </Box> */}
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
