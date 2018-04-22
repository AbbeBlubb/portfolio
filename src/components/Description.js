import React from "react"
import data from "../data"
import "./projectdescription.css"

class Description extends React.Component {

  constructor(props) {
    super(props);
    this.state = { project: null }
  }

  /*
  componentDidMount() {
    this.fetchProject()
  }

  fetchProject(){
    const project = data.find((project) => (
      project.id === this.props.match.params.projectId
    ));
    this.setState({
      project
    })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.projectId !== this.props.match.params.projectId){
      this.fetchProject()
    }
  }
  */

  render() {
    if (this.state.project) {
      return (
        <div className="pd-main">
          <div className="pd-project">
            <div className="container-img">
              <div className="pd-img-wrap">
                <img className="pd-img" src={require("../img/" + this.state.project.imgFileName)} />
              </div>
            </div>
            <div className="container-text">
              <div className="pd-header-wrap">
                <div className="pd-header">{this.state.project.name}</div>
              </div>
              <div className="pd-description-wrap">
                <div className="pd-description">{this.state.project.description}</div>
              </div>
            </div>
          </div>
        </div>
      )

    } else {
      return (
        <div>Loading project..</div>
      )
    }
  }
}

export default Description