import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text>Content</Text>
        </View>
        <Footer />
      </View>
    )
  }
}

const styles =  StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#F5F5F5"
  },
  content: {
      flex: 1,
      color: "#BBB"
  }
})