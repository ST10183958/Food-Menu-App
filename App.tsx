
import React, {useState,Button,Component} from 'react';
import { StyleSheet,Image, Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native';

const LogoImage = require("./foods/FoodMenuIcon.png");


/// Images ///
const ChocolateCrossiant = require("./foods/ChocolateCrossiant.jpeg")
const Choriatiki = require("./foods/Choriatiki.jpg")
const Fasolada = require("./foods/Fasolada.jpeg")
const FetaPasta = require("./foods/FetaPasta.jpeg")
const GarlicBread = require("./foods/GarlicBread.jpg")
const Gemista = require("./foods/Gemista.jpeg")
const SpaghettiCarbonara = require("./foods/SpaghettiCarbonara.jpg")
const spanakopika = require("./foods/spanakopika.jpg")
const SushiRolls = require("./foods/SushiRolls.jpg")
/// Images ///



export default class App extends Component {
  state = {
    textValue: '',
    ImageValue: LogoImage,
    Ingreident: "The only best foods in Durban "
  }

 

  onPress_ChocolateCrossiant= () => {
    this.setState({
      textValue: 'Chocolate Crossiant',
      ImageValue: ChocolateCrossiant,
      Ingreident: "Ingredients for chocolate croissants include flour, butter or margarine, sugar, eggs, chocolate, yeast or baking powder, milk or water, cinnamon, vanilla extract, and salt."
    })
  }

  onPress_Choriatiki= () => {
    this.setState({
      textValue: 'Choriatiki',
      ImageValue: Choriatiki,
      Ingreident: "Ingredients for Choriatiki include tomatoes, cucumbers, feta cheese, olives, basil, oregano, vinegar, olive oil, salt, and pepper."
    })
  }
  onPress_Fasolada= () => {
    this.setState({
      textValue: 'Fasolada',
      ImageValue: Fasolada,
      Ingreident: "Ingredients for Fasolada include green beans, onions, garlic, potatoes, tomatoes, herbs and spices, olive oil, lemon juice, and salt."
    })
  }

  onPress_FetaPasta= () => {
    this.setState({
      textValue: 'FetaPasta',
      ImageValue: FetaPasta,
      Ingreident: "Ingredients for Feta Pasta include pasta, feta cheese, cherry tomatoes, garlic, olive oil, basil, and salt. Additional variations may include pine nuts, sun-dried tomatoes, or other herbs and spices."
    })
  }
  onPress_GarlicBread= () => {
    this.setState({
      textValue: 'GarlicBread',
      ImageValue: GarlicBread,
      Ingreident: "Ingredients for Garlic Bread include bread, butter, garlic, and parsley. Additional variations may include melted cheese, olive oil, or other herbs and spices."
    })
  }
  onPress_SushiRolls= () => {
    this.setState({
      textValue: 'SushiRolls',
      ImageValue: SushiRolls,
      Ingreident: "Ingredients for Sushi Rolls include sushi rice vinegar, sugar, salt, seaweed nori, fish or other filling sashimi, tempura, avocado, mango, cucumber, and more, and toppings sesame seeds, furikake, tobiko, and more."
    })
  }
  //on press functions //


  render() {
      return (
    <View style={styles.scrollView}>


      <TouchableOpacity style={styles.container} onPress={this.onPress_ChocolateCrossiant}>
        <Image style={styles.FoodImage} source={ChocolateCrossiant} />
        <Text style={styles.TextTitle}>Chocolate Crossiant</Text>
        <Text style={styles.TextPrice} >Price:20</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={this.onPress_Choriatiki}>
        <Image style={styles.FoodImage} source={Choriatiki} />
        <Text style={styles.TextTitle}>Choriatiki</Text>
        <Text style={styles.TextPrice} >Price:50</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={this.onPress_Fasolada}>
        <Image style={styles.FoodImage} source={Fasolada} />
        <Text style={styles.TextTitle}>Fasolada</Text>
        <Text style={styles.TextPrice} >Price:30</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={this.onPress_FetaPasta}>
        <Image style={styles.FoodImage} source={FetaPasta} />
        <Text style={styles.TextTitle}>FetaPasta</Text>
        <Text style={styles.TextPrice} >Price:10</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={this.onPress_GarlicBread}>
        <Image style={styles.FoodImage} source={GarlicBread} />
        <Text style={styles.TextTitle}>Garlic Bread</Text>
        <Text style={styles.TextPrice} >Price:40</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={this.onPress_SushiRolls}>
        <Image style={styles.FoodImage} source={SushiRolls} />
        <Text style={styles.TextTitle}>Sushi Rolls</Text>
        <Text style={styles.TextPrice} >Price:50</Text>
      </TouchableOpacity>



      <View style={styles.DisplayBox}>
        <Image style={styles.DisplayImage} source={this.state.ImageValue}/>
        <Text style={styles.DisplayTitle}>{this.state.textValue}</Text>
        <Text style={styles.IngreidentTitle}>{this.state.Ingreident}</Text>
      </View>

    </View>

    
  );
  }

}


  
const styles = StyleSheet.create({
  container: {
    height:80,
    width:390,
    left:-10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FoodImage: {
    height:70,
    width:70,
    left:-145,
    top:23,
    borderRadius:50,
  },
  TextTitle: {
    fontSize:20,
    top:-50,
    left:0,
  },
  TextPrice: {
    fontSize:15,
    left:-69,
    top:-40,
  },
  scrollView: {
    padding:10,
    width:410,
    height:900,
    top:20,
    left:-10,
  },
  DisplayBox:{

    top:80,
    width:410,

  },
  DisplayImage:{
    width:170,
    height:200,
  },
  DisplayTitle:{
    fontSize:20,
    top:-200,
    left:170,
  },

  IngreidentTitle:{
    fontSize:15,
    top:-200,
    left:170,
    width:200,
  }
});
