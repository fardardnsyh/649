const useShareLink = (link: string, title: string, text: string) => {
    const shareData = {
        title: title,
        text: text,
        url: link
    }
    return async () => {
        await navigator.share(shareData);
    }
}

export default useShareLink;