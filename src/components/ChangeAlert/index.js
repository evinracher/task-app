import React from 'react';
import { withStorageListener } from './withStorageListener';

const ChangeAlert = ({ show, toggle }) => {
    if (show) {
        return (
            <div>
                <p>There was a change in your tasks</p>
                <button onClick={() => toggle(false)}>Reload the page</button>
            </div>
        );
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)


export { ChangeAlertWithStorageListener };