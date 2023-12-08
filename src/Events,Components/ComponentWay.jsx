import React from 'react';

const ComponentWay = () => {

    return (
        <div>
            <Header/>
            <MainContent />
            <Footer />
        </div>
    );
};

const Header = () => {
    return(
    <header>
        <h1>This is Header </h1>
    </header>)
}
const MainContent = () => {
    return (
        <main>
            <h1>This is Main</h1>
        </main>
    );
}

const Footer = () => {
    return (
        <footer>
            <h1>This is Footer</h1>
        </footer>
    );
}


export { ComponentWay, MainContent, Footer };
