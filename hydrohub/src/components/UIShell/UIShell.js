import React from 'react';
import { Email20 } from "@carbon/icons-react";
import { User20 } from "@carbon/icons-react";
import { Fade16 } from "@carbon/icons-react";
import { Search20 } from "@carbon/icons-react";
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
                <HeaderName href="#" prefix="">
                HydroHub
                </HeaderName>
                <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Messages" onClick={() => {}}>
                    <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Messages" onClick={() => {}}>
                    <Email20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Profile" onClick={() => {}}>
                    <User20 />
                </HeaderGlobalAction>
                </HeaderGlobalBar>
                <SideNav aria-label="Side navigation" isRail expanded={isSideNavExpanded}>
                <SideNavItems>
                    <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    Dashboard
                    </SideNavLink>
                    <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    Causes
                    </SideNavLink>
                    <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    World Map
                    </SideNavLink>
                    <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                    Transaction History
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