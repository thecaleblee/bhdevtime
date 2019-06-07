import React from 'react'
import CodeFlipper from './CodeFlipper'

const PricingCard = () => (
  <CodeFlipper
    jsxCode={`
      <section id="pricing-cards" className="pricing-cards secondary inset">
        <div className="container">
          <div className="pricing-header">
          </div>
          <div className="row justify-center-xs pricing-cards-row" data-carousel="{&quot;startPosition&quot;:0,&quot;margin&quot;:0,&quot;nav&quot;:1,&quot;items&quot;:1.25,&quot;center&quot;:1,&quot;loop&quot;:0}">
            <div className="col-xs-12 col-md pricing-card item card1 lazyloaded" data-expand="-20">
              <div className="outset-card txt-center ">
                  <h3>Basic</h3>
                  <h4 className="plan-price">$3.95/mo*</h4>
                  <p className="txt-size-secondary"><s>Normally $7.99</s></p>
                <a className="btn-md" href="https://www.bluehost.com/web-hosting/signup?cpanel_plan=basic">Select</a>
                <ul className="txt-size-secondary">
                    <li>
                      1 Website
                      <span></span>
                    </li>
                    <li>
                      Free SSL Certificate
                      <span></span>
                    </li>
                    <li>
                      50 GB SSD Storage
                      <span></span>
                    </li>
                    <li>
                      Free Domain for 1 Year
                      <span></span>
                    </li>
                    <li>
                      5 Parked Domains
                      <span></span>
                    </li>
                    <li>
                      25 Subdomains
                      <span></span>
                    </li>
                    <li>
                      $50 Marketing Credit
                      <span></span>
                    </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-md pricing-card item card2 lazyloaded" data-expand="-20">
              <div className="outset-card txt-center ">
                  <h3>Plus</h3>
                  <h4 className="plan-price">$5.95/mo*</h4>
                  <p className="txt-size-secondary"><s>Normally $10.99</s></p>
                <a className="btn-md" href="https://www.bluehost.com/web-hosting/signup?cpanel_plan=plus">Select</a>
                <ul className="txt-size-secondary">
                    <li>
                      <a href="#modal-usage-policies">Unlimited</a> Websites
                      <span></span>
                    </li>
                    <li>
                      Free SSL Certificate
                      <span></span>
                    </li>
                    <li>
                      <a href="#modal-usage-policies">Unmetered
                      </a> SSD Storage
                      <span></span>
                    </li>
                    <li>
                      Free Domain for 1 Year
                      <span></span>
                    </li>
                    <li>
                      Unlimited Parked Domains
                      <span></span>
                    </li>
                    <li>
                      Unlimited Subdomains
                      <span></span>
                    </li>
                    <li>
                      $100 Marketing Credit
                      <span></span>
                    </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-md pricing-card item card3 lazyloaded" data-expand="-20">
              <div className="outset-card txt-center recommended">
                  <h3>Choice Plus</h3>
                  <h4 className="plan-price">$5.95/mo*</h4>
                  <p className="txt-size-secondary"><s>Normally $14.99</s></p>
                <a className="btn-md" href="https://www.bluehost.com/web-hosting/signup?cpanel_plan=prime">Select</a>
                <ul className="txt-size-secondary">
                    <li>
                      <a href="#modal-usage-policies">Unlimited
                      </a> Websites
                      <span></span>
                    </li>
                    <li>
                      Free SSL Certificate
                      <span></span>
                    </li>
                    <li>
                      <a href="#modal-usage-policies">Unmetered
                      </a> SSD Storage
                      <span></span>
                    </li>
                    <li>
                      Free Domain for 1 Year
                      <span></span>
                    </li>
                    <li>
                      Unlimited Parked Domains
                      <span></span>
                    </li>
                    <li>
                      Unlimited Subdomains
                      <span></span>
                    </li>
                    <li>
                      $200 Marketing Credit
                      <span></span>
                    </li>
                    <li>
                      CodeGuard Basic Backup
                      <span></span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      `}
      smDisplayHeight="1740"
      smCodeHeight="1091"
      mdDisplayHeight="665"
      mdCodeHeight="780"
      lgDisplayHeight="755"
      lgCodeHeight="860"
    >
    <section id="pricing-cards" className="pricing-cards secondary inset">
      <div className="container">
        <div className="pricing-header">
        </div>
        <div className="row justify-center-xs pricing-cards-row" data-carousel="{&quot;startPosition&quot;:0,&quot;margin&quot;:0,&quot;nav&quot;:1,&quot;items&quot;:1.25,&quot;center&quot;:1,&quot;loop&quot;:0}">
          <div className="col-xs-12 col-md pricing-card item card1 lazyloaded" data-expand="-20">
            <div className="outset-card txt-center ">
                <h3>Basic</h3>
                <h4 className="plan-price">$3.95/mo*</h4>
                <p className="txt-size-secondary"><s>Normally $7.99</s></p>
              <a className="btn-md" href="https://www.bluehost.com/web-hosting/signup?cpanel_plan=basic">Select</a>
              <ul className="txt-size-secondary">
                  <li>
                    1 Website
                    <span></span>
                  </li>
                  <li>
                    Free SSL Certificate
                    <span></span>
                  </li>
                  <li>
                    50 GB SSD Storage
                    <span></span>
                  </li>
                  <li>
                    Free Domain for 1 Year
                    <span></span>
                  </li>
                  <li>
                    5 Parked Domains
                    <span></span>
                  </li>
                  <li>
                    25 Subdomains
                    <span></span>
                  </li>
                  <li>
                    $50 Marketing Credit
                    <span></span>
                  </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-md pricing-card item card2 lazyloaded" data-expand="-20">
            <div className="outset-card txt-center ">
                <h3>Plus</h3>
                <h4 className="plan-price">$5.95/mo*</h4>
                <p className="txt-size-secondary"><s>Normally $10.99</s></p>
              <a className="btn-md" href="https://www.bluehost.com/web-hosting/signup?cpanel_plan=plus">Select</a>
              <ul className="txt-size-secondary">
                  <li>
                    <a href="#modal-usage-policies">Unlimited</a> Websites
                    <span></span>
                  </li>
                  <li>
                    Free SSL Certificate
                    <span></span>
                  </li>
                  <li>
                    <a href="#modal-usage-policies">Unmetered
                    </a> SSD Storage
                    <span></span>
                  </li>
                  <li>
                    Free Domain for 1 Year
                    <span></span>
                  </li>
                  <li>
                    Unlimited Parked Domains
                    <span></span>
                  </li>
                  <li>
                    Unlimited Subdomains
                    <span></span>
                  </li>
                  <li>
                    $100 Marketing Credit
                    <span></span>
                  </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-md pricing-card item card3 lazyloaded" data-expand="-20">
            <div className="outset-card txt-center recommended">
                <h3>Choice Plus</h3>
                <h4 className="plan-price">$5.95/mo*</h4>
                <p className="txt-size-secondary"><s>Normally $14.99</s></p>
              <a className="btn-md" href="https://www.bluehost.com/web-hosting/signup?cpanel_plan=prime">Select</a>
              <ul className="txt-size-secondary">
                  <li>
                    <a href="#modal-usage-policies">Unlimited
                    </a> Websites
                    <span></span>
                  </li>
                  <li>
                    Free SSL Certificate
                    <span></span>
                  </li>
                  <li>
                    <a href="#modal-usage-policies">Unmetered
                    </a> SSD Storage
                    <span></span>
                  </li>
                  <li>
                    Free Domain for 1 Year
                    <span></span>
                  </li>
                  <li>
                    Unlimited Parked Domains
                    <span></span>
                  </li>
                  <li>
                    Unlimited Subdomains
                    <span></span>
                  </li>
                  <li>
                    $200 Marketing Credit
                    <span></span>
                  </li>
                  <li>
                    CodeGuard Basic Backup
                    <span></span>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </CodeFlipper>
)

export default PricingCard