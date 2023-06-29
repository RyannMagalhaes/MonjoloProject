import { Fragment, useEffect } from "react";
import ScrollReveal from 'scrollreveal';

export default function Animacao({css_identifier, animationType = "opacity", value = 0.1}) {
    useEffect(() => {
        ScrollReveal({reset:false}).reveal(`${css_identifier}`, {
            duration: 1000,
            [animationType]:value,
            easing: 'ease-in'
        });
    },[]);

    return (
        <Fragment/>
    )
}