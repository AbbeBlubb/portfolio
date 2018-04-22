import React from "react"
import "./listitem.css"


class ListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      projectIsVisible: false
    }
  }

  toggleProject = () => {
    this.setState ({
      projectIsVisible: !this.state.projectIsVisible
    })
  }

  render() {
    return (
        <div className="li-main"
             onClick={this.toggleProject}>
          <div className="container">
            <div className="name">{this.props.name}</div>
            <div className="pl-short">/ {this.props.short}</div>
          </div>
          {this.state.projectIsVisible ? <div>///TEST id:{this.props.id}///</div> : null}
        </div>
    )
  }
}

export default ListItem