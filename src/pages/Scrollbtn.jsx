
import "./scroll.css"
export const ScrollButtons= () =>{
    const scrollTop =()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    };
    const scrollButtom =() =>{
        window.scrollTo({
            top:document.documentElement.scrollHeight,
            behavior:"smooth"
        })
    };
    return(
        <>
        <div className="scroll-button">
            <button onClick={scrollTop}> ⬆</button>
            <button onClick={scrollButtom}> ⬇</button>
        </div>
        </>
    )
}