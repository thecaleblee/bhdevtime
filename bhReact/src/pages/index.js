import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-top: 10vh;

  @media (min-width: 992px) {
    margin-top: 20vh;
  }
`
const Paragraph = styled.p`
  text-align: center;
  padding: 0 20vw;
`
const Container = styled.div`
  margin-top: 50px;
  padding: 20px 20vw 30px;
  border-top: 1px solid rgba(208,204,92,.68);
  border-bottom: 1px solid rgba(208,204,92,.68);
  background-color: #f9edc02e;

  a {
    margin-right: 10px;
    background: rgba(50,140,175, 1);
    border-color: rgba(50,120,175, 1);
  }

  h3 { font-weight: 400; }
  ol { margin-bottom: 30px; }
`

const bookmarkletStory = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.story)%7D)()`;
const bookmarkletQa = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.qa)%7D)()`;
const bookmarkletLaunch = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.launch)%7D)()`;
const bookmarkletCreative = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.creative)%7D)()`;
const bookmarkletOptimizley = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.optimizley)%7D)()`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Title>Purpose</Title>
    <Paragraph>
      To test the ability to use React and Contentful to create a static version of BH.components
      using components, with test coverage, while allowing editing from non-developers via
      Contentful.
    </Paragraph>
    <Container>
      <h3>Bookmarklets</h3>
      <p>Drag these links into your bookmarks bar.</p>
      <h4>To use:</h4>
      <ol>
        <li>Make sure you're on a Jira story you would like to add the template to</li>
        <li>Click the boomarklet</li>
        <li>Wait up to 7 seconds</li>
        <li>Profit</li>
      </ol>
      <a className="btn-sm" href={bookmarkletStory}>AutoStory</a>
      <a className="btn-sm" href={bookmarkletQa}>AutoQA</a>
      <a className="btn-sm" href={bookmarkletLaunch}>AutoLaunch</a>
      <a className="btn-sm" href={bookmarkletCreative}>AutoCreative</a>
      <a className="btn-sm" href={bookmarkletOptimizley}>AutoOptimizley</a>
    </Container>
  </Layout>
)

export default IndexPage