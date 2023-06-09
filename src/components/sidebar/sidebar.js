import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronRight} from "react-icons/bi"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return <>
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <Link to="/all-blogs" className="app-brand-link">
                    <span className="app-brand-logo demo">
                    </span>
                    <span className="app-brand-text fs-4 menu-text  ms-2"> 
                        Dellatecnica
                     </span> 
                </Link>

                 <a href="" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"> 
                    <i className="bx bx-chevron-left bx-sm align-middle"></i> 
                    {/* <BiChevronRight/> */}
                 </a> 
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                {/* Dashboard  */}
                <li className="menu-item active">
                    {/* <a href="index.html" className="menu-link"> */}
                    <Link to="/dashboard" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                        </Link>
                    {/* </a> */}
                </li>

                {/* <!-- Layouts --> */}
                <li className="menu-item">
                    <span className="menu-link menu-toggle" onClick={handleClick}>
                        {/* <i className="menu-icon tf-icons bx bx-layout"></i> */}
                        <div data-i18n="Layouts">Blogs Management</div>
                    </span>

                    <ul className={`menu-sub ${isOpen ? 'menu-sub-open' : ''}`}>
                        <li className="menu-item">
                            <Link to="/all-blogs" className="menu-link">
                                <div data-i18n="Without menu">All Blogs </div>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/create-blog" className="menu-link">
                                <div data-i18n="Without navbar">Add New Blog</div>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/comments" className="menu-link">
                                <div data-i18n="Without navbar">All Comments</div>
                            </Link>
                        </li>
                    </ul>

                    <style>
                        {`
          .menu-sub {
            display: none;
            transition: all 0.3s ease-in-out;
          }

          .menu-sub-open {
            display: block;
          }
        `}
                    </style>
                </li>

                <li className="menu-header small text-uppercase">
                    {/* <span className="menu-header-text">Pages</span> */}
                </li>
                <li className="menu-item">
                    {/* <a href="" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-dock-top"></i>
                        <div data-i18n="Account Settings">Account Settings</div>
                    </a> */}
                    <ul className="menu-sub">
                        {/* <li className="menu-item">
                            <a href="pages-account-settings-account.html" className="menu-link">
                                <div data-i18n="Account">Account</div>
                            </a>
                        </li> */}
                        {/* <li className="menu-item">
                            <a href="pages-account-settings-notifications.html" className="menu-link">
                                <div data-i18n="Notifications">Notifications</div>
                            </a>
                        </li> */}
                        {/* <li className="menu-item">
                            <a href="pages-account-settings-connections.html" className="menu-link">
                                <div data-i18n="Connections">Connections</div>
                            </a>
                        </li> */}
                    </ul>
                </li>
                {/* <li className="menu-item">
                    <a href="" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
                        <div data-i18n="Authentications">Authentications</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="auth-login-basic.html" className="menu-link" >
                                <div data-i18n="Basic">Login</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="auth-register-basic.html" className="menu-link" >
                                <div data-i18n="Basic">Register</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="auth-forgot-password-basic.html" className="menu-link" >
                                <div data-i18n="Basic">Forgot Password</div>
                            </a>
                        </li>
                    </ul>
                </li> */}
                {/* <li className="menu-item">
                    <a href="" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-cube-alt"></i>
                        <div data-i18n="Misc">Misc</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="pages-misc-error.html" className="menu-link">
                                <div data-i18n="Error">Error</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="pages-misc-under-maintenance.html" className="menu-link">
                                <div data-i18n="Under Maintenance">Under Maintenance</div>
                            </a>
                        </li>
                    </ul>
                </li> */}
                {/* <!-- Components --> */}
                {/* <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li> */}
                {/* <!-- Cards --> */}
                {/* <li className="menu-item">
                    <a href="cards-basic.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-collection"></i>
                        <div data-i18n="Basic">Cards</div>
                    </a>
                </li> */}
                {/* <!-- User interface --> */}
                {/* <li className="menu-item">
                    <a href="" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-box"></i>
                        <div data-i18n="User interface">User interface</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="ui-accordion.html" className="menu-link">
                                <div data-i18n="Accordion">Accordion</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-alerts.html" className="menu-link">
                                <div data-i18n="Alerts">Alerts</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-badges.html" className="menu-link">
                                <div data-i18n="Badges">Badges</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-buttons.html" className="menu-link">
                                <div data-i18n="Buttons">Buttons</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-carousel.html" className="menu-link">
                                <div data-i18n="Carousel">Carousel</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-collapse.html" className="menu-link">
                                <div data-i18n="Collapse">Collapse</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-dropdowns.html" className="menu-link">
                                <div data-i18n="Dropdowns">Dropdowns</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-footer.html" className="menu-link">
                                <div data-i18n="Footer">Footer</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-list-groups.html" className="menu-link">
                                <div data-i18n="List Groups">List groups</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-modals.html" className="menu-link">
                                <div data-i18n="Modals">Modals</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-navbar.html" className="menu-link">
                                <div data-i18n="Navbar">Navbar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-offcanvas.html" className="menu-link">
                                <div data-i18n="Offcanvas">Offcanvas</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-pagination-breadcrumbs.html" className="menu-link">
                                <div data-i18n="Pagination &amp; Breadcrumbs">Pagination &amp; Breadcrumbs</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-progress.html" className="menu-link">
                                <div data-i18n="Progress">Progress</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-spinners.html" className="menu-link">
                                <div data-i18n="Spinners">Spinners</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-tabs-pills.html" className="menu-link">
                                <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-toasts.html" className="menu-link">
                                <div data-i18n="Toasts">Toasts</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-tooltips-popovers.html" className="menu-link">
                                <div data-i18n="Tooltips & Popovers">Tooltips &amp; popovers</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="ui-typography.html" className="menu-link">
                                <div data-i18n="Typography">Typography</div>
                            </a>
                        </li>
                    </ul>
                </li> */}

                {/* <!-- Extended components --> */}
                {/* <li className="menu-item">
                    <a href="" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-copy"></i>
                        <div data-i18n="Extended UI">Extended UI</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
                                <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="extended-ui-text-divider.html" className="menu-link">
                                <div data-i18n="Text Divider">Text Divider</div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="menu-item">
                    <a href="icons-boxicons.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-crown"></i>
                        <div data-i18n="Boxicons">Boxicons</div>
                    </a>
                </li> */}

                {/* <!-- Forms & Tables --> */}
                {/* <li className="menu-header small text-uppercase"><span className="menu-header-text">Forms &amp; Tables</span></li>
            
                <li className="menu-item">
                    <a href="" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-detail"></i>
                        <div data-i18n="Form Elements">Form Elements</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="forms-basic-inputs.html" className="menu-link">
                                <div data-i18n="Basic Inputs">Basic Inputs</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="forms-input-groups.html" className="menu-link">
                                <div data-i18n="Input groups">Input groups</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-detail"></i>
                        <div data-i18n="Form Layouts">Form Layouts</div>
                    </a>
                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href="form-layouts-vertical.html" className="menu-link">
                                <div data-i18n="Vertical Form">Vertical Form</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href="form-layouts-horizontal.html" className="menu-link">
                                <div data-i18n="Horizontal Form">Horizontal Form</div>
                            </a>
                        </li>
                    </ul>
                </li>
            
                <li className="menu-item">
                    <a href="tables-basic.html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-table"></i>
                        <div data-i18n="Tables">Tables</div>
                    </a>
                </li> */}
                {/* <!-- Misc --> */}
                {/* <li className="menu-header small text-uppercase"><span className="menu-header-text">Misc</span></li>
                <li className="menu-item">
                    <a
                        href="https://github.com/themeselection/sneat-html-admin-template-free/issues"

                        className="menu-link"
                    >
                        <i className="menu-icon tf-icons bx bx-support"></i>
                        <div data-i18n="Support">Support</div>
                    </a>
                </li>
                <li className="menu-item">
                    <a
                        href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"

                        className="menu-link"
                    >
                        <i className="menu-icon tf-icons bx bx-file"></i>
                        <div data-i18n="Documentation">Documentation</div>
                    </a>
                </li> */}
            </ul>
        </aside>
    </>
}

export default Sidebar;