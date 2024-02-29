// given an URL
// return an object of search params and their values
// if there aren't any search params return an empty object

function getURLParams(url) {
  let str = new URL(url)
  return str.searchParams;
}

getURLParams('https://jscodebox.com/test.xml?id=3&value=file')
getURLParams('https://jscodebox.com/')
getURLParams('https://jscodebox.com/index.php?kex=Jfs873nj&id=1&action=delete')
getURLParams('https://jscodebox.com/delete.php?api_key=njkASF5')
getURLParams('https://jscodebox.com/?action=new&user_id=3&force=false')