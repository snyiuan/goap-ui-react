import React from 'react';
import Proptypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}>
        {children}---
    </button>
)
Link.propTypes = {
    active: Proptypes.bool.isRequired,
    children: Proptypes.node.isRequired,
    onClick: Proptypes.func.isRequired
}
export default Link