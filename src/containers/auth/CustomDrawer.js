import React from "react";
import {DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const Sidebar = ({props}) => {
    return (
        <DrawerContentScrollView>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default Sidebar;
