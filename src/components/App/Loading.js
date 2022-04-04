import React from "react";

import {Bars} from "react-loader-spinner";

export default function Loading(){
    return (

            <Bars 
                type="Bars"
                color="#FFFFFF"
                height={30}
                width={100}
                timeout={3000} //3 secs
            />
        
    )
}
