import React from 'react';
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
    Header,
    HeaderMenuButton,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
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
            <Header aria-label="IBM Platform Name">
                <SkipToContent />
                <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
                />
                <HeaderName href="#" prefix="IBM">
                [Platform]
                </HeaderName>
                <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                    <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                    <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
                    <AppSwitcher20 />
                </HeaderGlobalAction>
                </HeaderGlobalBar>
                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                <SideNavItems>
                    <SideNavMenu title="Category title">
                    <SideNavMenuItem href="javascript:void(0)">
                        Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                        aria-current="page"
                        href="javascript:void(0)"
                    >
                        Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        Link
                    </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="Category title">
                    <SideNavMenuItem href="javascript:void(0)">
                        Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                        aria-current="page"
                        href="javascript:void(0)"
                    >
                        Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        Link
                    </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="Category title">
                    <SideNavMenuItem href="javascript:void(0)">
                        Link
                    </SideNavMenuItem>
                    <SideNavMenuItem
                        aria-current="page"
                        href="javascript:void(0)"
                    >
                        Link
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        Link
                    </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavLink href="javascript:void(0)">
                    Link
                    </SideNavLink>
                    <SideNavLink href="javascript:void(0)">
                    Link
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