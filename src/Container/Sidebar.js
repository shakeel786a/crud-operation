import React, { useState } from 'react';

function Sidebar() {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo  */}
            <a href="#" className="brand-link">
                <img src="./dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                    <img src="./dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                    <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;