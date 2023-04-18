import React from "react";

function useModalContext () {
    const [modal, setModal] = React.useState(false);

    return {
        modal,
        setModal,
    }
}

export {useModalContext}