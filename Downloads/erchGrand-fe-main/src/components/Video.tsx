export default function Video() {
    return (
        <div>
            <div className="w-[50vw] h-[40vh]">
                <video src={require('../imgs/smart.mp4')} autoPlay loop/>
            </div>
        </div>
    )
}