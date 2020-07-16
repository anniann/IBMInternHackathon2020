import React from 'react';
import { Email20 } from "@carbon/icons-react";
import { User20 } from "@carbon/icons-react";
import { Fade16 } from "@carbon/icons-react";
import { Search20 } from "@carbon/icons-react";
import { Link } from "carbon-components-react";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import ToolbarSearch from "carbon-components-react/lib/components/ToolbarSearch";
import {
    Header,
    HeaderMenuButton,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    Search,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem
} from 'carbon-components-react/lib/components/UIShell';
import { NavLink } from "react-router-dom";

const UIShell = () => (
    <div className="container">
        <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
            <Header>
                <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
                />
                <HeaderName href="/" prefix="">
                <Link href="/" style={{ fontWeight: "bold", color: "#fff"}}>HydroHub</Link>
                </HeaderName>
                <HeaderGlobalBar>
                <Link href="/search" style={{ fontWeight: "bold", color: "#4287f5"}}>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                    <Search20 />
                </HeaderGlobalAction>
                </Link>
                <Link href="/messages" style={{ fontWeight: "bold", color: "#4287f5"}}>
                    <HeaderGlobalAction aria-label="Messages" onClick={() => {}}>
                        <Email20 />
                    </HeaderGlobalAction>
                </Link>
                <Link href="/donor-dashboard" style={{ fontWeight: "bold", color: "#4287f5"}}>
                    <HeaderGlobalAction aria-label="Profile" onClick={() => {}}>
                    <User20 />
                    </HeaderGlobalAction>
                </Link>
                </HeaderGlobalBar>
                <SideNav aria-label="Side navigation" isRail expanded={isSideNavExpanded}>
                <SideNavItems>
                    <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    <Link href="/causes">Causes</Link>
                    </SideNavLink>
                    <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    <Link href="/world-map">World Map</Link>
                    </SideNavLink>
                    <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    <Link href="/transaction-history">Transaction History</Link>
                    </SideNavLink>
                </SideNavItems>
                </SideNav>
            </Header>
            </>
        )}
        />
  </div>
)

export default UIShell;