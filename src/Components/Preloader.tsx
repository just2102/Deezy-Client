import preloader from "../assets/preloader.svg"

const Preloader = () => {
    return ( 
        <div role="status">
            <img className="inline w-13 h-13
            text-gray-200" src={preloader} alt="" />

        </div>
     );
}
 
export default Preloader;