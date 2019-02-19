import React from 'react'

const FeatureGrid = ({data, children}) => (
  <div id="feature-grid" className="feature-grid secondary ">
    <div className="container lazyloaded" data-expand="-20">
      <div className="feature-grid-header">
        <h2>{data.contentfulFeatureGrid.featureGridTitle}</h2>
      </div>
      <div className="row feature-grid-row">

        <div className="feature col-xs-12 col-md-4">
          <div className="feature-icon">
            <img src={data.contentfulFeatureGrid.featureIcon1.file.url} className="image-responsive" alt={data.contentfulFeatureGrid.featureIcon1.title} />
          </div>
          <div className="feature-text">
            <h6 className="feature-header">{data.contentfulFeatureGrid.featureHeading1}</h6>
            <p className="txt-size-secondary">{data.contentfulFeatureGrid.featureText1}</p>
          </div>
        </div>

        <div className="feature col-xs-12 col-md-4">
          <div className="feature-icon">
            <img src={data.contentfulFeatureGrid.featureIcon2.file.url} className="image-responsive" alt={data.contentfulFeatureGrid.featureIcon2.title} />
          </div>
          <div className="feature-text">
            <h6 className="feature-header">{data.contentfulFeatureGrid.featureHeading2}</h6>
            <p className="txt-size-secondary">{data.contentfulFeatureGrid.featureText2}</p>
          </div>
        </div>

        <div className="feature col-xs-12 col-md-4">
          <div className="feature-icon">
            <img src={data.contentfulFeatureGrid.featureIcon3.file.url} className="image-responsive" alt={data.contentfulFeatureGrid.featureIcon3.title} />
          </div>
          <div className="feature-text">
            <h6 className="feature-header">{data.contentfulFeatureGrid.featureHeading3}</h6>
            <p className="txt-size-secondary">{data.contentfulFeatureGrid.featureText3}</p>
          </div>
        </div>

        <div className="feature col-xs-12 col-md-4">
          <div className="feature-icon">
            <img src={data.contentfulFeatureGrid.featureIcon4.file.url} className="image-responsive" alt={data.contentfulFeatureGrid.featureIcon4.title} />
          </div>
          <div className="feature-text">
            <h6 className="feature-header">{data.contentfulFeatureGrid.featureHeading4}</h6>
            <p className="txt-size-secondary">{data.contentfulFeatureGrid.featureText4}</p>
          </div>
        </div>

        <div className="feature col-xs-12 col-md-4">
          <div className="feature-icon">
            <img src={data.contentfulFeatureGrid.featureIcon5.file.url} className="image-responsive" alt={data.contentfulFeatureGrid.featureIcon5.title} />
          </div>
          <div className="feature-text">
            <h6 className="feature-header">{data.contentfulFeatureGrid.featureHeading5}</h6>
            <p className="txt-size-secondary">{data.contentfulFeatureGrid.featureText5}</p>
          </div>
        </div>

        <div className="feature col-xs-12 col-md-4">
          <div className="feature-icon">
            <img src={data.contentfulFeatureGrid.featureIcon6.file.url} className="image-responsive" alt={data.contentfulFeatureGrid.featureIcon6.title} />
          </div>
          <div className="feature-text">
            <h6 className="feature-header">{data.contentfulFeatureGrid.featureHeading6}</h6>
            <p className="txt-size-secondary">{data.contentfulFeatureGrid.featureText6}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FeatureGrid 
