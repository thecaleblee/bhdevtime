import React from 'react'
import CodeFlipper from "../components/CodeFlipper" 

class FeatureGrid extends React.Component {
  createFeatureGridItems() {
    let icons = []
    let { imgSrc, imgAlt, featureHeading, featureText } = 0;

    for (let i = 1; i < 7; i++) {
       switch(i) {
        case 1 :
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon1.file.url;
          imgAlt = this.props.data.contentfulFeatureGrid.featureIcon1.title;
          featureHeading = this.props.data.contentfulFeatureGrid.featureHeading1;
          featureText = this.props.data.contentfulFeatureGrid.featureText1;
          break
        case 2:
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon2.file.url;
          imgAlt = this.props.data.contentfulFeatureGrid.featureIcon2.title;
          featureHeading = this.props.data.contentfulFeatureGrid.featureHeading2;
          featureText = this.props.data.contentfulFeatureGrid.featureText2;
          break
        case 3:
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon3.file.url;
          imgAlt = this.props.data.contentfulFeatureGrid.featureIcon3.title;
          featureHeading = this.props.data.contentfulFeatureGrid.featureHeading3;
          featureText = this.props.data.contentfulFeatureGrid.featureText3;
          break
        case 4 :
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon4.file.url;
          imgAlt = this.props.data.contentfulFeatureGrid.featureIcon4.title;
          featureHeading = this.props.data.contentfulFeatureGrid.featureHeading4;
          featureText = this.props.data.contentfulFeatureGrid.featureText4;
          break
        case 5:
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon5.file.url;
          imgAlt = this.props.data.contentfulFeatureGrid.featureIcon5.title;
          featureHeading = this.props.data.contentfulFeatureGrid.featureHeading5;
          featureText = this.props.data.contentfulFeatureGrid.featureText5;
          break
        case 6:
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon6.file.url;
          imgAlt = this.props.data.contentfulFeatureGrid.featureIcon6.title;
          featureHeading = this.props.data.contentfulFeatureGrid.featureHeading6;
          featureText = this.props.data.contentfulFeatureGrid.featureText6;
          break
        default:
          imgSrc = this.props.data.contentfulFeatureGrid.featureIcon1.file.url;
          imgAlt = this.props.data.contentfulFeatureGrid.featureIcon1.title;
          featureHeading = this.props.data.contentfulFeatureGrid.featureHeading1;
          featureText = this.props.data.contentfulFeatureGrid.featureText1;
          break
       }

      icons.push(
        <div className="feature col-xs-12 col-md-4">
          <div className="feature-icon">
            <img src={imgSrc} className="image-responsive" alt={imgAlt} />
          </div>
          <div className="feature-text">
            <h6 className="feature-header">{featureHeading}</h6>
            <p className="txt-size-secondary">{featureText}</p>
          </div>
        </div>
      )
    }

    return icons 
  }

  render() {

    return (

      <CodeFlipper
        jsxCode={`
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


          createFeatureGridItems() {
            let icons = []
            let { imgSrc, imgAlt, featureHeading, featureText } = 0;

            for (let i = 1; i < 7; i++) {
              switch(i) {
                case 1 :
                  imgSrc = this.props.data.contentfulFeatureGrid.featureIcon1.file.url;
                  imgAlt = this.props.data.contentfulFeatureGrid.featureIcon1.title;
                  featureHeading = this.props.data.contentfulFeatureGrid.featureHeading1;
                  featureText = this.props.data.contentfulFeatureGrid.featureText1;
                  break
                case 2:
                  imgSrc = this.props.data.contentfulFeatureGrid.featureIcon2.file.url;
                  imgAlt = this.props.data.contentfulFeatureGrid.featureIcon2.title;
                  featureHeading = this.props.data.contentfulFeatureGrid.featureHeading2;
                  featureText = this.props.data.contentfulFeatureGrid.featureText2;
                  break
                case 3:
                  imgSrc = this.props.data.contentfulFeatureGrid.featureIcon3.file.url;
                  imgAlt = this.props.data.contentfulFeatureGrid.featureIcon3.title;
                  featureHeading = this.props.data.contentfulFeatureGrid.featureHeading3;
                  featureText = this.props.data.contentfulFeatureGrid.featureText3;
                  break
                case 4 :
                  imgSrc = this.props.data.contentfulFeatureGrid.featureIcon4.file.url;
                  imgAlt = this.props.data.contentfulFeatureGrid.featureIcon4.title;
                  featureHeading = this.props.data.contentfulFeatureGrid.featureHeading4;
                  featureText = this.props.data.contentfulFeatureGrid.featureText4;
                  break
                case 5:
                  imgSrc = this.props.data.contentfulFeatureGrid.featureIcon5.file.url;
                  imgAlt = this.props.data.contentfulFeatureGrid.featureIcon5.title;
                  featureHeading = this.props.data.contentfulFeatureGrid.featureHeading5;
                  featureText = this.props.data.contentfulFeatureGrid.featureText5;
                  break
                case 6:
                  imgSrc = this.props.data.contentfulFeatureGrid.featureIcon6.file.url;
                  imgAlt = this.props.data.contentfulFeatureGrid.featureIcon6.title;
                  featureHeading = this.props.data.contentfulFeatureGrid.featureHeading6;
                  featureText = this.props.data.contentfulFeatureGrid.featureText6;
                  break
                default:
                  imgSrc = this.props.data.contentfulFeatureGrid.featureIcon1.file.url;
                  imgAlt = this.props.data.contentfulFeatureGrid.featureIcon1.title;
                  featureHeading = this.props.data.contentfulFeatureGrid.featureHeading1;
                  featureText = this.props.data.contentfulFeatureGrid.featureText1;
                  break
              }

              icons.push(
                <div className="feature col-xs-12 col-md-4">
                  <div className="feature-icon">
                    <img src={imgSrc} className="image-responsive" alt={imgAlt} />
                  </div>
                  <div className="feature-text">
                    <h6 className="feature-header">{featureHeading}</h6>
                    <p className="txt-size-secondary">{featureText}</p>
                  </div>
                </div>
              )
            }

            return icons 
          }
        `}
        smDisplayHeight="265"
        smCodeHeight="700"
        mdDisplayHeight="130"
        mdCodeHeight="630"
        lgDisplayHeight="578"
        lgCodeHeight="1600"
      >
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
      </CodeFlipper>
    )
  }
}

export default FeatureGrid 