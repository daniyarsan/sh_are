import Lottie from "react-lottie";

export default function Animate({data}: { data: {} }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <Lottie options={defaultOptions}
                   height={200}
                   width={200}/>
}