import React, { useEffect } from "react";

const Header = ({ pageTitle,siteTitle }) => {
    useEffect(() => {
        // Atualiza o título da aba do navegador
        document.title = pageTitle;
    }, [pageTitle]); // Executa o efeito sempre que "pageTitle" mudar

    return <h1>{siteTitle}</h1>;
};

export default Header;
