import React from 'react'

class FeatureGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  createFeatureGridItems() {
    let icons = []
    let imgSrc = 0;

    for (let i = 1; i < 7; i++) {
       switch(i) {
        case 1 :
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon1.file.url;
          break
        case 2:
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon2.file.url;
          break
        case 3:
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon3.file.url;
          break
        default:
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon1.file.url;
          break
       }

      icons.push(
        <div className="feature col-xs-12 col-md-4">
          <div className="feature-icon">
            <img src={imgSrc} className="image-responsive" alt={this.props.data.contentfulFeatureGrid.featureIcon1.title} />
          </div>
          <div className="feature-text">
            <h6 className="feature-header">{this.props.data.contentfulFeatureGrid.featureHeading1}</h6>
            <p className="txt-size-secondary">{this.props.data.contentfulFeatureGrid.featureText1}</p>
          </div>
        </div>
      )
    }

    return icons 
  }

  render() {

    return (
      <div id="feature-grid" className="feature-grid secondary ">
        <div className="container lazyloaded" data-expand="-20">
          <div className="feature-grid-header">
            <h2>{this.props.data.contentfulFeatureGrid.featureGridTitle}</h2>
          </div>
          <div className="row feature-grid-row">
            {this.createFeatureGridItems()}
          </div>
        </div>
      </div>
    )
  }
}

export default FeatureGrid 