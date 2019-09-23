import React from 'react'
function listToParagraph(listData){
    return listData.map(data => {
        return (
            <p>{data}</p>
        )
    })
}
export default listToParagraph