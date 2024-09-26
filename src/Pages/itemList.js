import "./itemList.css";
import colors from "../Components/color";

import NavBar from "../Components/navbar";
import NavBarOpen from "../Components/navbarOpen";
import { useState } from "react";

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import headshot from "../Images/headshot.jpg";
import waistUp from "../Images/waist-up.jpg";
import fullBody from "../Images/full-body.jpg";
import illustration from "../Images/illustration.jpg";

import SNS from "../Components/SNS";

import Footer from "../Components/footer";

const ItemList = () => {
    const itemData = [
        {
            img: `${headshot}`,
            title: 'Headshot',
            rows: 2,
            cols: 2,
            href: "/headshot"
        },
        {
            img: `${waistUp}`,
            title: 'Waist Up',
            href: "/waistUp"
        },
        {
            img: `${fullBody}`,
            title: 'Full Body',
            href: "/fullBody"
        },
        {
            img: `${illustration}`,
            title: 'Illustration',
            href: "/illustration"
        }
    ];

    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen)
    };

    return (
        <div>
            <NavBar toggleNavBar={toggleNavBar}/>
            <NavBarOpen isVisible={isNavBarOpen}/>

            <div id="imageListContainer">
                {/* https://mui.com/material-ui/react-image-list/#image-list-with-title-bars */}
                <ImageList sx={{ width: 962, height: 707 }} cols={2} rowHeight={338.71}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <a href={item.href}>
                                <img
                                    srcSet={`${item.img}`}
                                    src={`${item.img}`}
                                    alt={item.title}
                                    loading="lazy"
                                    width={466.85}
                                    height={338.71}
                                    border={`1px solid ${colors.primary}`}
                                />
                            </a>
                            <ImageListItemBar
                                title={item.title}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>

            <SNS />
            
            <Footer />
        </div>
    )
}

export default ItemList;