import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Layout from '../components/Layouts.js'
import TodoList from '../components/TodoList.js'
import Head from 'next/head';

class Index extends Component{
  render(){
    return(
      <div>
      <Head>
        <title>TodoApp</title>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
        <Layout />
        <TodoList />
      </div>
    )
  }
}


export default Index
