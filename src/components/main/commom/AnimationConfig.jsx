import React from "react"
import Lottie from "react-lottie"
import animacao from "../../../JSON/animation_lk068s4e.json"

export const AnimationConfig = () =>{
    const defaultOptions = {
        loop:true,
        autoplay: true,
        animationData: animacao
    }

    return <Lottie options={defaultOptions} width={650} height={355}/>
}