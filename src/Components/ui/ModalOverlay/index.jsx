export const ModalOverlay = (props) => {
    console.log(props);
    return (
        <div className={"fixed top-0 left-0 w-full h-full z-10 bg-primary-black opacity-50"} onClick={props.callback}></div>
    )
}