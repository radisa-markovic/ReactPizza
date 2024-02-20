import { useEffect, useState } from "react";

const useAlcohol = (initialPromilles?: number) => {
    const [promilles, setPromilles] = useState<number>(initialPromilles || 0);

    useEffect(()=>{
        if(promilles !== 0)
        {
            const drunkAnimation = [
                {
                    opacity: 1,
                    transform: "translateX(-50%)"
                },
                {
                    opacity: 0.5,
                    transform: "translateX(50%)"
                },
                {
                    transform: "translateX(-50%)",
                    opacity: 1
                }
            ];
    
            document.body.animate(drunkAnimation, {
                duration: 15_000 / (promilles * 10),
                iterations: Infinity
            });
        }

    }, [promilles]);

    return { setPromilles }
}

export default useAlcohol;