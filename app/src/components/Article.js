import React, {Component} from 'react'

class Article extends  Component{
    state = {
        isOpen: true
    }
render(){
    const {article} = this.props
    const body = this.state.isOpen&&<section>{article.text}</section>
    return (
        <div>
            <h2>
                {article.title}
                <button onClick={this.handleClick}>close</button>
            </h2>
            {body}
            <h3>Creation date: {(new Date(article.date)).toDateString()}</h3>
        </div>
    )
}

 handleClick = () =>{
    console.log('---', 'clicked')
    this.setState({
        isOpen: !this.state.isOpen
    })

}
}

export default Article