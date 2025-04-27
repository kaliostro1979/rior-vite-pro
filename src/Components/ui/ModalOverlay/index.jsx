export const ModalOverlay = (props) => {
    return (
        <div className={"fixed top-0 left-0 w-full h-full z-10"} onClick={props.callback} style={{backgroundColor: 'var(--gray-label)', backdropFilter: 'blur(2px)'}}></div>
    )
}