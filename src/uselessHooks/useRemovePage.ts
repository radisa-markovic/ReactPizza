
const useRemovePage = () => {

    function removePage()
    {
        document.body.remove();
    }

    return { removePage }
}

export default useRemovePage;