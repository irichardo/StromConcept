import React from 'react'
export interface promo {
    characteristic: string | undefined;
    image:React.ReactElement | undefined
}

export type promoData = {
    props:promo[]
}
