import React from "react"
import "./listitem.css"
import ProjectDescription from "./ProjectDescription"


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
            <div className={this.state.projectIsVisible ? "visible" : "hidden"}>
              <ProjectDescription
                name={this.props.name}
                description={this.props.description}
                img={this.props.img} />
            </div>
        </div>
    )
  }
}

export default ListItem