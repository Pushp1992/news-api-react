import React from 'react';
import HomePage from './HomePage/homePage';
import SearchResultPage from './SearchResultPage/searchResultPage';
import PageNotFound from './NotFound/PageNotFound';
import Header from './Header/header';
import Footer from './Footer/footer';
import NewsFeedPage from './NewsPage/newsPage';
import SearchBar from './Search/search';
import NavBar from './NavBar/navBar';

/**
 * Routing Component
 */

const HomePageComponent = () => {
    return <HomePage />
}

const SearchResultPageComponent = () => {
    return <SearchResultPage />
}

const PageNotFoundComponent = () => {
    return <PageNotFound />
}

/**
 * Non Routing Component
 */

const HeaderComponent = () => {
    return <Header />
}

const NavBarComponent = () => {
    return <NavBar />
}

const FooterComponent = () => {
    return <Footer />
}

const SearchBarComponent = () => {
    return <SearchBar />
}

const NewsFeedPageComponent = () => {
    return <NewsFeedPage />
}


export {
    HomePageComponent, SearchResultPageComponent, PageNotFoundComponent, HeaderComponent,
    NavBarComponent, FooterComponent, SearchBarComponent, NewsFeedPageComponent
}