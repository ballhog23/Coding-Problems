function getURLParams(url) {
    let urlObj = new URL(url);
    let searchParamsObj = urlObj.searchParams;

    return Array.from(searchParamsObj.values())
}

getURLParams(
    'https://jscodebox.com/test.xml?id=3&value=file'
)