import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

  const Paragraph = styled.p`
    text-align: center;
    padding: 0 20vw;
  `

  const Heading2 = styled.h2`
    padding: 0 20vw;
    text-align: center;
    padding-top: 30px;
  `
  const Heading3 = styled.h3`
    padding: 0 20vw;
    text-align: center;
    padding-top: 30px;
  `
  const Container = styled.div`
    margin-top: 50px;
    padding: 20px 20vw 30px;
    border-top: 1px solid rgba(208,204,92,.68);
    border-bottom: 1px solid rgba(208,204,92,.28);
    background-color: #f9edc02e;

    .btn-sm {
      margin-right: 10px;
      background: rgba(50,140,175, 1);
      border-color: rgba(50,120,175, 1);
    }

    h3 { font-weight: 400; }
    ol { margin-bottom: 30px; }

    p {
      padding-bottom: 30px;
    }

    label  {
      display: block;
      margin-bottom: 20px;
      font-weight: bold;

      span {
        display: inline-block;
        padding-right: 20px;
        width: 200px;
        vertical-align: middle;
        text-align: right;

        small {
          display: block;
        }
      }
    }
  `


  const bookmarkletStory = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.story)%7D)()`;
  const bookmarkletStoryV2 = `javascript:(function()%7Bvar%20storyDescriptionTextField%3Ddocument.querySelector(%22%23description-val%22)%2CpopupDescriptionTextField%3Ddocument.querySelector(%22%23description%22)%3BpopupDescriptionTextField%3F(popupDescriptionTextField.focus()%2CpopupDescriptionTextField.click())%3A(storyDescriptionTextField.focus()%2CstoryDescriptionTextField.click())%3Bvar%20jiraTemplate%3D%7Bstory%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927%22%2Cqa%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577%22%2Claunch%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067%22%2Ccreative%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465%22%2Coptimizley%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537%22%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar%20o%3Dnew%20XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open(%22GET%22%2Ce)%2Co.responseType%3D%22document%22%2Co.send()%7Dfunction%20t(e)%7Bvar%20t%3De.querySelector(%22pre%22).innerText%3Bfunction%20o(e%2Ct)%7BsetTimeout(function()%7Be.focus()%2Ce.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand(%22insertText%22%2C!1%2Ct)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(%22.submit%22).focus()%2Cdocument.activeElement.click()%7D%2C1200)%7Do(popupDescriptionTextField%7C%7CstoryDescriptionTextField%2Ct)%7D%7D%2CgetHTML('https://jira.endurance.com/browse/BHFOS-1927')%7D)()`;
  const bookmarkletQa = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.qa)%7D)()`;
  const bookmarkletLaunch = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.launch)%7D)()`;
  const bookmarkletCreative = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.creative)%7D)()`;
  const bookmarkletOptimizley = `javascript:(function()%7Bvar storyDescriptionTextField%3Ddocument.querySelector("%23description-val")%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%3Bvar jiraTemplate%3D%7Bstory%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927"%2Cqa%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577"%2Claunch%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067"%2Ccreative%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465"%2Coptimizley%3A"https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537"%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar o%3Dnew XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open("GET"%2Ce)%2Co.responseType%3D"document"%2Co.send()%7Dfunction t(e)%7Bvar t%2Co%2Cn%3De.querySelector("pre").innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand("insertText"%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(".submit").focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML(jiraTemplate.optimizley)%7D)()`;


const IndexPage = () =>  {


  const [ template, setTemplateVar ] = useState({
    name: '',
    url:  ''
  });


  function updateField(e){
    setTemplateVar({
      ...template,
      [e.target.name]: e.target.value
    });
  }; 

  const bookmarkletteVar = `javascript:(function()%7Bvar%20storyDescriptionTextField%3Ddocument.querySelector(%22%23description-val%22)%2CpopupDescriptionTextField%3Ddocument.querySelector(%22%23description%22)%3BpopupDescriptionTextField%3F(popupDescriptionTextField.focus()%2CpopupDescriptionTextField.click())%3A(storyDescriptionTextField.focus()%2CstoryDescriptionTextField.click())%3Bvar%20jiraTemplate%3D%7Bstory%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-1927%22%2Cqa%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-2577%22%2Claunch%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3067%22%2Ccreative%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3465%22%2Coptimizley%3A%22https%3A%2F%2Fjira.endurance.com%2Fbrowse%2FBHFOS-3537%22%7D%3BgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar%20o%3Dnew%20XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open(%22GET%22%2Ce)%2Co.responseType%3D%22document%22%2Co.send()%7Dfunction%20t(e)%7Bvar%20t%3De.querySelector(%22pre%22).innerText%3Bfunction%20o(e%2Ct)%7BsetTimeout(function()%7Be.focus()%2Ce.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand(%22insertText%22%2C!1%2Ct)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(%22.submit%22).focus()%2Cdocument.activeElement.click()%7D%2C1200)%7Do(popupDescriptionTextField%7C%7CstoryDescriptionTextField%2Ct)%7D%7D%2CgetHTML('${ template.url }')%7D)()`;
  //const bookmarkletteVar = `javascript:(function()%7Bvar%20storyDescriptionTextField%3Ddocument.querySelector(%22%23description-val%22)%3BstoryDescriptionTextField.focus()%2CstoryDescriptionTextField.click()%2CgetHTML%3Dfunction(e%2Ct)%7Bif(window.XMLHttpRequest)%7Bvar%20o%3Dnew%20XMLHttpRequest%3Bo.onload%3Dfunction()%7Bt%26%26t(this.responseXML)%7D%2Co.open(%22GET%22%2Ce)%2Co.responseType%3D%22document%22%2Co.send()%7Dfunction%20t(e)%7Bvar%20t%2Co%2Cn%3De.querySelector(%22pre%22).innerText%3Bt%3DstoryDescriptionTextField%2Co%3Dn%2CsetTimeout(function()%7Bt.focus()%2Ct.click()%7D%2C0)%2CsetTimeout(function()%7Bdocument.execCommand(%22insertText%22%2C!1%2Co)%7D%2C1e3)%2CsetTimeout(function()%7Bdocument.querySelector(%22.submit%22).focus()%2Cdocument.activeElement.click()%7D%2C1200)%7D%7D%2CgetHTML('${ template.url }')%7D)()`;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
  )
};

export default IndexPage