import React, { Component } from 'react'

class CatList extends Component {
    listCats = () => {
        return this.props.catPics.map(cat => {
            return <img key={cat.id} src={cat.url} alt={cat.id} />
        })
    }

    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}

export default CatList