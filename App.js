import React from 'react';
import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import FixedHeader from './elements/FixedHeader';
import TextHeadings from './elements/TextHeadings';
import Icons from './elements/Icons';
import Exam from './elements/Exam';
import QuestionTypeButtonGroupChooser from './elements/QuestionTypeButtonGroupChooser';
import QuestionTypePicker from './elements/QuestionTypePicker';
import TrueFalseQuestionEditor from './elements/TrueFalseQuestionEditor';
import {createStackNavigator} from 'react-navigation';
import ScreenX from './elements/ScreenX';

class Home extends React.Component {

    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ScrollView>
                <StatusBar barStyle="light-content"/>
                <FixedHeader/>

                <Button title="Go to Screen A"
                        onPress={() => this.props.navigation
                            .navigate('ScreenA') } />
                <Button title="Go to Screen B"
                        onPress={() => this.props.navigation
                            .navigate('ScreenB') } />
                <Button title="Go to Screen X"
                        onPress={() => this.props.navigation
                            .navigate('ScreenX', {'parameter': 'some value'})}/>

                <TrueFalseQuestionEditor/>

                <QuestionTypeButtonGroupChooser/>
                <QuestionTypePicker/>
                <Exam/>

                <Icons/>
                <View style={{padding: 20}}>
                    <TextHeadings/>
                </View>
            </ScrollView>
        )
    }
}

class ScreenA extends Component {

    static navigationOptions = {title: "Screen A"}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text h1>Screen A</Text>
                <Button title="Go Home"
                        onPress={() =>this.props
                            .navigation
                            .goBack()} />
            </View>
        )
    }
}

class ScreenB extends Component {

    static navigationOptions = {title: "Screen B"};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text h1>ScreenB</Text>
            </View>
        )
    }
}

const App = createStackNavigator({
    Home,
    ScreenA,
    ScreenB,
    ScreenX
});


export default App;
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
