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

const storyBookmarklet = `javascript:(function()%7B"use strict"%3Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3Bfunction getHTML(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar n%2Cr%2Co%2Cc%2Ci%3Dnew XMLHttpRequest%3Bi.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Ci.open("GET"%2Ce)%2Ci.responseType%3D"document"%2Ci.send()%7Dfunction a(e)%7Bvar t%3De.toString(16)%3Breturn 1%3D%3Dt.length%3F"0"%2Bt%3At%7Dfunction s(e%2Ct%2Cn)%7Breturn e%3DparseInt(e%2C10)%2Ct%3DparseInt(t%2C10)%2Cn%3DparseInt(n%2C10)%2C"%23"%2Ba(e)%2Ba(t)%2Ba(n)%7Dfunction t(e)%7Bvar t%2Ci%2Ca%2Cl%3Be.querySelectorAll(".panel").forEach(function(e)%7Br%3De.childNodes%5B0%5D.innerText%3Bvar a%3De.childNodes%5B0%5D.style.backgroundColor%3Ba%3Da.replace("rgb("%2C"").replace(")"%2C"").split("%2C ")%2Cc%3Ds(a%5B0%5D%2Ca%5B1%5D%2Ca%5B2%5D)%3Bvar l%3De.childNodes%5B1%5D.style.backgroundColor%3Bl%3Dl.replace("rgb("%2C"").replace(")"%2C"").split("%2C ")%2Co%3Ds(l%5B0%5D%2Cl%5B1%5D%2Cl%5B2%5D)%2Ct%3D"%7Bpanel%3Atitle%3D".concat(r%2C"%7CtitleBGColor%3D").concat(c%2C"%7CbgColor%3D").concat(o%2C"%7D")%3Bvar u%3De.childNodes%5B1%5D.childNodes%5B1%5D.children%2Cd%3DArray.from(u).map(function(e)%7Breturn"* ".concat(e.innerText%2C" %5Cn")%7D).join(" ")%3Breturn i%3D"%5Cn        ".concat(t%2C"%5Cn        ").concat(d%2C"%5Cn        %7Bpanel%7D%5Cn      ")%2C(n%2B%3Di).replace("undefined"%2C"")%2Cn%7D)%2Ca%3DstoryDescriptionTextField%2Cl%3Dn%2CsetTimeout(function()%7Ba.focus()%2Ca.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Cl)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7DgetHTML(jiraTemplate.story)%7D)()`;
const qaBookmarklet = `javascript:(function()%7B"use strict"%3Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3Bfunction getHTML(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar n%2Cr%2Co%2Cc%2Ci%3Dnew XMLHttpRequest%3Bi.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Ci.open("GET"%2Ce)%2Ci.responseType%3D"document"%2Ci.send()%7Dfunction a(e)%7Bvar t%3De.toString(16)%3Breturn 1%3D%3Dt.length%3F"0"%2Bt%3At%7Dfunction s(e%2Ct%2Cn)%7Breturn e%3DparseInt(e%2C10)%2Ct%3DparseInt(t%2C10)%2Cn%3DparseInt(n%2C10)%2C"%23"%2Ba(e)%2Ba(t)%2Ba(n)%7Dfunction t(e)%7Bvar t%2Ci%2Ca%2Cl%3Be.querySelectorAll(".panel").forEach(function(e)%7Br%3De.childNodes%5B0%5D.innerText%3Bvar a%3De.childNodes%5B0%5D.style.backgroundColor%3Ba%3Da.replace("rgb("%2C"").replace(")"%2C"").split("%2C ")%2Cc%3Ds(a%5B0%5D%2Ca%5B1%5D%2Ca%5B2%5D)%3Bvar l%3De.childNodes%5B1%5D.style.backgroundColor%3Bl%3Dl.replace("rgb("%2C"").replace(")"%2C"").split("%2C ")%2Co%3Ds(l%5B0%5D%2Cl%5B1%5D%2Cl%5B2%5D)%2Ct%3D"%7Bpanel%3Atitle%3D".concat(r%2C"%7CtitleBGColor%3D").concat(c%2C"%7CbgColor%3D").concat(o%2C"%7D")%3Bvar u%3De.childNodes%5B1%5D.childNodes%5B1%5D.children%2Cd%3DArray.from(u).map(function(e)%7Breturn"* ".concat(e.innerText%2C" %5Cn")%7D).join(" ")%3Breturn i%3D"%5Cn        ".concat(t%2C"%5Cn        ").concat(d%2C"%5Cn        %7Bpanel%7D%5Cn      ")%2C(n%2B%3Di).replace("undefined"%2C"")%2Cn%7D)%2Ca%3DstoryDescriptionTextField%2Cl%3Dn%2CsetTimeout(function()%7Ba.focus()%2Ca.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Cl)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7DgetHTML(jiraTemplate.qa)%7D)()`;
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
      <a className="btn-sm" href={storyBookmarklet}>AutoStory</a>
      <a className="btn-sm" href={qaBookmarklet}>AutoQA</a>
    </Container>
  </Layout>
)

export default IndexPage