import React from 'react';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
    {/* Twitter Icon */}
     <TwitterIcon className="sidebar__twitterIcon" />

    {/* Option */}
    <SidebarOption text="Home" Icon={HomeIcon} />
    <SidebarOption text="Search" Icon={SearchIcon} />
    <SidebarOption text="Notification" Icon={NotificationsNoneIcon} />
    <SidebarOption text="Message" Icon={MailOutlineIcon} />
    <SidebarOption text="Bookmark" Icon={BookmarkBorderIcon} />
    <SidebarOption text="List" Icon={ListAltIcon} />
    <SidebarOption text="Profile" Icon={PermIdentityIcon} />
    <SidebarOption text="More" Icon={MoreHorizIcon} />

    {/* Tweet Button */}
    <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar