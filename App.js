import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const article = [
  { id: "1", uri: require('./assets/1.jpeg')},
  { id: "2", uri: require('./assets/2.jpeg')},
  { id: "3", uri: require('./assets/3.jpeg')},
  { id: "4", uri: require('./assets/4.jpeg')},
  { id: "5", uri: require('./assets/5.jpeg')},
]
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0 
    }
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: ()=> true,
      onPanResponderMove: (event,gesture)=> {
        this.position.setValue({y:gesture.dy})
      },
      onPanResponderRelease: (event,gesture) => {
        if(-gesture.dy > 50 && -gesture.vy > 0.7) {
          Animated.timing(this.position,{
            toValue: ({x: 0, y: -SCREEN_HEIGHT}),
            duration: 400
          }).start(()=>{
            this.setState({currentIndex: this.state.currentIndex+1})
            this.position.setValue({x:0,y:0})
            // this.setState((prevState)=> {
            //   console.log(prevState)
            //   return {
            //     currentIndex: prevState.currentIndex+1
            //   }
            // })
          })
        } else {
          Animated.spring(this.position, {
            toValue: ({ x: 0 , y: 0}),
          }).start()
        }
      }
    })
  }
  renderArticles = () => {
    return article.map((item,index)=>{
      if (index < this.state.currentIndex) {
        return null
      } else if(this.state.currentIndex == index) {
        return (
          <Animated.View key={item.id} style={this.position.getLayout()}
            {...this.PanResponder.panHandlers}
          >
            <View style={{flex:1, position:'absolute',width:SCREEN_WIDTH, height:SCREEN_HEIGHT, backgroundColor:'white'}}>
              <View style={{flex:2}}>
                <Image source={article[index].uri}
                  style={{flex:1,resizeMode:'contain',width:null,height:null}}
                >
  
                </Image>
              </View>
              <View style={{flex:3}}>
                <Text>
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                </Text>
              </View>
            </View>
          </Animated.View>
        )
      } else {
        return (
          <Animated.View key={item.id} 
          
          >
            <View style={{flex:1, position:'absolute',width:SCREEN_WIDTH, height:SCREEN_HEIGHT, backgroundColor:'white'}}>
              <View style={{flex:2}}>
                <Image source={article[index].uri}
                  style={{flex:1,resizeMode:'contain',width:null,height:null}}
                >
  
                </Image>
              </View>
              <View style={{flex:3}}>
                <Text>
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                  測試內容寫很多有人要看嗎到底要有多少字才能夠充版面啊
                </Text>
              </View>
            </View>
          </Animated.View>
        )
      }
      
    }).reverse();
  }
  render() {
    return (
      <View style={{flex:1}}>
        {this.renderArticles()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
