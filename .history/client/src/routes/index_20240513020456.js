import HomePage from "../pages/HomePage/HomePage.tsx";
// import SearchPage from "../pages/SearchPage/SearchPage.tsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.tsx";
import FavouritePage from "../pages/Favourite/FavouritePage.tsx";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import PersonalPage from "../pages/PersonalPage/PersonalPage.tsx";
export const routes =  [
    {
        path : "/",
        page : HomePage,
        isShowHeader : true,
        isShowFooter : true
    },
    // {
    //     path : "/search",
    //     page : SearchPage,
    //     isShowHeader : true,
    //     isShowFooter : true

    // },
    {
        path : "/favourite",
        page : FavouritePage,
        isShowHeader : true,
        isShowFooter : true
    },
    {
        path : "/login",
        page : LoginPage,
        isShowHeader : true,
        isShowFooter : true
    },
    {
        path : "*",
        page : NotFoundPage,
    },
    {
        path : "/personal",
        page : PersonalPage,
    },
    {
        path : "/personal/ManagePostings",
        page : PersonalPage,
    },
    {
        path : "/personal/EditPersonal",
        page : PersonalPage,
    },
    {
        path : "/personal/Information",
        page : PersonalPage,
    },
    {
        path : "/personal/DepositMoney",
        page : PersonalPage,
    },
    {
        path : "/personal/DepositHistory",
        page : PersonalPage,
    },
    {
        path : "/personal/ServicePriceList",
        page : PersonalPage,
    },
]